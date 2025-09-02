document.addEventListener('DOMContentLoaded', () => {
    // 1. VERIFICACIÓN INICIAL
    // Comprueba si el objeto 'corpus' existe. Si no, muestra un error y no hace nada.
    if (typeof corpus === 'undefined') {
        console.error("Error: El objeto 'corpus' no está definido. Asegúrate de que el archivo 'datos_capituloX.js' se está cargando correctamente antes que 'logica.js'.");
        return;
    }

    // 2. REFERENCIAS A ELEMENTOS DEL DOM
    // Guardamos las referencias a los elementos HTML para no tener que buscarlos repetidamente.
    const mainTitleElem = document.getElementById('main-title');
    const subtitleElem = document.getElementById('subtitle');
    const authorElem = document.getElementById('author');
    const contextTitleElem = document.getElementById('context-title');
    const contextContentElem = document.getElementById('context-content');
    const textTitleElem = document.getElementById('text-title');
    const paragrafusContentusElem = document.getElementById('paragrafus-contentus');
    const marginaliaContentusElem = document.getElementById('marginalia-contentus');
    const footerElem = document.getElementById('footer-text');
    const langSwitcher = document.getElementById('language-switcher');
    
    // Variable para mantener el idioma actual
    let currentLang = 'es';

    // =========================================================================================
    // === FUNCIONES DE RENDERIZADO (Dibujan el contenido en la página) ===
    // =========================================================================================

    /**
     * Función principal que actualiza todo el contenido visible de la página.
     * Se llama al cargar la página y cada vez que se cambia de idioma.
     */
    function renderContent() {
        // Renderizar la cabecera (Título, subtítulo, autor)
        mainTitleElem.textContent = corpus.titulus_principalis;
        subtitleElem.textContent = corpus.titulus_secundarius[currentLang];
        authorElem.textContent = corpus.auctor;
        
        // Renderizar la sección de introducción contextual
        contextTitleElem.textContent = corpus.introductio[currentLang].titulus;
        contextContentElem.innerHTML = corpus.introductio[currentLang].contentus;
        
        // Renderizar el título de la sección de texto principal
        textTitleElem.textContent = currentLang === 'es' ? 'Texto y Análisis' : (currentLang === 'en' ? 'Text and Analysis' : '文本與分析');
        
        // Construir y mostrar el texto en latín
        buildLatinText();
        
        // Renderizar el pie de página
        footerElem.textContent = `© ${new Date().getFullYear()} - Análisis Interactivo.`;
    }

    /**
     * Construye los párrafos de los capítulos y las palabras interactivas.
     * Esta función lee la nueva estructura de 'capitula'.
     */
    function buildLatinText() {
        paragrafusContentusElem.innerHTML = ''; // Limpiar contenido previo

        corpus.textus.capitula.forEach((capitulum, capitulumIndex) => {
            const p = document.createElement('p');
            p.className = "mb-6"; // Aumentamos el margen para separar mejor los capítulos

            capitulum.orationes.forEach((oratio, oratioIndex) => {
                const words = oratio.original_lat.split(/(\s+)/); // Dividir por espacios, manteniéndolos

                words.forEach(word => {
                    if (!word.trim()) { // Si es solo un espacio en blanco
                        p.appendChild(document.createTextNode(word));
                        return;
                    }

                    const cleanWord = word.replace(/[,.;:]/g, '');
                    const verbumData = oratio.verba.find(v => v.textus.replace(/[,.;:]/g, '') === cleanWord);

                    if (verbumData) {
                        const span = document.createElement('span');
                        span.textContent = word;
                        span.className = 'verbum';
                        // Guardamos la información necesaria directamente en el elemento
                        span.dataset.capitulumIndex = capitulumIndex;
                        span.dataset.oratioIndex = oratioIndex;
                        span.dataset.verbumTextus = verbumData.textus;
                        p.appendChild(span);
                    } else {
                        p.appendChild(document.createTextNode(word));
                    }
                });
            });
            paragrafusContentusElem.appendChild(p);
        });
    }

    /**
     * Muestra el análisis de una palabra en la barra lateral.
     * @param {HTMLElement} clickedSpan - El elemento <span> de la palabra que fue clickeada.
     */
    function showAnalysis(clickedSpan) {
        const { capitulumIndex, oratioIndex, verbumTextus } = clickedSpan.dataset;
        const oratioData = corpus.textus.capitula[capitulumIndex].orationes[oratioIndex];
        const verbumData = oratioData.verba.find(v => v.textus.replace(/[,.;:]/g, '') === verbumTextus.replace(/[,.;:]/g, ''));

        if (!verbumData) return;

        marginaliaContentusElem.innerHTML = `
            <div class="space-y-4">
                <div>
                    <p class="text-2xl textum-classicum text-gray-800 font-bold">${verbumData.textus}</p>
                    <p class="text-sm text-gray-600"><b>Lema:</b> <i>${verbumData.lemma}</i></p>
                    <p class="text-sm text-gray-600"><b>Morfología:</b> ${verbumData.morphologia}</p>
                    <p class="text-sm text-gray-600"><b>Sintaxis:</b> ${verbumData.syntaxis}</p>
                </div>
                <hr>
                <details open>
                    <summary class="font-semibold text-gray-700">Traducción de la Oración</summary>
                    <div class="details-content mt-2 text-sm text-gray-700">
                        <p>${oratioData.translationes[currentLang]}</p>
                    </div>
                </details>
                ${oratioData.ordo_syntacticus ? `
                <details>
                    <summary class="font-semibold text-gray-700">Orden Sintáctico</summary>
                    <div class="details-content mt-2 text-sm text-gray-700">
                        <code>${oratioData.ordo_syntacticus}</code>
                    </div>
                </details>` : ''}
                ${oratioData.notae ? `<p class="mt-4 text-xs italic text-gray-500"><b>Nota:</b> ${oratioData.notae}</p>` : ''}
            </div>
        `;
    }

    // =========================================================================================
    // === MANEJADORES DE EVENTOS (Responden a las acciones del usuario) ===
    // =========================================================================================
    
    // Evento para hacer clic en una palabra en latín
    paragrafusContentusElem.addEventListener('click', (e) => {
        if (e.target.classList.contains('verbum')) {
            // Resaltar la palabra seleccionada
            document.querySelectorAll('.verbum').forEach(el => el.classList.remove('activus'));
            e.target.classList.add('activus');
            // Mostrar su análisis
            showAnalysis(e.target);
        }
    });

    // Evento para los botones de cambio de idioma
    langSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const newLang = e.target.dataset.lang;
            if (newLang !== currentLang) {
                currentLang = newLang;
                // Actualizar el estilo del botón activo
                langSwitcher.querySelectorAll('.lang-btn').forEach(btn => {
                    btn.classList.toggle('active-lang', btn.dataset.lang === newLang);
                });
                // Re-renderizar toda la página en el nuevo idioma
                renderContent();
                marginaliaContentusElem.innerHTML = ''; // Limpiar la barra lateral
            }
        }
    });

    // =========================================================================================
    // === INICIALIZACIÓN (Lo que se ejecuta al cargar la página) ===
    // =========================================================================================
    renderContent();
});

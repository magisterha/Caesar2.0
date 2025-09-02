document.addEventListener('DOMContentLoaded', () => {

    // Comprueba si el objeto 'corpus' existe. Si no, no hace nada.
    if (typeof corpus === 'undefined') {
        console.error("El objeto 'corpus' no está definido. Asegúrate de cargar el archivo de datos correcto.");
        return;
    }

    let currentLang = 'es';
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
    
    // =========================================================================================
    // === FUNCIONES DE RENDERIZADO ===
    // =========================================================================================

    function renderContent() {
        // --- Renderizar cabecera ---
        mainTitleElem.textContent = corpus.titulus_principalis;
        subtitleElem.textContent = corpus.titulus_secundarius[currentLang];
        authorElem.textContent = corpus.auctor;
        
        // --- Renderizar introducción ---
        contextTitleElem.textContent = corpus.introductio[currentLang].titulus;
        contextContentElem.innerHTML = corpus.introductio[currentLang].contentus;
        
        // --- Renderizar texto principal ---
        textTitleElem.textContent = currentLang === 'es' ? 'Texto y Análisis' : (currentLang === 'en' ? 'Text and Analysis' : '文本與分析');
        buildLatinText();
        
        // --- Renderizar pie de página ---
        const year = new Date().getFullYear();
        footerElem.textContent = `© ${year} - Análisis Interactivo de Textos Clásicos.`;
    }

    function buildLatinText() {
        paragrafusContentusElem.innerHTML = ''; // Limpiar contenido previo
        corpus.textus.orationes.forEach(oratio => {
            const p = document.createElement('p');
            p.className = "mb-4"; // Margen inferior para separar párrafos
            const words = oratio.textus_originalis.split(/(\s+)/); // Dividir por espacios, manteniendo los espacios
            words.forEach((word, index) => {
                if (word.trim() === '') {
                    p.appendChild(document.createTextNode(word)); // Añadir espacio
                    return;
                }
                const verbumData = oratio.verba.find(v => v.terminus.replace(/[,.]/g, '') === word.replace(/[,.]/g, ''));
                if (verbumData) {
                    const span = document.createElement('span');
                    span.textContent = word;
                    span.className = 'verbum';
                    span.dataset.verbumId = verbumData.id_verbi;
                    p.appendChild(span);
                } else {
                    p.appendChild(document.createTextNode(word));
                }
            });
            paragrafusContentusElem.appendChild(p);
        });
    }

    function showAnalysis(verbumId) {
        // --- Limpiar análisis anterior ---
        document.querySelectorAll('.verbum').forEach(el => el.classList.remove('activus'));
        marginaliaContentusElem.innerHTML = '';
        
        // --- Encontrar la palabra y su oración ---
        let targetOratio = null;
        let targetVerbum = null;

        for (const oratio of corpus.textus.orationes) {
            const foundVerbum = oratio.verba.find(v => v.id_verbi === verbumId);
            if (foundVerbum) {
                targetOratio = oratio;
                targetVerbum = foundVerbum;
                break;
            }
        }

        if (!targetOratio || !targetVerbum) return;

        // --- Resaltar palabra activa ---
        const activeSpan = document.querySelector(`[data-verbum-id="${verbumId}"]`);
        if(activeSpan) activeSpan.classList.add('activus');

        // --- Construir el contenido de la marginalia ---
        const langKey = currentLang === 'es' ? '' : `_${currentLang}`;
        
        const content = `
            <div class="space-y-3">
                <p class="text-2xl textum-classicum text-gray-800 font-bold mb-2">${targetVerbum.terminus}</p>
                <p class="text-sm text-gray-600">${targetVerbum[`analysis_morphologicus${langKey}`]}</p>
                <hr class="my-6">
                <details class="mt-4">
                    <summary class="font-semibold text-gray-700">${targetOratio.analysis_syntacticus[currentLang].titulus}</summary>
                    <div class="details-content mt-2 text-sm text-gray-700">${targetOratio.analysis_syntacticus[currentLang].contentus}</div>
                </details>
                <details class="mt-4">
                    <summary class="font-semibold text-gray-700">${targetOratio.translationes_explicatae[currentLang].titulus}</summary>
                    <div class="details-content mt-2 text-sm text-gray-700">${targetOratio.translationes_explicatae[currentLang].contentus}</div>
                </details>
            </div>
        `;
        marginaliaContentusElem.innerHTML = content;
    }

    // =========================================================================================
    // === MANEJADORES DE EVENTOS ===
    // =========================================================================================
    
    paragrafusContentusElem.addEventListener('click', (e) => {
        if (e.target.classList.contains('verbum')) {
            const verbumId = e.target.dataset.verbumId;
            showAnalysis(verbumId);
        }
    });

    langSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const newLang = e.target.dataset.lang;
            if (newLang !== currentLang) {
                currentLang = newLang;
                langSwitcher.querySelectorAll('.lang-btn').forEach(btn => {
                    btn.classList.toggle('active-lang', btn.dataset.lang === currentLang);
                });
                renderContent(); // Re-renderiza todo el texto y los análisis en el nuevo idioma
                marginaliaContentusElem.innerHTML = ''; // Limpia la marginalia al cambiar de idioma
            }
        }
    });

    // =========================================================================================
    // === INICIALIZACIÓN ===
    // =========================================================================================
    renderContent();
});

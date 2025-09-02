function buildLatinText() {
        paragrafusContentusElem.innerHTML = ''; // Limpiar contenido previo

        // NUEVA LÓGICA: Iteramos sobre cada CAPÍTULO
        corpus.textus.capitula.forEach(capitulum => {
            
            // Creamos un solo elemento <p> para todo el capítulo
            const p = document.createElement('p');
            p.className = "mb-4"; // Margen inferior para separar los párrafos de cada capítulo

            // Ahora, iteramos sobre las ORACIONES dentro de ese capítulo
            capitulum.orationes.forEach(oratio => {
                // Dividimos el texto de la oración en palabras y espacios
                const words = oratio.textus_originalis.split(/(\s+)/); 

                words.forEach(word => {
                    if (word.trim() === '') {
                        p.appendChild(document.createTextNode(word)); // Añadir el espacio
                        return;
                    }

                    // Buscamos la palabra en el análisis de su oración
                    const verbumData = oratio.verba.find(v => v.terminus.replace(/[,.]/g, '') === word.replace(/[,.]/g, ''));

                    if (verbumData) {
                        const span = document.createElement('span');
                        span.textContent = word + " "; // Añadimos un espacio después de la palabra
                        span.className = 'verbum';
                        span.dataset.verbumId = verbumData.id_verbi;
                        p.appendChild(span);
                    } else {
                        p.appendChild(document.createTextNode(word + " ")); // Añadimos un espacio
                    }
                });
            });
            // Añadimos el párrafo del capítulo completo al contenedor principal
            paragrafusContentusElem.appendChild(p);
        });
    }

function buildLatinText() {
    paragrafusContentusElem.innerHTML = ''; // Limpiar contenido previo

    // NUEVA LÓGICA: Iteramos sobre cada CAPÍTULO
    corpus.textus.capitula.forEach(capitulum => {

        // Creamos un solo elemento <p> para todo el capítulo
        const p = document.createElement('p');
        p.className = "mb-4";

        // Ahora, iteramos sobre las ORACIONES dentro de ese capítulo
        capitulum.orationes.forEach(oratio => {
            const words = oratio.textus_originalis.split(/(\s+)/); 

            words.forEach(word => {
                if (word.trim() === '') {
                    p.appendChild(document.createTextNode(word));
                    return;
                }

                const verbumData = oratio.verba.find(v => v.terminus.replace(/[,.]/g, '') === word.replace(/[,.]/g, ''));

                if (verbumData) {
                    const span = document.createElement('span');
                    span.textContent = word + " ";
                    span.className = 'verbum';
                    span.dataset.verbumId = verbumData.id_verbi;
                    p.appendChild(span);
                } else {
                    p.appendChild(document.createTextNode(word + " "));
                }
            });
        });
        paragrafusContentusElem.appendChild(p);
    });
}

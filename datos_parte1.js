const corpus = {
    titulus_principalis: "De Bello Gallico, I, 1-4",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La Conspiración de Orgetórix",
        en: "The Conspiracy of Orgetorix",
        zh: "奧爾格托里克斯的陰謀"
    },
    introductio: {
        es: {
            titulus: "Introducción Contextual (Cap. 1-4)",
            contentus: `<p>Los primeros capítulos de "De Bello Gallico" sientan las bases de toda la obra. César comienza con una descripción geográfica y etnográfica de la Galia, dividiéndola en sus tres partes principales. Inmediatamente después, introduce al personaje catalizador del conflicto: Orgetórix, un noble helvecio cuya ambición por el poder le lleva a organizar una migración masiva de su pueblo.</p><p>Esta sección es crucial, pues no solo presenta a los helvecios como una amenaza que justifica la intervención romana, sino que también revela las tensioniones internas y las rivalidades entre las tribus galas, un factor que César explotará magistralmente a lo largo de sus campañas.</p>`
        },
        en: {
            titulus: "Contextual Introduction (Ch. 1-4)",
            contentus: `<p>The opening chapters of "De Bello Gallico" lay the groundwork for the entire work. Caesar begins with a geographical and ethnographic description of Gaul, dividing it into its three main parts. Immediately after, he introduces the character who catalyzes the conflict: Orgetorix, a Helvetian noble whose ambition for power leads him to organize a mass migration of his people.</p><p>This section is crucial, as it not only presents the Helvetii as a threat justifying Roman intervention but also reveals the internal tensions and rivalries among the Gallic tribes, a factor that Caesar will masterfully exploit throughout his campaigns.</p>`
        },
        zh: {
            titulus: "背景介紹 (1-4章)",
            contentus: `<p>《高盧戰記》的開篇章節為整部著作奠定了基礎。凱撒首先對高盧進行了地理和民族描述，將其劃分為三個主要部分。緊接著，他介紹了引發衝突的關鍵人物：奧爾格托里克斯，一位赫爾維蒂貴族，其對權力的野心促使他組織了整個部落的大規模遷徙。</p><p>這一部分至關重要，因為它不僅將赫爾維蒂人描繪成一個證明羅馬干預正當性的威脅，還揭示了高盧各部落之間的內部緊張和敵對關係——這正是凱撒在其整個戰役中巧妙利用的一個因素。</p>`
        }
    },
    textus: {
        id: 1,
        capitula: [
            {
                id_capituli: 1,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Gallia est omnis diuisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.",
                        verba: [
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Copulativo" },
                            { textus: "omnis", lemma: "omnis", morphologia: "Adj. 3ª dec, F, Nom, Sg", syntaxis: "Atributo del sujeto" },
                            { textus: "diuisa", lemma: "diuido", morphologia: "Participio Perf. Pas, F, Nom, Sg", syntaxis: "Predicativo del Sujeto (forma la voz pasiva perifrática con 'est')" },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "partes", lemma: "pars", morphologia: "Sust. 3ª dec, F, Acu, Pl", syntaxis: "Complemento Circunstancial de Dirección (con 'in')" },
                            { textus: "tres", lemma: "tres", morphologia: "Adj. numeral, F, Acu, Pl", syntaxis: "Atributo de 'partes'" },
                            { textus: "quarum", lemma: "qui", morphologia: "Pronombre relativo, F, Gen, Pl", syntaxis: "Complemento del Nombre (de unam, aliam, tertiam)" },
                            { textus: "unam", lemma: "unus", morphologia: "Adj. pronominal, F, Acu, Sg", syntaxis: "Objeto Directo" },
                            { textus: "incolunt", lemma: "incolo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal (de la subordinada de relativo)" },
                            { textus: "Belgae", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Sujeto (de 'incolunt')" },
                            { textus: "aliam", lemma: "alius", morphologia: "Adj. pronominal, F, Acu, Sg", syntaxis: "Objeto Directo (verbo 'incolunt' elidido)" },
                            { textus: "Aquitani", lemma: "Aquitani", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto (verbo 'incolunt' elidido)" },
                            { textus: "tertiam", lemma: "tertius", morphologia: "Adj. pronominal, F, Acu, Sg", syntaxis: "Objeto Directo (verbo elidido, referente a 'ii' o 'illi')" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Pl", syntaxis: "Sujeto (de 'appellantur')" },
                            { textus: "ipsorum", lemma: "ipse", morphologia: "Pronombre-Adj. demost, M, Gen, Pl", syntaxis: "Complemento del Nombre (de 'lingua')" },
                            { textus: "lingua", lemma: "lingua", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Ablativo de Especificación o Respecto" },
                            { textus: "Celtae", lemma: "Celtae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Predicativo del Sujeto (de 'qui')" },
                            { textus: "nostra", lemma: "noster", morphologia: "Adj. posesivo, F, Abl, Sg", syntaxis: "Atributo (de 'lingua', elidido)" },
                            { textus: "Galli", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Predicativo del Sujeto (de 'qui')" },
                            { textus: "appellantur", lemma: "appello", morphologia: "Verbo, Pres. Ind. Pas, 3ª Pl", syntaxis: "Verbo Principal (de la subordinada de relativo)" }
                        ],
                        ordo_syntacticus: "[Gallia (S) est omnis diuisa (V)] [in partes tres (CC)], quarum [unam (OD) incolunt (V) Belgae (S)], [aliam (OD) (incolunt) Aquitani (S)], [tertiam (OD) (incolunt ii) [qui (S) appellantur (V) Celtae (PVO) (lingua ipsorum) / Galli (PVO) (nostra lingua)]]].",
                        translationes: {
                            es: "Toda la Galia está dividida en tres partes, de las cuales una la habitan los belgas, otra los aquitanos, y la tercera aquellos que en su propia lengua se llaman celtas y en la nuestra, galos.",
                            en: "All Gaul is divided into three parts, one of which the Belgae inhabit, another the Aquitani, the third those who in their own language are called Celts, in ours, Gauls.",
                            zh: "高盧全境分為三個部分，其中一部分由比利時人居住，另一部分由阿基坦人居住，第三部分由那些在自己的語言中稱為凱爾特人，在我們的語言中稱為高盧人的人居住。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Hi omnes lingua, institutis, legibus inter se differunt.",
                        verba: [
                            { textus: "Hi", lemma: "hic", morphologia: "Pronombre demost, M, Nom, Pl", syntaxis: "Sujeto" },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adj. 3ª dec, M, Nom, Pl", syntaxis: "Atributo de 'Hi'" },
                            { textus: "lingua", lemma: "lingua", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Ablativo de Especificación" },
                            { textus: "institutis", lemma: "institutum", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Ablativo de Especificación" },
                            { textus: "legibus", lemma: "lex", morphologia: "Sust. 3ª dec, F, Abl, Pl", syntaxis: "Ablativo de Especificación" },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Complemento de 'inter'" },
                            { textus: "differunt", lemma: "differo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal" }
                        ],
                        ordo_syntacticus: "[Hi omnes (S) differunt (V) inter se (CC)] [lingua, institutis, legibus (CC de Especificación)].",
                        translationes: {
                            es: "Todos estos se diferencian entre sí por la lengua, las instituciones y las leyes.",
                            en: "All these differ from each other in language, institutions, and laws.",
                            zh: "所有這些民族在語言、制度和法律方面彼此不同。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana diuidit.",
                        verba: [
                            { textus: "Gallos", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Objeto Directo" },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "Aquitanis", lemma: "Aquitani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento Agente o de Separación" },
                            { textus: "Garumna", lemma: "Garumna", morphologia: "Sust. 1ª dec, M, Nom, Sg", syntaxis: "Sujeto (en aposición a 'flumen')" },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "Belgis", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Abl, Pl", syntaxis: "Complemento Agente o de Separación" },
                            { textus: "Matrona", lemma: "Matrona", morphologia: "Sust. 1ª dec, M, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "Sequana", lemma: "Sequana", morphologia: "Sust. 1ª dec, M, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "diuidit", lemma: "diuido", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal" }
                        ],
                        ordo_syntacticus: "[Garumna flumen (S) diuidit (V) Gallos (OD) ab Aquitanis (C. Agente)], [(et) Matrona et Sequana (S) (diuidunt) (Gallos) a Belgis (C. Agente)].",
                        notae: "El verbo 'diuidit' está en singular concertando con el sujeto más cercano 'Garumna flumen', pero se entiende que 'Matrona et Sequana' realizan la misma acción.",
                        translationes: {
                            es: "A los galos los separa de los aquitanos el río Garona, y de los belgas, el Marne y el Sena.",
                            en: "The river Garonne separates the Gauls from the Aquitani; the Marne and the Seine separate them from the Belgae.",
                            zh: "加龍河將高盧人與阿基坦人分開，馬恩河和塞納河將他們與比利時人分開。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate prouinciae longissime absunt, minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos animos pertinent inportant, proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum continenter bellum gerunt.",
                        notae: "Esta es una oración compleja con múltiples cláusulas subordinadas. La analizaré en segmentos lógicos dentro del array 'verba'.",
                        verba: [
                            // Segmento 1: Horum omnium fortissimi sunt Belgae
                            { textus: "Horum", lemma: "hic", morphologia: "Pronombre demost, M, Gen, Pl", syntaxis: "Complemento Partitivo de 'fortissimi'" },
                            { textus: "omnium", lemma: "omnis", morphologia: "Adj. 3ª dec, M, Gen, Pl", syntaxis: "Complemento Partitivo de 'fortissimi'" },
                            { textus: "fortissimi", lemma: "fortis", morphologia: "Adj. 3ª dec, M, Nom, Pl, Superlativo", syntaxis: "Atributo o Predicativo del Sujeto" },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Copulativo" },
                            { textus: "Belgae", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Sujeto" },
                            // Segmento 2: propterea quod ... absunt
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo causal" },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante", syntaxis: "Nexo causal" },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "cultu", lemma: "cultus", morphologia: "Sust. 4ª dec, M, Abl, Sg", syntaxis: "Complemento de Separación" },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "humanitate", lemma: "humanitas", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Complemento de Separación" },
                            { textus: "prouinciae", lemma: "prouincia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "longissime", lemma: "longe", morphologia: "Adverbio, Superlativo", syntaxis: "Complemento Circunstancial de Lugar" },
                            { textus: "absunt", lemma: "absum", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada causal)" },
                            // Segmento 3: minimeque... commeant atque... inportant
                            { textus: "minimeque", lemma: "minime", morphologia: "Adverbio, Superlativo + '-que' enclítico", syntaxis: "Complemento Circunstancial de Cantidad / Nexo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre personal, M, Acu, Pl", syntaxis: "Complemento de Dirección" },
                            { textus: "mercatores", lemma: "mercator", morphologia: "Sust. 3ª dec, M, Nom, Pl", syntaxis: "Sujeto" },
                            { textus: "saepe", lemma: "saepe", morphologia: "Adverbio", syntaxis: "Complemento Circunstancial de Tiempo/Frecuencia" },
                            { textus: "commeant", lemma: "commeo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo" },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, N, Acu, Pl", syntaxis: "Objeto Directo" },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, N, Nom/Acu, Pl", syntaxis: "Sujeto (de 'pertinent')" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "effeminandos", lemma: "effemino", morphologia: "Gerundivo, M, Acu, Pl", syntaxis: "Atributo de 'animos' (con valor final)" },
                            { textus: "animos", lemma: "animus", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Complemento de 'ad'" },
                            { textus: "pertinent", lemma: "pertineo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada de relativo)" },
                            { textus: "inportant", lemma: "inporto", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo" },
                            // Segmento 4: proximique sunt Germanis
                            { textus: "proximique", lemma: "proximus", morphologia: "Adj. 1ª/2ª dec, M, Nom, Pl, Superlativo + '-que' enclítico", syntaxis: "Atributo o Predicativo del Sujeto / Nexo" },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Copulativo" },
                            { textus: "Germanis", lemma: "Germani", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Complemento del Adjetivo 'proximi'" },
                            // Segmento 5: qui... incolunt
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Pl", syntaxis: "Sujeto" },
                            { textus: "trans", lemma: "trans", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Complemento de 'trans'" },
                            { textus: "incolunt", lemma: "incolo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada de relativo)" },
                            // Segmento 6: quibuscum... bellum gerunt
                            { textus: "quibuscum", lemma: "qui + cum", morphologia: "Pronombre relativo, M, Abl, Pl + prep. 'cum'", syntaxis: "Complemento Circunstancial de Compañía" },
                            { textus: "continenter", lemma: "continenter", morphologia: "Adverbio", syntaxis: "Complemento Circunstancial de Modo/Tiempo" },
                            { textus: "bellum", lemma: "bellum", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo" },
                            { textus: "gerunt", lemma: "gero", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo" }
                        ],
                        ordo_syntacticus: "Complejo. [Belgae (S) sunt fortissimi (Atributo) horum omnium (CN Partitivo)], [propterea quod (Nexo Causal)...]",
                        translationes: {
                            es: "De todos estos, los más fuertes son los belgas, porque están muy alejados del refinamiento y la civilización de la provincia, y muy raras veces los mercaderes llegan hasta ellos y les llevan las cosas que contribuyen a afeminar los ánimos, y son los más próximos a los germanos, que habitan al otro lado del Rin, con quienes continuamente hacen la guerra.",
                            en: "Of all these, the bravest are the Belgae, because they are furthest from the civilization and refinement of the Province, and merchants least frequently resort to them and import those things which tend to effeminate the mind, and they are the nearest to the Germans, who dwell beyond the Rhine, with whom they are continually waging war.",
                            zh: "在所有這些民族中，比利時人最為勇敢，因為他們距離羅馬行省的文明和教化最遠，商人最少去他們那裡，帶去的那些足以軟化人心的東西也最少，而且他們最靠近居住在萊茵河對岸的日耳曼人，並與他們持續作戰。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Qua de causa Heluetii quoque reliquos Gallos uirtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent, aut ipsi in eorum finibus bellum gerunt.",
                        verba: [
                             // Segmento 1: Qua de causa... praecedunt
                            { textus: "Qua", lemma: "qui", morphologia: "Pronombre-Adj. relativo, F, Abl, Sg", syntaxis: "Atributo de 'causa'" },
                            { textus: "de", lemma: "de", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "causa", lemma: "causa", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Complemento Circunstancial de Causa" },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto" },
                            { textus: "quoque", lemma: "quoque", morphologia: "Adverbio", syntaxis: "Modificador (también)" },
                            { textus: "reliquos", lemma: "reliquus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl", syntaxis: "Atributo de 'Gallos'" },
                            { textus: "Gallos", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Objeto Directo" },
                            { textus: "uirtute", lemma: "uirtus", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Especificación" },
                            { textus: "praecedunt", lemma: "praecedo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal" },
                             // Segmento 2: quod... contendunt
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante", syntaxis: "Nexo causal" },
                            { textus: "fere", lemma: "fere", morphologia: "Adverbio", syntaxis: "Modificador (casi)" },
                            { textus: "cotidianis", lemma: "cotidianus", morphologia: "Adj. 1ª/2ª dec, N, Abl, Pl", syntaxis: "Atributo de 'proeliis'" },
                            { textus: "proeliis", lemma: "proelium", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Ablativo Instrumental o de Modo" },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "Germanis", lemma: "Germani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento de Compañía" },
                            { textus: "contendunt", lemma: "contendo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada causal)" },
                             // Segmento 3: cum aut... prohibent, aut... gerunt
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción subordinante", syntaxis: "Nexo temporal/causal" },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo" },
                            { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, M, Abl, Pl", syntaxis: "Atributo de 'finibus'" },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Ablativo de Separación" },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, M, Acu, Pl", syntaxis: "Objeto Directo" },
                            { textus: "prohibent", lemma: "prohibeo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada)" },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo" },
                            { textus: "ipsi", lemma: "ipse", morphologia: "Pronombre-Adj. demost, M, Nom, Pl", syntaxis: "Sujeto (Heluetii)" },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "eorum", lemma: "is", morphologia: "Pronombre, M, Gen, Pl", syntaxis: "Complemento del Nombre (de 'finibus')" },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Complemento Circunstancial de Lugar" },
                            { textus: "bellum", lemma: "bellum", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo" },
                            { textus: "gerunt", lemma: "gero", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada)" }
                        ],
                        translationes: {
                            es: "Por esta razón, los helvecios también aventajan en valor a los demás galos, porque combaten con los germanos en batallas casi diarias, ya sea apartándolos de sus propias fronteras, ya sea haciendo ellos mismos la guerra en las fronteras de aquellos.",
                            en: "For this reason, the Helvetii also surpass the rest of the Gauls in valor, as they contend with the Germans in almost daily battles, when they either repel them from their own territories, or themselves wage war on their frontiers.",
                            zh: "因此，赫爾維蒂人也在勇氣上超過了其他高盧人，因為他們幾乎每天都與日耳曼人作戰，要麼是將他們逐出自己的領土，要麼是自己在對方的領土上發動戰爭。"
                        }
                    },
                     {
                        id_orationis: 'o6',
                        original_lat: "Eorum una pars, quam Gallos optinere dictum est, initium capit a flumine Rhodano, continentur Garumna flumine, Oceano, finibus Belgarum, attingit etiam ab Sequanis et Heluetiis flumen Rhenum, uergit ad septentriones.",
                        notae: "Oración con varios verbos y sujetos implícitos que se refieren a 'una pars'. El verbo 'continentur' está en plural, un caso de silepsis (concordancia según el sentido, 'los territorios de esa parte').",
                        verba: [
                            { textus: "Eorum", lemma: "is", morphologia: "Pronombre, M, Gen, Pl", syntaxis: "Complemento Partitivo de 'una pars'" },
                            { textus: "una", lemma: "unus", morphologia: "Adj. numeral, F, Nom, Sg", syntaxis: "Atributo de 'pars'" },
                            { textus: "pars", lemma: "pars", morphologia: "Sust. 3ª dec, F, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, F, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo" },
                            { textus: "Gallos", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Sujeto de la Oración de Infinitivo (alternativo, el sujeto es 'quam')" },
                            { textus: "optinere", lemma: "optineo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo de la Oración de Infinitivo" },
                            { textus: "dictum", lemma: "dico", morphologia: "Participio Perf. Pas, N, Nom, Sg", syntaxis: "Verbo (forma impersonal con 'est')" },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo" },
                            { textus: "initium", lemma: "initium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo de 'capit'" },
                            { textus: "capit", lemma: "capio", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo" },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento de Origen/Separación" },
                            { textus: "Rhodano", lemma: "Rhodanus", morphologia: "Sust. 2ª dec, M, Abl, Sg", syntaxis: "Aposición a 'flumine'" },
                            { textus: "continentur", lemma: "contineo", morphologia: "Verbo, Pres. Ind. Pas, 3ª Pl", syntaxis: "Verbo" },
                            { textus: "Garumna", lemma: "Garumna", morphologia: "Sust. 1ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental o de Límite" },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Ablativo Instrumental o de Límite" },
                            { textus: "Oceano", lemma: "Oceanus", morphologia: "Sust. 2ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental o de Límite" },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Ablativo Instrumental o de Límite" },
                            { textus: "Belgarum", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Gen, Pl", syntaxis: "Complemento del Nombre" },
                            { textus: "attingit", lemma: "attingo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo" },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador (también)" },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "Sequanis", lemma: "Sequani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento Circunstancial de Procedencia ('desde la zona de')" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento Circunstancial de Procedencia" },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Acu, Sg", syntaxis: "Objeto Directo de 'attingit'" },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Aposición a 'flumen'" },
                            { textus: "uergit", lemma: "uergo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "septentriones", lemma: "septentriones", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Complemento de Dirección" }
                        ],
                        translationes: {
                            es: "Una parte de estos [pueblos], la que se ha dicho que ocupan los galos, toma su inicio en el río Ródano; está limitada por el río Garona, el Océano y el territorio de los belgas; por la parte de los sécuanos y los helvecios, toca también el río Rin; y se extiende hacia el norte.",
                            en: "One part of these, which it has been said that the Gauls occupy, takes its beginning at the river Rhone; it is bounded by the Garonne River, the Ocean, and the territories of the Belgae; it also touches, on the side of the Sequani and the Helvetii, the river Rhine; and it verges toward the north.",
                            zh: "其中一部分，即前面所說的高盧人所佔據的部分，始於羅訥河；它以加龍河、大西洋和比利時人的領土為界；在塞夸尼人和赫爾維蒂人那邊，它還接觸到萊茵河；並朝向北方延伸。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Belgae ab extremis Galliae finibus oriuntur, pertinent ad inferiorem partem fluminis Rheni, spectant in septentrionem et orientem solem.",
                        verba: [
                            { textus: "Belgae", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Sujeto" },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "extremis", lemma: "extremus", morphologia: "Adj. 1ª/2ª dec, M, Abl, Pl, Superlativo", syntaxis: "Atributo de 'finibus'" },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Complemento de Origen" },
                            { textus: "oriuntur", lemma: "orior", morphologia: "Verbo Deponente, Pres. Ind, 3ª Pl", syntaxis: "Verbo" },
                            { textus: "pertinent", lemma: "pertineo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "inferiorem", lemma: "inferior", morphologia: "Adj. 3ª dec, F, Acu, Sg, Comparativo", syntaxis: "Atributo de 'partem'" },
                            { textus: "partem", lemma: "pars", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Complemento de Dirección" },
                            { textus: "fluminis", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "Rheni", lemma: "Rhenus", morphologia: "Sust. 2ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "spectant", lemma: "specto", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo" },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "septentrionem", lemma: "septentrio", morphologia: "Sust. 3ª dec, M, Acu, Sg", syntaxis: "Complemento de Dirección" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "orientem", lemma: "oriens", morphologia: "Participio Pres. Act. (sustantivado), M, Acu, Sg", syntaxis: "Atributo de 'solem' (sol naciente)" },
                            { textus: "solem", lemma: "sol", morphologia: "Sust. 3ª dec, M, Acu, Sg", syntaxis: "Complemento de Dirección (con 'in', elidido)" }
                        ],
                        translationes: {
                            es: "Los belgas tienen su origen en los confines más alejados de la Galia, se extienden hasta la parte inferior del río Rin y miran hacia el norte y el sol naciente (el este).",
                            en: "The Belgae arise from the farthest frontiers of Gaul, extend to the lower part of the river Rhine, and look toward the north and the rising sun (the east).",
                            zh: "比利時人源於高盧最遠的邊界，延伸至萊茵河下游，朝向北方和日出（東方）。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Aquitania a Garumna flumine ad Pyrenaeos montes et eam partem Oceani quae est ad Hispaniam pertinet; spectat inter occasum solis et septentriones.",
                        verba: [
                            { textus: "Aquitania", lemma: "Aquitania", morphologia: "Sust. 1ª dec, F, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "Garumna", lemma: "Garumna", morphologia: "Sust. 1ª dec, M, Abl, Sg", syntaxis: "Aposición a 'flumine'" },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento de Origen/Lugar" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "Pyrenaeos", lemma: "Pyrenaeus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl", syntaxis: "Atributo de 'montes'" },
                            { textus: "montes", lemma: "mons", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Complemento de Dirección" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "eam", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Sg", syntaxis: "Atributo de 'partem'" },
                            { textus: "partem", lemma: "pars", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Complemento de Dirección" },
                            { textus: "Oceani", lemma: "Oceanus", morphologia: "Sust. 2ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, F, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo (subordinada de relativo)" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "Hispaniam", lemma: "Hispania", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Complemento de Lugar ('junto a')" },
                            { textus: "pertinet", lemma: "pertineo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal" },
                            { textus: "spectat", lemma: "specto", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo" },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "occasum", lemma: "occasus", morphologia: "Sust. 4ª dec, M, Acu, Sg", syntaxis: "Complemento de 'inter'" },
                            { textus: "solis", lemma: "sol", morphologia: "Sust. 3ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "septentriones", lemma: "septentriones", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Complemento de 'inter'" }
                        ],
                        translationes: {
                            es: "Aquitania se extiende desde el río Garona hasta los montes Pirineos y esa parte del Océano que está junto a Hispania; mira entre el ocaso del sol (el oeste) y el norte.",
                            en: "Aquitania extends from the Garonne River to the Pyrenees mountains and to that part of the Ocean which is near Spain; it looks between the setting of the sun (the west) and the north.",
                            zh: "阿基坦尼亞從加龍河延伸至庇里牛斯山脈和靠近西班牙的那部分大西洋；它朝向日落（西方）和北方之間。"
                        }
                    }
                ]
            }
        ]
    }
};

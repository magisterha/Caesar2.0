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
            contentus: `<p>Los primeros capítulos de "De Bello Gallico" sientan las bases de toda la obra. César comienza con una descripción geográfica y etnográfica de la Galia, dividiéndola en sus tres partes principales. Inmediatamente después, introduce al personaje catalizador del conflicto: Orgetórix, un noble helvecio cuya ambición por el poder le lleva a organizar una migración masiva de su pueblo.</p><p>Esta sección es crucial, pues no solo presenta a los helvecios como una amenaza que justifica la intervención romana, sino que también revela las tensiones internas y las rivalidades entre las tribus galas, un factor que César explotará magistralmente a lo largo de sus campañas.</p>`
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

    textus: {
        id: 1,
        capitula: [
            {
                id_capituli: 1,
                orationes: [
            {
                id_orationis: 'o1',
                textus_originalis: "Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>La <b>cláusula principal</b> es "<i>Gallia est omnis divisa in partes tres</i>". A esta se subordina una <b>cláusula de relativo</b> introducida por "<i>quarum</i>", que se divide en tres segmentos paralelos y elípticos.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>The <b>main clause</b> is "<i>Gallia est omnis divisa in partes tres</i>." A <b>relative clause</b> introduced by "<i>quarum</i>" is subordinated to it, which is divided into three parallel and elliptical segments.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p><b>主句</b>是「<i>Gallia est omnis divisa in partes tres</i>」。其下是一個由「<i>quarum</i>」引導的<b>關係子句</b>，該子句分為三個平行且省略的段落。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Toda la Galia está dividida en tres partes: una la habitan los belgas, otra los aquitanos, y la tercera aquellos que en su propia lengua se llaman celtas y en la nuestra, galos.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>All Gaul is divided into three parts, one of which the Belgae inhabit, another the Aquitani, and the third, those who in their own language are called Celts, in ours, Gauls.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯/文學翻譯：</b><br><i>整個高盧分為三個部分：其中一部分由貝爾格人居住，另一部分由阿奎坦尼人居住，第三部分則是那些在自己語言中稱為凱爾特人、在我們的語言中稱為高盧人的民族。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v1_1', terminus: 'Gallia', analysis_morphologicus: 'Sustantivo, f., sg., nom. Sujeto.', analysis_morphologicus_en: 'Noun, f., sg., nom. Subject.', analysis_morphologicus_zh: '名詞，陰性，單數，主格。主語。'},
                    { id_verbi: 'v1_2', terminus: 'est', analysis_morphologicus: 'Verbo (sum), 3ª p., sg., pres., ind. Verbo copulativo.', analysis_morphologicus_en: 'Verb (sum), 3rd p., sg., pres., ind. Copulative verb.', analysis_morphologicus_zh: '動詞（sum），第三人稱，單數，現在時，直陳。繫動詞。'},
                    { id_verbi: 'v1_3', terminus: 'omnis', analysis_morphologicus: 'Adj., f., sg., nom. Modifica a "Gallia".', analysis_morphologicus_en: 'Adj., f., sg., nom. Modifies "Gallia".', analysis_morphologicus_zh: '形容詞，陰性，單數，主格。修飾「Gallia」。'},
                    { id_verbi: 'v1_4', terminus: 'divisa', analysis_morphologicus: 'Participio perfecto pasivo (divido), f., sg., nom. Atributo.', analysis_morphologicus_en: 'Perfect passive participle (divido), f., sg., nom. Predicate adjective.', analysis_morphologicus_zh: '完成時被動分詞（divido），陰性，單數，主格。表語。'},
                    { id_verbi: 'v1_5', terminus: 'in', analysis_morphologicus: 'Preposición + Acusativo (resultado).', analysis_morphologicus_en: 'Preposition + Accusative (result).', analysis_morphologicus_zh: '介詞 + 賓格（結果）。'},
                    { id_verbi: 'v1_6', terminus: 'partes', analysis_morphologicus: 'Sustantivo, f., pl., acus. Objeto de "in".', analysis_morphologicus_en: 'Noun, f., pl., acc. Object of "in".', analysis_morphologicus_zh: '名詞，陰性，複數，賓格。「in」的賓語。'},
                    { id_verbi: 'v1_7', terminus: 'tres,', analysis_morphologicus: 'Adj. numeral, f., pl., acus. Modifica a "partes".', analysis_morphologicus_en: 'Numeral adj., f., pl., acc. Modifies "partes".', analysis_morphologicus_zh: '數詞形容詞，陰性，複數，賓格。修飾「partes」。'},
                    { id_verbi: 'v1_8', terminus: 'quarum', analysis_morphologicus: 'Pronombre relativo, f., pl., gen. Genitivo partitivo.', analysis_morphologicus_en: 'Relative pronoun, f., pl., gen. Partitive genitive.', analysis_morphologicus_zh: '關係代名詞，陰性，複數，屬格。部分屬格。'},
                    { id_verbi: 'v1_9', terminus: 'unam', analysis_morphologicus: 'Adj./Pron. numeral, f., sg., acus. Objeto directo.', analysis_morphologicus_en: 'Numeral adj./pron., f., sg., acc. Direct object.', analysis_morphologicus_zh: '數詞形容詞/代名詞，陰性，單數，賓格。直接賓語。'},
                    { id_verbi: 'v1_10', terminus: 'incolunt', analysis_morphologicus: 'Verbo, 3ª p., pl., pres., ind., act.', analysis_morphologicus_en: 'Verb, 3rd p., pl., pres., ind., act.', analysis_morphologicus_zh: '動詞，第三人稱，複數，現在時，直陳，主動。'},
                    { id_verbi: 'v1_11', terminus: 'Belgae,', analysis_morphologicus: 'Sustantivo, m., pl., nom. Sujeto.', analysis_morphologicus_en: 'Noun, m., pl., nom. Subject.', analysis_morphologicus_zh: '名詞，陽性，複數，主格。主語。'},
                    { id_verbi: 'v1_12', terminus: 'aliam', analysis_morphologicus: 'Pronombre, f., sg., acus. Objeto directo (verbo elidido).', analysis_morphologicus_en: 'Pronoun, f., sg., acc. Direct object (verb elided).', analysis_morphologicus_zh: '代名詞，陰性，單數，賓格。直接賓語（動詞省略）。'},
                    { id_verbi: 'v1_13', terminus: 'Aquitani,', analysis_morphologicus: 'Sustantivo, m., pl., nom. Sujeto (verbo elidido).', analysis_morphologicus_en: 'Noun, m., pl., nom. Subject (verb elided).', analysis_morphologicus_zh: '名詞，陽性，複數，主格。主語（動詞省略）。'},
                    { id_verbi: 'v1_14', terminus: 'tertiam', analysis_morphologicus: 'Adj. numeral, f., sg., acus. Objeto directo (verbo elidido).', analysis_morphologicus_en: 'Numeral adj., f., sg., acc. Direct object (verb elided).', analysis_morphologicus_zh: '數詞形容詞，陰性，單數，賓格。直接賓語（動詞省略）。'},
                    { id_verbi: 'v1_15', terminus: 'qui', analysis_morphologicus: 'Pronombre relativo, m., pl., nom. Sujeto.', analysis_morphologicus_en: 'Relative pronoun, m., pl., nom. Subject.', analysis_morphologicus_zh: '關係代名詞，陽性，複數，主格。主語。'},
                    { id_verbi: 'v1_16', terminus: 'ipsorum', analysis_morphologicus: 'Pronombre, m., pl., gen. Genitivo posesivo.', analysis_morphologicus_en: 'Pronoun, m., pl., gen. Possessive genitive.', analysis_morphologicus_zh: '代名詞，陽性，複數，屬格。所有格。'},
                    { id_verbi: 'v1_17', terminus: 'lingua', analysis_morphologicus: 'Sustantivo, f., sg., abl. Ablativo de respecto.', analysis_morphologicus_en: 'Noun, f., sg., abl. Ablative of respect.', analysis_morphologicus_zh: '名詞，陰性，單數，離格。方面離格。'},
                    { id_verbi: 'v1_18', terminus: 'Celtae,', analysis_morphologicus: 'Sustantivo, m., pl., nom. Predicado nominal.', analysis_morphologicus_en: 'Noun, m., pl., nom. Predicate nominative.', analysis_morphologicus_zh: '名詞，陽性，複數，主格。主格表語。'},
                    { id_verbi: 'v1_19', terminus: 'nostra', analysis_morphologicus: 'Adj. posesivo, f., sg., abl. Modifica a "lingua" (elidido).', analysis_morphologicus_en: 'Possessive adj., f., sg., abl. Modifies "lingua" (elided).', analysis_morphologicus_zh: '物主形容詞，陰性，單數，離格。修飾「lingua」（省略）。'},
                    { id_verbi: 'v1_20', terminus: 'Galli', analysis_morphologicus: 'Sustantivo, m., pl., nom. Predicado nominal.', analysis_morphologicus_en: 'Noun, m., pl., nom. Predicate nominative.', analysis_morphologicus_zh: '名詞，陽性，複數，主格。主格表語。'},
                    { id_verbi: 'v1_21', terminus: 'appellantur.', analysis_morphologicus: 'Verbo, 3ª p., pl., pres., ind., pas.', analysis_morphologicus_en: 'Verb, 3rd p., pl., pres., ind., pass.', analysis_morphologicus_zh: '動詞，第三人稱，複數，現在時，直陳，被動。'}
                ]
            },
            {
                id_orationis: 'o2',
                textus_originalis: "Hi omnes lingua, institutis, legibus inter se differunt.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración simple. <b>Sujeto</b>: "<i>Hi omnes</i>". <b>Verbo</b>: "<i>differunt</i>". Los tres ablativos (<i>lingua, institutis, legibus</i>) son de respeto ("en cuanto a").</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>Simple sentence. <b>Subject</b>: "<i>Hi omnes</i>". <b>Verb</b>: "<i>differunt</i>". The three ablatives (<i>lingua, institutis, legibus</i>) are of respect ("with respect to").</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>簡單句。<b>主語</b>：「<i>Hi omnes</i>」。<b>動詞</b>：「<i>differunt</i>」。三個離格（<i>lingua, institutis, legibus</i>）是方面離格（「在...方面」）。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Todos ellos se diferencian entre sí por la lengua, las costumbres y las leyes.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>All of these differ from each other in language, customs, and laws.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>所有這些民族的語言、制度和法律都各不相同。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v2_1', terminus: 'Hi', analysis_morphologicus: "Pronombre demostrativo ('hic'), m., pl., nom. Sujeto.", analysis_morphologicus_en: "Demonstrative pronoun ('hic'), m., pl., nom. Subject.", analysis_morphologicus_zh: "指示代名詞（'hic'），陽性，複數，主格。主語。" },
                    { id_verbi: 'v2_2', terminus: 'omnes', analysis_morphologicus: "Adjetivo, m., pl., nom. Modifica a 'Hi'.", analysis_morphologicus_en: "Adjective, m., pl., nom. Modifies 'Hi'.", analysis_morphologicus_zh: "形容詞，陽性，複數，主格。修飾「Hi」。" },
                    { id_verbi: 'v2_3', terminus: 'lingua,', analysis_morphologicus: "Sustantivo, f., sg., abl. Ablativo de respeto.", analysis_morphologicus_en: "Noun, f., sg., abl. Ablative of respect.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。方面離格。" },
                    { id_verbi: 'v2_4', terminus: 'institutis,', analysis_morphologicus: "Sustantivo, n., pl., abl. Ablativo de respeto.", analysis_morphologicus_en: "Noun, n., pl., abl. Ablative of respect.", analysis_morphologicus_zh: "名詞，中性，複數，離格。方面離格。" },
                    { id_verbi: 'v2_5', terminus: 'legibus', analysis_morphologicus: "Sustantivo, f., pl., abl. Ablativo de respeto.", analysis_morphologicus_en: "Noun, f., pl., abl. Ablative of respect.", analysis_morphologicus_zh: "名詞，陰性，複數，離格。方面離格。" },
                    { id_verbi: 'v2_6', terminus: 'inter', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v2_7', terminus: 'se', analysis_morphologicus: "Pronombre reflexivo, acus. Expresión recíproca 'inter se' (entre sí).", analysis_morphologicus_en: "Reflexive pronoun, acc. Reciprocal expression 'inter se' (among themselves).", analysis_morphologicus_zh: "反身代名詞，賓格。相互關係表達「inter se」（彼此之間）。" },
                    { id_verbi: 'v2_8', terminus: 'differunt.', analysis_morphologicus: "Verbo ('differo'), 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb ('differo'), 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞（'differo'），第三人稱，複數，現在時，直陳，主動。" }
                ]
            },
            {
                id_orationis: 'o3',
                textus_originalis: "Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana diuidit.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración simple con sujeto compuesto. <b>Verbo</b>: "<i>diuidit</i>". <b>Objeto Directo</b>: "<i>Gallos</i>". <b>Sujeto</b>: "<i>Garumna flumen</i>" y "<i>Matrona et Sequana</i>".</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A simple sentence with a compound subject. <b>Verb</b>: "<i>diuidit</i>". <b>Direct Object</b>: "<i>Gallos</i>". <b>Subject</b>: "<i>Garumna flumen</i>" and "<i>Matrona et Sequana</i>".</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>帶有複合主語的簡單句。<b>動詞</b>：「<i>diuidit</i>」。<b>直接賓語</b>：「<i>Gallos</i>」。<b>主語</b>：「<i>Garumna flumen</i>」和「<i>Matrona et Sequana</i>」。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>El río Garona separa a los galos de los aquitanos; el Marne y el Sena los separan de los belgas.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>The Garonne river separates the Gauls from the Aquitani; the Marne and the Seine separate them from the Belgae.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>加龍河分隔了高盧人與阿基坦尼人；馬恩河和塞納河則將他們與貝爾格人分開。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v3_1', terminus: 'Gallos', analysis_morphologicus: "Sustantivo, m., pl., acus. Objeto directo.", analysis_morphologicus_en: "Noun, m., pl., acc. Direct object.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。直接賓語。" },
                    { id_verbi: 'v3_2', terminus: 'ab', analysis_morphologicus: "Preposición + Ablativo (separación).", analysis_morphologicus_en: "Preposition + Ablative (separation).", analysis_morphologicus_zh: "介詞 + 離格（分離）。" },
                    { id_verbi: 'v3_3', terminus: 'Aquitanis', analysis_morphologicus: "Sustantivo, m., pl., abl.", analysis_morphologicus_en: "Noun, m., pl., abl.", analysis_morphologicus_zh: "名詞，陽性，複數，離格。" },
                    { id_verbi: 'v3_4', terminus: 'Garumna', analysis_morphologicus: "Sustantivo, f., sg., nom. Sujeto.", analysis_morphologicus_en: "Noun, f., sg., nom. Subject.", analysis_morphologicus_zh: "名詞，陰性，單數，主格。主語。" },
                    { id_verbi: 'v3_5', terminus: 'flumen,', analysis_morphologicus: "Sustantivo, n., sg., nom. Aposición a 'Garumna'.", analysis_morphologicus_en: "Noun, n., sg., nom. In apposition to 'Garumna'.", analysis_morphologicus_zh: "名詞，中性，單數，主格。「Garumna」的同位語。" },
                    { id_verbi: 'v3_6', terminus: 'a', analysis_morphologicus: "Preposición + Ablativo (separación).", analysis_morphologicus_en: "Preposition + Ablative (separation).", analysis_morphologicus_zh: "介詞 + 離格（分離）。" },
                    { id_verbi: 'v3_7', terminus: 'Belgis', analysis_morphologicus: "Sustantivo, m., pl., abl.", analysis_morphologicus_en: "Noun, m., pl., abl.", analysis_morphologicus_zh: "名詞，陽性，複數，離格。" },
                    { id_verbi: 'v3_8', terminus: 'Matrona', analysis_morphologicus: "Sustantivo, f., sg., nom. Sujeto.", analysis_morphologicus_en: "Noun, f., sg., nom. Subject.", analysis_morphologicus_zh: "名詞，陰性，單數，主格。主語。" },
                    { id_verbi: 'v3_9', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v3_10', terminus: 'Sequana', analysis_morphologicus: "Sustantivo, f., sg., nom. Sujeto.", analysis_morphologicus_en: "Noun, f., sg., nom. Subject.", analysis_morphologicus_zh: "名詞，陰性，單數，主格。主語。" },
                    { id_verbi: 'v3_11', terminus: 'diuidit.', analysis_morphologicus: "Verbo ('divido'), 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb ('divido'), 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞（'divido'），第三人稱，單數，現在時，直陳，主動。" }
                ]
            },
            {
                id_orationis: 'o4',
                textus_originalis: "Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate prouinciae longissime absunt, minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos animos pertinent inportant, proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum continenter bellum gerunt.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración compleja. La <b>cláusula principal</b> es "<i>Horum omnium fortissimi sunt Belgae</i>". El resto es una larga <b>cláusula causal</b> introducida por "<i>propterea quod</i>", que presenta tres razones coordinadas para la valentía de los belgas.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A complex sentence. The <b>main clause</b> is "<i>Horum omnium fortissimi sunt Belgae</i>". The rest of the sentence is a long <b>causal clause</b> introduced by "<i>propterea quod</i>", presenting three coordinated reasons for the Belgae's bravery.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>這是一個複雜句。<b>主句</b>是「<i>Horum omnium fortissimi sunt Belgae</i>」。句子的其餘部分是一個由「<i>propterea quod</i>」引導的長<b>原因從句</b>，提出了貝爾格人英勇的三個並列原因。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>De todos ellos, los más valientes son los belgas, porque están muy alejados de la cultura y la civilización de la Provincia [romana], y los mercaderes muy raramente llegan hasta ellos para importarles aquellas cosas que tienden a debilitar el carácter. Además, son los más cercanos a los germanos, que habitan al otro lado del Rin, con quienes están en guerra constantemente.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>Of all these, the bravest are the Belgae, because they are farthest from the culture and civilization of the [Roman] Province, and merchants least frequently resort to them and import those things which tend to effeminate the mind. They are the nearest to the Germans, who dwell beyond the Rhine, with whom they are continually waging war.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>在所有高盧人中，最勇猛的是貝爾格人，因為他們距離羅馬行省的文化與文明最為遙遠，商人極少到他們那裡去，帶去那些足以軟化鬥志的貨物。此外，他們也最鄰近日耳曼人，那些民族居住在萊茵河對岸，貝爾格人與他們常年征戰不休。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v4_1', terminus: 'Horum', analysis_morphologicus: "Pronombre demostrativo ('hic'), m., pl., gen. Genitivo partitivo.", analysis_morphologicus_en: "Demonstrative pronoun ('hic'), m., pl., gen. Partitive genitive.", analysis_morphologicus_zh: "指示代名詞（'hic'），陽性，複數，屬格。部分屬格。" },
                    { id_verbi: 'v4_2', terminus: 'omnium', analysis_morphologicus: "Adjetivo, m., pl., gen. Modifica a 'Horum'.", analysis_morphologicus_en: "Adjective, m., pl., gen. Modifies 'Horum'.", analysis_morphologicus_zh: "形容詞，陽性，複數，屬格。修飾「Horum」。" },
                    { id_verbi: 'v4_3', terminus: 'fortissimi', analysis_morphologicus: "Adjetivo superlativo ('fortis'), m., pl., nom. Predicado nominal.", analysis_morphologicus_en: "Superlative adjective ('fortis'), m., pl., nom. Predicate nominative.", analysis_morphologicus_zh: "最高級形容詞（'fortis'），陽性，複數，主格。表語。" },
                    { id_verbi: 'v4_4', terminus: 'sunt', analysis_morphologicus: "Verbo ('sum'), 3ª p., pl., pres., ind. Verbo copulativo.", analysis_morphologicus_en: "Verb ('sum'), 3rd p., pl., pres., ind. Copulative verb.", analysis_morphologicus_zh: "動詞（'sum'），第三人稱，複數，現在時，直陳。繫動詞。" },
                    { id_verbi: 'v4_5', terminus: 'Belgae,', analysis_morphologicus: "Sustantivo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Noun, m., pl., nom. Subject.", analysis_morphologicus_zh: "名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v4_6', terminus: 'propterea quod', analysis_morphologicus: "Locución conjuntiva causal ('porque').", analysis_morphologicus_en: "Causal conjunction phrase ('because').", analysis_morphologicus_zh: "原因連詞短語（「因為」）。" },
                    { id_verbi: 'v4_7', terminus: 'a', analysis_morphologicus: "Preposición + Ablativo (separación).", analysis_morphologicus_en: "Preposition + Ablative (separation).", analysis_morphologicus_zh: "介詞 + 離格（分離）。" },
                    { id_verbi: 'v4_8', terminus: 'cultu', analysis_morphologicus: "Sustantivo ('cultus'), m., sg., abl.", analysis_morphologicus_en: "Noun ('cultus'), m., sg., abl.", analysis_morphologicus_zh: "名詞（'cultus'），陽性，單數，離格。" },
                    { id_verbi: 'v4_9', terminus: 'atque', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v4_10', terminus: 'humanitate', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v4_11', terminus: 'prouinciae', analysis_morphologicus: "Sustantivo, f., sg., gen. Genitivo posesivo.", analysis_morphologicus_en: "Noun, f., sg., gen. Possessive genitive.", analysis_morphologicus_zh: "名詞，陰性，單數，屬格。所有格。" },
                    { id_verbi: 'v4_12', terminus: 'longissime', analysis_morphologicus: "Adverbio superlativo ('longe').", analysis_morphologicus_en: "Superlative adverb ('longe').", analysis_morphologicus_zh: "最高級副詞（'longe'）。" },
                    { id_verbi: 'v4_13', terminus: 'absunt,', analysis_morphologicus: "Verbo ('absum'), 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb ('absum'), 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞（'absum'），第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v4_14', terminus: 'minimeque', analysis_morphologicus: "Adverbio superlativo ('minime') + '-que'.", analysis_morphologicus_en: "Superlative adverb ('minime') + '-que'.", analysis_morphologicus_zh: "最高級副詞（'minime'）+ 連詞 '-que'。" },
                    { id_verbi: 'v4_15', terminus: 'ad', analysis_morphologicus: "Preposición + Acusativo (dirección).", analysis_morphologicus_en: "Preposition + Accusative (direction).", analysis_morphologicus_zh: "介詞 + 賓格（方向）。" },
                    { id_verbi: 'v4_16', terminus: 'eos', analysis_morphologicus: "Pronombre ('is'), m., pl., acus.", analysis_morphologicus_en: "Pronoun ('is'), m., pl., acc.", analysis_morphologicus_zh: "代名詞（'is'），陽性，複數，賓格。" },
                    { id_verbi: 'v4_17', terminus: 'mercatores', analysis_morphologicus: "Sustantivo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Noun, m., pl., nom. Subject.", analysis_morphologicus_zh: "名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v4_18', terminus: 'saepe', analysis_morphologicus: "Adverbio.", analysis_morphologicus_en: "Adverb.", analysis_morphologicus_zh: "副詞。" },
                    { id_verbi: 'v4_19', terminus: 'commeant', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v4_20', terminus: 'atque', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v4_21', terminus: 'ea', analysis_morphologicus: "Pronombre ('is'), n., pl., acus. Objeto directo.", analysis_morphologicus_en: "Pronoun ('is'), n., pl., acc. Direct object.", analysis_morphologicus_zh: "代名詞（'is'），中性，複數，賓格。直接賓語。" },
                    { id_verbi: 'v4_22', terminus: 'quae', analysis_morphologicus: "Pronombre relativo, n., pl., nom. Sujeto.", analysis_morphologicus_en: "Relative pronoun, n., pl., nom. Subject.", analysis_morphologicus_zh: "關係代名詞，中性，複數，主格。主語。" },
                    { id_verbi: 'v4_23', terminus: 'ad effeminandos animos', analysis_morphologicus: "Construcción final con 'ad' + gerundivo en acusativo.", analysis_morphologicus_en: "Final construction with 'ad' + gerundive in accusative.", analysis_morphologicus_zh: "帶有「ad」+賓格動形詞的目的結構。" },
                    { id_verbi: 'v4_24', terminus: 'pertinent', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v4_25', terminus: 'inportant,', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v4_26', terminus: 'proximique', analysis_morphologicus: "Adjetivo superlativo ('proximi') + '-que'. m., pl., nom. Predicado nominal.", analysis_morphologicus_en: "Superlative adjective ('proximi') + '-que'. m., pl., nom. Predicate nominative.", analysis_morphologicus_zh: "最高級形容詞（'proximi'）+ 連詞 '-que'。陽性，複數，主格。表語。" },
                    { id_verbi: 'v4_27', terminus: 'sunt', analysis_morphologicus: "Verbo ('sum'), 3ª p., pl., pres., ind.", analysis_morphologicus_en: "Verb ('sum'), 3rd p., pl., pres., ind.", analysis_morphologicus_zh: "動詞（'sum'），第三人稱，複數，現在時，直陳。" },
                    { id_verbi: 'v4_28', terminus: 'Germanis,', analysis_morphologicus: "Sustantivo, m., pl., dat. Regido por 'proximi'.", analysis_morphologicus_en: "Noun, m., pl., dat. Governed by 'proximi'.", analysis_morphologicus_zh: "名詞，陽性，複數，與格。受「proximi」支配。" },
                    { id_verbi: 'v4_29', terminus: 'qui', analysis_morphologicus: "Pronombre relativo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Relative pronoun, m., pl., nom. Subject.", analysis_morphologicus_zh: "關係代名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v4_30', terminus: 'trans', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v4_31', terminus: 'Rhenum', analysis_morphologicus: "Sustantivo, m., sg., acus.", analysis_morphologicus_en: "Noun, m., sg., acc.", analysis_morphologicus_zh: "名詞，陽性，單數，賓格。" },
                    { id_verbi: 'v4_32', terminus: 'incolunt,', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v4_33', terminus: 'quibuscum', analysis_morphologicus: "Pronombre relativo ('quibus') + 'cum'. m., pl., abl. Ablativo de compañía.", analysis_morphologicus_en: "Relative pronoun ('quibus') + 'cum'. m., pl., abl. Ablative of accompaniment.", analysis_morphologicus_zh: "關係代名詞（'quibus'）+ 介詞 'cum'。陽性，複數，離格。伴隨離格。" },
                    { id_verbi: 'v4_34', terminus: 'continenter', analysis_morphologicus: "Adverbio.", analysis_morphologicus_en: "Adverb.", analysis_morphologicus_zh: "副詞。" },
                    { id_verbi: 'v4_35', terminus: 'bellum', analysis_morphologicus: "Sustantivo, n., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun, n., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞，中性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v4_36', terminus: 'gerunt.', analysis_morphologicus: "Verbo ('gero'), 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb ('gero'), 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞（'gero'），第三人稱，複數，現在時，直陳，主動。" }
                ]
            },
            {
                id_orationis: 'o5',
                textus_originalis: "Qua de causa Heluetii quoque reliquos Gallos uirtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent, aut ipsi in eorum finibus bellum gerunt.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>La oración principal es "<i>Heluetii... praecedunt</i>". Le sigue una <b>cláusula causal</b> con "<i>quod</i>", y finalmente, una <b>cláusula temporal/circunstancial</b> con "<i>cum</i>" que describe las dos situaciones de su lucha.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>The main sentence is "<i>Heluetii... praecedunt</i>". It's followed by a <b>causal clause</b> with "<i>quod</i>", and finally, a <b>temporal/circumstantial clause</b> with "<i>cum</i>" describing the two scenarios of their fighting.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>主句是「<i>Heluetii... praecedunt</i>」。其後是由「<i>quod</i>」引導的<b>原因從句</b>，最後是一個帶有「<i>cum</i>」的<b>時間/環境從句</b>，描述了他們戰鬥的兩種情況。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Por esta razón, también los helvecios superan en valor a los demás galos, pues luchan con los germanos en combates casi diarios, ya sea cuando los rechazan de su propio territorio, o cuando ellos mismos hacen la guerra en territorio germano.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>For this reason, the Helvetii also surpass the rest of the Gauls in valor, as they contend with the Germans in almost daily battles, when they either repel them from their own territories, or themselves wage war on their frontiers.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>因此，赫爾維蒂人也在勇氣方面超越了其他高盧人，因為他們幾乎每天都與日耳曼人交戰，要麼是將敵人逐出自己的領土，要麼是主動到對方的疆域內開戰。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v5_1', terminus: 'Qua de causa', analysis_morphologicus: "Locución ablativa ('Por esta razón').", analysis_morphologicus_en: "Ablative phrase ('For this reason').", analysis_morphologicus_zh: "離格短語（「因此」）。" },
                    { id_verbi: 'v5_2', terminus: 'Heluetii', analysis_morphologicus: "Sustantivo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Noun, m., pl., nom. Subject.", analysis_morphologicus_zh: "名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v5_3', terminus: 'quoque', analysis_morphologicus: "Adverbio ('también').", analysis_morphologicus_en: "Adverb ('also').", analysis_morphologicus_zh: "副詞（「也」）。" },
                    { id_verbi: 'v5_4', terminus: 'reliquos', analysis_morphologicus: "Adjetivo, m., pl., acus. Modifica a 'Gallos'.", analysis_morphologicus_en: "Adjective, m., pl., acc. Modifies 'Gallos'.", analysis_morphologicus_zh: "形容詞，陽性，複數，賓格。修飾「Gallos」。" },
                    { id_verbi: 'v5_5', terminus: 'Gallos', analysis_morphologicus: "Sustantivo, m., pl., acus. Objeto directo.", analysis_morphologicus_en: "Noun, m., pl., acc. Direct object.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。直接賓語。" },
                    { id_verbi: 'v5_6', terminus: 'uirtute', analysis_morphologicus: "Sustantivo ('virtus'), f., sg., abl. Ablativo de respeto.", analysis_morphologicus_en: "Noun ('virtus'), f., sg., abl. Ablative of respect.", analysis_morphologicus_zh: "名詞（'virtus'），陰性，單數，離格。方面離格。" },
                    { id_verbi: 'v5_7', terminus: 'praecedunt,', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v5_8', terminus: 'quod', analysis_morphologicus: "Conjunción causal ('porque').", analysis_morphologicus_en: "Causal conjunction ('because').", analysis_morphologicus_zh: "原因連詞（「因為」）。" },
                    { id_verbi: 'v5_9', terminus: 'fere', analysis_morphologicus: "Adverbio ('casi').", analysis_morphologicus_en: "Adverb ('almost').", analysis_morphologicus_zh: "副詞（「幾乎」）。" },
                    { id_verbi: 'v5_10', terminus: 'cotidianis', analysis_morphologicus: "Adjetivo, n., pl., abl. Modifica a 'proeliis'.", analysis_morphologicus_en: "Adjective, n., pl., abl. Modifies 'proeliis'.", analysis_morphologicus_zh: "形容詞，中性，複數，離格。修飾「proeliis」。" },
                    { id_verbi: 'v5_11', terminus: 'proeliis', analysis_morphologicus: "Sustantivo, n., pl., abl. Ablativo de medio.", analysis_morphologicus_en: "Noun, n., pl., abl. Ablative of means.", analysis_morphologicus_zh: "名詞，中性，複數，離格。工具離格。" },
                    { id_verbi: 'v5_12', terminus: 'cum', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v5_13', terminus: 'Germanis', analysis_morphologicus: "Sustantivo, m., pl., abl.", analysis_morphologicus_en: "Noun, m., pl., abl.", analysis_morphologicus_zh: "名詞，陽性，複數，離格。" },
                    { id_verbi: 'v5_14', terminus: 'contendunt,', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v5_15', terminus: 'cum', analysis_morphologicus: "Conjunción temporal ('cuando').", analysis_morphologicus_en: "Temporal conjunction ('when').", analysis_morphologicus_zh: "時間連詞（「當」）。" },
                    { id_verbi: 'v5_16', terminus: 'aut', analysis_morphologicus: "Conjunción disyuntiva ('o').", analysis_morphologicus_en: "Disjunctive conjunction ('or').", analysis_morphologicus_zh: "選擇連詞（「或」）。" },
                    { id_verbi: 'v5_17', terminus: 'suis', analysis_morphologicus: "Adj. posesivo, m., pl., abl. Modifica a 'finibus'.", analysis_morphologicus_en: "Possessive adj., m., pl., abl. Modifies 'finibus'.", analysis_morphologicus_zh: "物主形容詞，陽性，複數，離格。修飾「finibus」。" },
                    { id_verbi: 'v5_18', terminus: 'finibus', analysis_morphologicus: "Sustantivo ('finis'), m., pl., abl. Ablativo de separación.", analysis_morphologicus_en: "Noun ('finis'), m., pl., abl. Ablative of separation.", analysis_morphologicus_zh: "名詞（'finis'），陽性，複數，離格。分離離格。" },
                    { id_verbi: 'v5_19', terminus: 'eos', analysis_morphologicus: "Pronombre ('is'), m., pl., acus. Objeto directo.", analysis_morphologicus_en: "Pronoun ('is'), m., pl., acc. Direct object.", analysis_morphologicus_zh: "代名詞（'is'），陽性，複數，賓格。直接賓語。" },
                    { id_verbi: 'v5_20', terminus: 'prohibent,', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v5_21', terminus: 'aut', analysis_morphologicus: "Conjunción disyuntiva ('o').", analysis_morphologicus_en: "Disjunctive conjunction ('or').", analysis_morphologicus_zh: "選擇連詞（「或」）。" },
                    { id_verbi: 'v5_22', terminus: 'ipsi', analysis_morphologicus: "Pronombre intensivo ('ipse'), m., pl., nom. Sujeto enfático.", analysis_morphologicus_en: "Intensive pronoun ('ipse'), m., pl., nom. Emphatic subject.", analysis_morphologicus_zh: "強調代名詞（'ipse'），陽性，複數，主格。強調主語。" },
                    { id_verbi: 'v5_23', terminus: 'in eorum finibus', analysis_morphologicus: "Construcción preposicional. Ablativo locativo.", analysis_morphologicus_en: "Prepositional phrase. Locative ablative.", analysis_morphologicus_zh: "介詞短語。地點離格。" },
                    { id_verbi: 'v5_24', terminus: 'bellum', analysis_morphologicus: "Sustantivo, n., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun, n., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞，中性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v5_25', terminus: 'gerunt.', analysis_morphologicus: "Verbo ('gero'), 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb ('gero'), 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞（'gero'），第三人稱，複數，現在時，直陳，主動。" }
                ]
            },
             {
                id_orationis: 'o6',
                textus_originalis: "Eorum una pars, quam Gallos optinere dictum est, initium capit a flumine Rhodano, continentur Garumna flumine, Oceano, finibus Belgarum, attingit etiam ab Sequanis et Heluetiis flumen Rhenum, uergit ad septentriones.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración compleja con un sujeto principal, "<i>una pars</i>", que rige una serie de verbos principales coordinados sin conjunciones: "<i>capit</i>", "<i>continentur</i>", "<i>attingit</i>" y "<i>uergit</i>". El sujeto está modificado por una cláusula de relativo ("<i>quam... dictum est</i>").</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A complex sentence with a main subject, "<i>una pars</i>", which governs a series of main verbs coordinated without conjunctions: "<i>capit</i>", "<i>continentur</i>", "<i>attingit</i>", and "<i>uergit</i>". The subject is modified by a relative clause ("<i>quam... dictum est</i>").</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>一個非常複雜的句子，主語為「<i>una pars</i>」，它支配著一系列由無連接詞協調的主要動詞：「<i>capit</i>」、「<i>continentur</i>」、「<i>attingit</i>」和「<i>uergit</i>」。主語由一個關係從句（「<i>quam... dictum est</i>」）修飾。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Una parte de este territorio, la que, como se ha dicho, ocupan los galos, comienza en el río Ródano; está delimitada por el río Garona, el Océano y el territorio de los belgas; alcanza también, por el lado de los sécuanos y los helvecios, el río Rin, y se extiende hacia el norte.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>One part of this territory, which as has been said, the Gauls occupy, begins at the river Rhone; it is bounded by the Garonne River, the Ocean, and the territory of the Belgae; it also reaches, on the side of the Sequani and the Helvetii, the river Rhine, and stretches towards the north.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>高盧人所佔據的那一部分領土，始於羅納河，以加龍河、大西洋及貝爾格人的疆域為界；並在塞夸尼人和赫爾維蒂人那邊直抵萊茵河，然後朝北方伸展。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v6_1', terminus: 'Eorum', analysis_morphologicus: "Pronombre ('is'), m./n., pl., gen. Genitivo partitivo.", analysis_morphologicus_en: "Pronoun ('is'), m./n., pl., gen. Partitive genitive.", analysis_morphologicus_zh: "代名詞（'is'），陽性/中性，複數，屬格。部分屬格。" },
                    { id_verbi: 'v6_2', terminus: 'una', analysis_morphologicus: "Adj. numeral, f., sg., nom. Modifica a 'pars'.", analysis_morphologicus_en: "Numeral adj., f., sg., nom. Modifies 'pars'.", analysis_morphologicus_zh: "數詞形容詞，陰性，單數，主格。修飾「pars」。" },
                    { id_verbi: 'v6_3', terminus: 'pars,', analysis_morphologicus: "Sustantivo, f., sg., nom. Sujeto.", analysis_morphologicus_en: "Noun, f., sg., nom. Subject.", analysis_morphologicus_zh: "名詞，陰性，單數，主格。主語。" },
                    { id_verbi: 'v6_4', terminus: 'quam', analysis_morphologicus: "Pronombre relativo, f., sg., acus. Objeto directo de 'optinere'.", analysis_morphologicus_en: "Relative pronoun, f., sg., acc. Direct object of 'optinere'.", analysis_morphologicus_zh: "關係代名詞，陰性，單數，賓格。「optinere」的直接賓語。" },
                    { id_verbi: 'v6_5', terminus: 'Gallos', analysis_morphologicus: "Sustantivo, m., pl., acus. Sujeto del infinitivo 'optinere'.", analysis_morphologicus_en: "Noun, m., pl., acc. Subject of the infinitive 'optinere'.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。不定式「optinere」的主語。" },
                    { id_verbi: 'v6_6', terminus: 'optinere', analysis_morphologicus: "Verbo ('obtineo'), inf. pres., act.", analysis_morphologicus_en: "Verb ('obtineo'), pres. inf., act.", analysis_morphologicus_zh: "動詞（'obtineo'），現在時不定式，主動。" },
                    { id_verbi: 'v6_7', terminus: 'dictum est,', analysis_morphologicus: "Verbo ('dico'), perf. pas., ind., 3ª p., sg. (Impersonal, 'se ha dicho').", analysis_morphologicus_en: "Verb ('dico'), perf. pass., ind., 3rd p., sg. (Impersonal, 'it has been said').", analysis_morphologicus_zh: "動詞（'dico'），完成時被動，直陳，第三人稱單數。（無人稱，「據說」）。" },
                    { id_verbi: 'v6_8', terminus: 'initium', analysis_morphologicus: "Sustantivo, n., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun, n., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞，中性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v6_9', terminus: 'capit', analysis_morphologicus: "Verbo ('capio'), 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb ('capio'), 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞（'capio'），第三人稱，單數，現在時，直陳，主動。" },
                    { id_verbi: 'v6_10', terminus: 'a', analysis_morphologicus: "Preposición + Ablativo (origen).", analysis_morphologicus_en: "Preposition + Ablative (origin).", analysis_morphologicus_zh: "介詞 + 離格（起點）。" },
                    { id_verbi: 'v6_11', terminus: 'flumine', analysis_morphologicus: "Sustantivo, n., sg., abl.", analysis_morphologicus_en: "Noun, n., sg., abl.", analysis_morphologicus_zh: "名詞，中性，單數，離格。" },
                    { id_verbi: 'v6_12', terminus: 'Rhodano,', analysis_morphologicus: "Sustantivo (propio), m., sg., abl. Aposición a 'flumine'.", analysis_morphologicus_en: "Noun (proper), m., sg., abl. In apposition to 'flumine'.", analysis_morphologicus_zh: "名詞（專有），陽性，單數，離格。「flumine」的同位語。" },
                    { id_verbi: 'v6_13', terminus: 'continentur', analysis_morphologicus: "Verbo ('contineo'), 3ª p., pl., pres., pas., ind. ('está delimitada').", analysis_morphologicus_en: "Verb ('contineo'), 3rd p., pl., pres., pass., ind. ('is contained').", analysis_morphologicus_zh: "動詞（'contineo'），第三人稱，複數，現在時，被動，直陳（「被包圍」）。" },
                    { id_verbi: 'v6_14', terminus: 'Garumna', analysis_morphologicus: "Sustantivo (propio), f., sg., abl. Ablativo de medio.", analysis_morphologicus_en: "Noun (proper), f., sg., abl. Ablative of means.", analysis_morphologicus_zh: "名詞（專有），陰性，單數，離格。工具離格。" },
                    { id_verbi: 'v6_15', terminus: 'flumine,', analysis_morphologicus: "Sustantivo, n., sg., abl. Aposición a 'Garumna'.", analysis_morphologicus_en: "Noun, n., sg., abl. In apposition to 'Garumna'.", analysis_morphologicus_zh: "名詞，中性，單數，離格。「Garumna」的同位語。" },
                    { id_verbi: 'v6_16', terminus: 'Oceano,', analysis_morphologicus: "Sustantivo, m., sg., abl. Ablativo de medio.", analysis_morphologicus_en: "Noun, m., sg., abl. Ablative of means.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。工具離格。" },
                    { id_verbi: 'v6_17', terminus: 'finibus', analysis_morphologicus: "Sustantivo, m., pl., abl. Ablativo de medio.", analysis_morphologicus_en: "Noun, m., pl., abl. Ablative of means.", analysis_morphologicus_zh: "名詞，陽性，複數，離格。工具離格。" },
                    { id_verbi: 'v6_18', terminus: 'Belgarum,', analysis_morphologicus: "Sustantivo (propio), m., pl., gen. Genitivo posesivo.", analysis_morphologicus_en: "Noun (proper), m., pl., gen. Possessive genitive.", analysis_morphologicus_zh: "名詞（專有），陽性，複數，屬格。所有格。" },
                    { id_verbi: 'v6_19', terminus: 'attingit', analysis_morphologicus: "Verbo ('attingo'), 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb ('attingo'), 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞（'attingo'），第三人稱，單數，現在時，直陳，主動。" },
                    { id_verbi: 'v6_20', terminus: 'etiam', analysis_morphologicus: "Adverbio ('también').", analysis_morphologicus_en: "Adverb ('also').", analysis_morphologicus_zh: "副詞（「也」）。" },
                    { id_verbi: 'v6_21', terminus: 'ab', analysis_morphologicus: "Preposición + Ablativo ('por el lado de').", analysis_morphologicus_en: "Preposition + Ablative ('on the side of').", analysis_morphologicus_zh: "介詞 + 離格（「在...一側」）。" },
                    { id_verbi: 'v6_22', terminus: 'Sequanis', analysis_morphologicus: "Sustantivo (propio), m., pl., abl.", analysis_morphologicus_en: "Noun (proper), m., pl., abl.", analysis_morphologicus_zh: "名詞（專有），陽性，複數，離格。" },
                    { id_verbi: 'v6_23', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v6_24', terminus: 'Heluetiis', analysis_morphologicus: "Sustantivo (propio), m., pl., abl.", analysis_morphologicus_en: "Noun (proper), m., pl., abl.", analysis_morphologicus_zh: "名詞（專有），陽性，複數，離格。" },
                    { id_verbi: 'v6_25', terminus: 'flumen', analysis_morphologicus: "Sustantivo, n., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun, n., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞，中性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v6_26', terminus: 'Rhenum,', analysis_morphologicus: "Sustantivo (propio), m., sg., acus. Aposición a 'flumen'.", analysis_morphologicus_en: "Noun (proper), m., sg., acc. In apposition to 'flumen'.", analysis_morphologicus_zh: "名詞（專有），陽性，單數，賓格。「flumen」的同位語。" },
                    { id_verbi: 'v6_27', terminus: 'uergit', analysis_morphologicus: "Verbo ('vergo'), 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb ('vergo'), 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞（'vergo'），第三人稱，單數，現在時，直陳，主動。" },
                    { id_verbi: 'v6_28', terminus: 'ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v6_29', terminus: 'septentriones.', analysis_morphologicus: "Sustantivo, m., pl., acus. ('el norte').", analysis_morphologicus_en: "Noun, m., pl., acc. ('the north').", analysis_morphologicus_zh: "名詞，陽性，複數，賓格（「北方」）。" }
                ]
            },
            {
                id_orationis: 'o7',
                textus_originalis: "Belgae ab extremis Galliae finibus oriuntur, pertinent ad inferiorem partem fluminis Rheni, spectant in septentrionem et orientem solem.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración compuesta por coordinación. El sujeto "<i>Belgae</i>" es el mismo para los tres verbos principales: "<i>oriuntur</i>", "<i>pertinent</i>" y "<i>spectant</i>", describiendo el origen, extensión y orientación de su territorio.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A compound sentence formed by coordination. The subject "<i>Belgae</i>" is the same for the three main verbs: "<i>oriuntur</i>", "<i>pertinent</i>", and "<i>spectant</i>", describing the origin, extent, and orientation of their territory.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>由並列構成的複合句。主語「<i>Belgae</i>」對應三個主要動詞：「<i>oriuntur</i>」、「<i>pertinent</i>」和「<i>spectant</i>」，分別描述了貝爾格領土的起源、範圍和朝向。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>El territorio de los belgas comienza desde los confines extremos de la Galia, se extiende hasta la parte inferior del río Rin, y está orientado hacia el norte y el este.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>The territory of the Belgae begins from the extreme confines of Gaul, extends to the lower part of the river Rhine, and faces towards the north and east.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>貝爾格人的領土始於高盧最偏遠的邊界，一直延伸到萊茵河下游，朝向東北方。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v7_1', terminus: 'Belgae', analysis_morphologicus: "Sustantivo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Noun, m., pl., nom. Subject.", analysis_morphologicus_zh: "名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v7_2', terminus: 'ab', analysis_morphologicus: "Preposición + Ablativo (origen).", analysis_morphologicus_en: "Preposition + Ablative (origin).", analysis_morphologicus_zh: "介詞 + 離格（起點）。" },
                    { id_verbi: 'v7_3', terminus: 'extremis', analysis_morphologicus: "Adj. superlativo, m., pl., abl. Modifica a 'finibus'.", analysis_morphologicus_en: "Superlative adj., m., pl., abl. Modifies 'finibus'.", analysis_morphologicus_zh: "最高級形容詞，陽性，複數，離格。修飾「finibus」。" },
                    { id_verbi: 'v7_4', terminus: 'Galliae', analysis_morphologicus: "Sustantivo, f., sg., gen. Genitivo posesivo.", analysis_morphologicus_en: "Noun, f., sg., gen. Possessive genitive.", analysis_morphologicus_zh: "名詞，陰性，單數，屬格。所有格。" },
                    { id_verbi: 'v7_5', terminus: 'finibus', analysis_morphologicus: "Sustantivo, m., pl., abl.", analysis_morphologicus_en: "Noun, m., pl., abl.", analysis_morphologicus_zh: "名詞，陽性，複數，離格。" },
                    { id_verbi: 'v7_6', terminus: 'oriuntur,', analysis_morphologicus: "Verbo deponente ('orior'), 3ª p., pl., pres., ind.", analysis_morphologicus_en: "Deponent verb ('orior'), 3rd p., pl., pres., ind.", analysis_morphologicus_zh: "異態動詞（'orior'），第三人稱，複數，現在時，直陳。" },
                    { id_verbi: 'v7_7', terminus: 'pertinent', analysis_morphologicus: "Verbo ('pertineo'), 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb ('pertineo'), 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞（'pertineo'），第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v7_8', terminus: 'ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v7_9', terminus: 'inferiorem', analysis_morphologicus: "Adj. comparativo, f., sg., acus. Modifica a 'partem'.", analysis_morphologicus_en: "Comparative adj., f., sg., acc. Modifies 'partem'.", analysis_morphologicus_zh: "比較級形容詞，陰性，單數，賓格。修飾「partem」。" },
                    { id_verbi: 'v7_10', terminus: 'partem', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v7_11', terminus: 'fluminis', analysis_morphologicus: "Sustantivo, n., sg., gen. Genitivo posesivo.", analysis_morphologicus_en: "Noun, n., sg., gen. Possessive genitive.", analysis_morphologicus_zh: "名詞，中性，單數，屬格。所有格。" },
                    { id_verbi: 'v7_12', terminus: 'Rheni,', analysis_morphologicus: "Sustantivo (propio), m., sg., gen.", analysis_morphologicus_en: "Noun (proper), m., sg., gen.", analysis_morphologicus_zh: "名詞（專有），陽性，單數，屬格。" },
                    { id_verbi: 'v7_13', terminus: 'spectant', analysis_morphologicus: "Verbo ('specto'), 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb ('specto'), 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞（'specto'），第三人稱，複數，現在時，直陳，主動。" },
                    { id_verbi: 'v7_14', terminus: 'in', analysis_morphologicus: "Preposición + Acusativo (dirección).", analysis_morphologicus_en: "Preposition + Accusative (direction).", analysis_morphologicus_zh: "介詞 + 賓格（方向）。" },
                    { id_verbi: 'v7_15', terminus: 'septentrionem', analysis_morphologicus: "Sustantivo, m., sg., acus. ('el norte').", analysis_morphologicus_en: "Noun, m., sg., acc. ('the north').", analysis_morphologicus_zh: "名詞，陽性，單數，賓格（「北方」）。" },
                    { id_verbi: 'v7_16', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v7_17', terminus: 'orientem solem.', analysis_morphologicus: "Construcción acusativa ('hacia el sol naciente', el este).", analysis_morphologicus_en: "Accusative phrase ('toward the rising sun', the east).", analysis_morphologicus_zh: "賓格短語（「向著升起的太陽」，即東方）。" }
                ]
            },
            {
                id_orationis: 'o8',
                textus_originalis: "Aquitania Garumna flumen ad Pyrenaeos montes et eam partem Oceani quae est ad Hispaniam pertinet; spectat inter occasum solis et septentriones.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración con un único sujeto, "<i>Aquitania</i>", que rige dos verbos: "<i>pertinet</i>" y "<i>spectat</i>". El primero describe la extensión geográfica y el segundo su orientación.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A sentence with a single subject, "<i>Aquitania</i>", which governs two verbs: "<i>pertinet</i>" and "<i>spectat</i>". The first describes the geographical extent and the second its orientation.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>一個單主語句子，主語為「<i>Aquitania</i>」，支配著兩個動詞：「<i>pertinet</i>」和「<i>spectat</i>」。第一個動詞描述了該領土的地理範圍，第二個動詞描述了其朝向。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Aquitania se extiende desde el río Garona hasta los montes Pirineos y la parte del Océano que baña Hispania; está orientada hacia el noroeste.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>Aquitania extends from the Garonne River to the Pyrenees mountains and to that part of the Ocean which is near Hispania; it faces northwest.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>阿基坦尼亞的疆域從加龍河起，直達庇里牛斯山脈與臨近西班牙那一部分的大西洋；它的朝向在西北之間。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v8_1', terminus: 'Aquitania', analysis_morphologicus: "Sustantivo, f., sg., nom. Sujeto.", analysis_morphologicus_en: "Noun, f., sg., nom. Subject.", analysis_morphologicus_zh: "名詞，陰性，單數，主格。主語。" },
                    { id_verbi: 'v8_2', terminus: 'Garumna', analysis_morphologicus: "Sustantivo, f., sg., abl. Ablativo de origen.", analysis_morphologicus_en: "Noun, f., sg., abl. Ablative of origin.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。起源離格。" },
                    { id_verbi: 'v8_3', terminus: 'flumen', analysis_morphologicus: "Sustantivo, n., sg., abl. Aposición a 'Garumna'.", analysis_morphologicus_en: "Noun, n., sg., abl. In apposition to 'Garumna'.", analysis_morphologicus_zh: "名詞，中性，單數，離格。「Garumna」的同位語。" },
                    { id_verbi: 'v8_4', terminus: 'ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v8_5', terminus: 'Pyrenaeos', analysis_morphologicus: "Adjetivo, m., pl., acus. Modifica a 'montes'.", analysis_morphologicus_en: "Adjective, m., pl., acc. Modifies 'montes'.", analysis_morphologicus_zh: "形容詞，陽性，複數，賓格。修飾「montes」。" },
                    { id_verbi: 'v8_6', terminus: 'montes', analysis_morphologicus: "Sustantivo, m., pl., acus.", analysis_morphologicus_en: "Noun, m., pl., acc.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。" },
                    { id_verbi: 'v8_7', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v8_8', terminus: 'eam', analysis_morphologicus: "Pronombre demostrativo ('is'), f., sg., acus. Modifica a 'partem'.", analysis_morphologicus_en: "Demonstrative pronoun ('is'), f., sg., acc. Modifies 'partem'.", analysis_morphologicus_zh: "指示代名詞（'is'），陰性，單數，賓格。修飾「partem」。" },
                    { id_verbi: 'v8_9', terminus: 'partem', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v8_10', terminus: 'Oceani', analysis_morphologicus: "Sustantivo, m., sg., gen. Genitivo posesivo.", analysis_morphologicus_en: "Noun, m., sg., gen. Possessive genitive.", analysis_morphologicus_zh: "名詞，陽性，單數，屬格。所有格。" },
                    { id_verbi: 'v8_11', terminus: 'quae', analysis_morphologicus: "Pronombre relativo, f., sg., nom. Sujeto.", analysis_morphologicus_en: "Relative pronoun, f., sg., nom. Subject.", analysis_morphologicus_zh: "關係代名詞，陰性，單數，主格。主語。" },
                    { id_verbi: 'v8_12', terminus: 'est', analysis_morphologicus: "Verbo ('sum'), 3ª p., sg., pres., ind.", analysis_morphologicus_en: "Verb ('sum'), 3rd p., sg., pres., ind.", analysis_morphologicus_zh: "動詞（'sum'），第三人稱，單數，現在時，直陳。" },
                    { id_verbi: 'v8_13', terminus: 'ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v8_14', terminus: 'Hispaniam', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v8_15', terminus: 'pertinet;', analysis_morphologicus: "Verbo ('pertineo'), 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb ('pertineo'), 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞（'pertineo'），第三人稱，單數，現在時，直陳，主動。" },
                    { id_verbi: 'v8_16', terminus: 'spectat', analysis_morphologicus: "Verbo ('specto'), 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb ('specto'), 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞（'specto'），第三人稱，單數，現在時，直陳，主動。" },
                    { id_verbi: 'v8_17', terminus: 'inter', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v8_18', terminus: 'occasum solis', analysis_morphologicus: "Construcción ('la caída del sol', el oeste).", analysis_morphologicus_en: "Phrase ('the setting of the sun', the west).", analysis_morphologicus_zh: "短語（「日落」，即西方）。" },
                    { id_verbi: 'v8_19', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v8_20', terminus: 'septentriones.', analysis_morphologicus: "Sustantivo, m., pl., acus. ('el norte').", analysis_morphologicus_en: "Noun, m., pl., acc. ('the north').", analysis_morphologicus_zh: "名詞，陽性，複數，賓格（「北方」）。" }
                ]
            },
            {
                id_capituli: 2,
                orationes: [
                id_orationis: 'o9',
                textus_originalis: "Apud Heluetios longe nobilissimus fuit et ditissimus Orgetorix.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración con hipérbaton para dar énfasis. <b>Verbo</b>: "<i>fuit</i>". <b>Sujeto</b>: "<i>Orgetorix</i>". "<i>Nobilissimus</i>" y "<i>ditissimus</i>" son el <b>predicado nominal</b>.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A sentence with hyperbaton for emphasis. <b>Verb</b>: "<i>fuit</i>". <b>Subject</b>: "<i>Orgetorix</i>". "<i>Nobilissimus</i>" and "<i>ditissimus</i>" are the <b>predicate nominative</b>.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>此句採用倒裝法以示強調。<b>主要動詞</b>是「<i>fuit</i>」。<b>主語</b>是「<i>Orgetorix</i>」。「<i>Nobilissimus</i>」和「<i>ditissimus</i>」是主語的<b>主格表語</b>。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Orgetorix era, con diferencia, el más noble y rico de los helvecios.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>By far the most noble and wealthy among the Helvetii was Orgetorix.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>在赫爾維蒂人當中，奧格托里克斯無疑是最高貴、最富有的人。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v9_1', terminus: 'Apud', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v9_2', terminus: 'Heluetios', analysis_morphologicus: "Sustantivo, m., pl., acus.", analysis_morphologicus_en: "Noun, m., pl., acc.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。" },
                    { id_verbi: 'v9_3', terminus: 'longe', analysis_morphologicus: "Adverbio.", analysis_morphologicus_en: "Adverb.", analysis_morphologicus_zh: "副詞。" },
                    { id_verbi: 'v9_4', terminus: 'nobilissimus', analysis_morphologicus: "Adj., m., sg., nom. (superlativo).", analysis_morphologicus_en: "Adj., m., sg., nom. (superlative).", analysis_morphologicus_zh: "形容詞，陽性，單數，主格（最高級）。" },
                    { id_verbi: 'v9_5', terminus: 'fuit', analysis_morphologicus: "Verbo (sum), 3ª p., sg., perf., ind., act.", analysis_morphologicus_en: "Verb (sum), 3rd p., sg., perf., ind., act.", analysis_morphologicus_zh: "動詞（sum），第三人稱單數，完成時，直陳，主動。" },
                    { id_verbi: 'v9_6', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v9_7', terminus: 'ditissimus', analysis_morphologicus: "Adj., m., sg., nom. (superlativo de 'dis').", analysis_morphologicus_en: "Adj., m., sg., nom. (superlative of 'dis').", analysis_morphologicus_zh: "形容詞，陽性，單數，主格（'dis'的最高級）。" },
                    { id_verbi: 'v9_8', terminus: 'Orgetorix.', analysis_morphologicus: "Sustantivo propio, m., sg., nom. Sujeto.", analysis_morphologicus_en: "Proper noun, m., sg., nom. Subject.", analysis_morphologicus_zh: "專有名詞，陽性，單數，主格。主語。" }
                ]
            },
            {
                id_orationis: 'o10',
                textus_originalis: "Is M. Messala et M. Pisone consulibus regni cupiditate inductus coniurationem nobilitatis fecit et ciuitati persuasit ut de finibus suis cum omnibus copiis exirent: perfacile esse, cum uirtute omnibus praestarent, totius Galliae imperio potiri.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración compleja. <b>M. Messala... consulibus</b> es un <b>ablativo absoluto</b> temporal. Los verbos principales son <b>fecit</b> y <b>persuasit</b>. Este último introduce una <b>cláusula subordinada</b> con 'ut'. Los dos puntos introducen una <b>oración de infinitivo (AcI)</b>.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>Complex sentence. <b>M. Messala... consulibus</b> is a temporal <b>ablative absolute</b>. The main verbs are <b>fecit</b> and <b>persuasit</b>. The latter introduces a <b>subordinate clause</b> with 'ut'. The colon introduces an <b>infinitive clause (AcI)</b>.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>這是一個複合句。<b>M. Messala... consulibus</b>是一個表示時間的<b>獨立離格結構</b>。主要動詞是<b>fecit</b>和<b>persuasit</b>。後者引導一個帶有'ut'的<b>從句</b>。冒號引導一個<b>不定式子句（AcI）</b>。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>En el consulado de M. Messala y M. Pisón, Orgetorix, movido por su ambición de reinar, organizó una conspiración entre la nobleza y convenció a su pueblo para que abandonaran su territorio con todas sus fuerzas, argumentando que, al superar a todos en valor, les sería muy fácil hacerse con el poder de toda la Galia.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>During the consulship of M. Messala and M. Piso, Orgetorix, incited by the desire for royal power, formed a conspiracy among the nobility and persuaded his people to leave their territory with all their forces, arguing that it would be very easy, since they excelled all others in valor, to gain control over all of Gaul.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>在馬爾庫斯·梅薩拉和馬爾庫斯·皮索擔任執政官那年，奧格托里克斯出於對王權的野心，策動了一場貴族陰謀，並說服族人傾其全部軍力，離開自己的國境。他聲稱，既然赫爾維蒂人英勇蓋世，要稱霸整個高盧實非難事。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v10_1', terminus: 'Is', analysis_morphologicus: "Pronombre, m., sg., nom. Sujeto.", analysis_morphologicus_en: "Pronoun, m., sg., nom. Subject.", analysis_morphologicus_zh: "代名詞，陽性，單數，主格。主語。" },
                    { id_verbi: 'v10_2', terminus: 'M. Messala et M. Pisone consulibus', analysis_morphologicus: "Ablativo Absoluto (temporal).", analysis_morphologicus_en: "Ablative Absolute (temporal).", analysis_morphologicus_zh: "獨立離格結構（時間）。" },
                    { id_verbi: 'v10_8', terminus: 'regni', analysis_morphologicus: "Sustantivo ('regnum'), n., sg., gen. Genitivo objetivo.", analysis_morphologicus_en: "Noun ('regnum'), n., sg., gen. Objective genitive.", analysis_morphologicus_zh: "名詞（'regnum'），中性，單數，屬格。賓語屬格。" },
                    { id_verbi: 'v10_9', terminus: 'cupiditate', analysis_morphologicus: "Sustantivo ('cupiditas'), f., sg., abl. Ablativo de causa.", analysis_morphologicus_en: "Noun ('cupiditas'), f., sg., abl. Ablative of cause.", analysis_morphologicus_zh: "名詞（'cupiditas'），陰性，單數，離格。原因離格。" },
                    { id_verbi: 'v10_10', terminus: 'inductus', analysis_morphologicus: "Participio perfecto pasivo ('induco'), m., sg., nom. Modifica a 'Is'.", analysis_morphologicus_en: "Perfect passive participle ('induco'), m., sg., nom. Modifies 'Is'.", analysis_morphologicus_zh: "完成時被動分詞（'induco'），陽性，單數，主格。修飾「Is」。" },
                    { id_verbi: 'v10_11', terminus: 'coniurationem', analysis_morphologicus: "Sustantivo ('coniuratio'), f., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun ('coniuratio'), f., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞（'coniuratio'），陰性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v10_12', terminus: 'nobilitatis', analysis_morphologicus: "Sustantivo ('nobilitas'), f., sg., gen.", analysis_morphologicus_en: "Noun ('nobilitas'), f., sg., gen.", analysis_morphologicus_zh: "名詞（'nobilitas'），陰性，單數，屬格。" },
                    { id_verbi: 'v10_13', terminus: 'fecit', analysis_morphologicus: "Verbo ('facio'), 3ª p., sg., perf., ind., act.", analysis_morphologicus_en: "Verb ('facio'), 3rd p., sg., perf., ind., act.", analysis_morphologicus_zh: "動詞（'facio'），第三人稱單數，完成時，直陳，主動。" },
                    { id_verbi: 'v10_14', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v10_15', terminus: 'ciuitati', analysis_morphologicus: "Sustantivo ('ciuitas'), f., sg., dat. Objeto indirecto.", analysis_morphologicus_en: "Noun ('ciuitas'), f., sg., dat. Indirect object.", analysis_morphologicus_zh: "名詞（'ciuitas'），陰性，單數，與格。間接賓語。" },
                    { id_verbi: 'v10_16', terminus: 'persuasit', analysis_morphologicus: "Verbo ('persuadeo'), 3ª p., sg., perf., ind., act.", analysis_morphologicus_en: "Verb ('persuadeo'), 3rd p., sg., perf., ind., act.", analysis_morphologicus_zh: "動詞（'persuadeo'），第三人稱單數，完成時，直陳，主動。" },
                    { id_verbi: 'v10_17', terminus: 'ut', analysis_morphologicus: "Conjunción. Introduce cláusula completiva de mandato.", analysis_morphologicus_en: "Conjunction. Introduces an indirect command clause.", analysis_morphologicus_zh: "連詞。引導間接命令從句。" },
                    { id_verbi: 'v10_18', terminus: 'de', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v10_19', terminus: 'finibus', analysis_morphologicus: "Sustantivo ('finis'), m., pl., abl.", analysis_morphologicus_en: "Noun ('finis'), m., pl., abl.", analysis_morphologicus_zh: "名詞（'finis'），陽性，複數，離格。" },
                    { id_verbi: 'v10_20', terminus: 'suis', analysis_morphologicus: "Adj. posesivo, m., pl., abl.", analysis_morphologicus_en: "Possessive adj., m., pl., abl.", analysis_morphologicus_zh: "物主形容詞，陽性，複數，離格。" },
                    { id_verbi: 'v10_21', terminus: 'cum', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v10_22', terminus: 'omnibus', analysis_morphologicus: "Adjetivo, f., pl., abl.", analysis_morphologicus_en: "Adjective, f., pl., abl.", analysis_morphologicus_zh: "形容詞，陰性，複數，離格。" },
                    { id_verbi: 'v10_23', terminus: 'copiis', analysis_morphologicus: "Sustantivo ('copia'), f., pl., abl.", analysis_morphologicus_en: "Noun ('copia'), f., pl., abl.", analysis_morphologicus_zh: "名詞（'copia'），陰性，複數，離格。" },
                    { id_verbi: 'v10_24', terminus: 'exirent:', analysis_morphologicus: "Verbo ('exeo'), 3ª p., pl., imp., subj., act.", analysis_morphologicus_en: "Verb ('exeo'), 3rd p., pl., imp., subj., act.", analysis_morphologicus_zh: "動詞（'exeo'），第三人稱複數，未完成時，虛擬，主動。" },
                    { id_verbi: 'v10_25', terminus: 'perfacile', analysis_morphologicus: "Adjetivo, n., sg., nom./acus. Atributo en AcI.", analysis_morphologicus_en: "Adjective, n., sg., nom./acc. Predicate in AcI.", analysis_morphologicus_zh: "形容詞，中性，單數，主格/賓格。在不定式子句中作表語。" },
                    { id_verbi: 'v10_26', terminus: 'esse,', analysis_morphologicus: "Verbo ('sum'), inf. pres. Verbo de la AcI.", analysis_morphologicus_en: "Verb ('sum'), pres. inf. Verb of the AcI.", analysis_morphologicus_zh: "動詞（'sum'），現在時不定式。不定式子句的動詞。" },
                    { id_verbi: 'v10_27', terminus: 'cum', analysis_morphologicus: "Conjunción causal + subjuntivo.", analysis_morphologicus_en: "Causal conjunction + subjunctive.", analysis_morphologicus_zh: "原因連詞 + 虛擬式。" },
                    { id_verbi: 'v10_28', terminus: 'uirtute', analysis_morphologicus: "Sustantivo ('virtus'), f., sg., abl. Ablativo de respecto.", analysis_morphologicus_en: "Noun ('virtus'), f., sg., abl. Ablative of respect.", analysis_morphologicus_zh: "名詞（'virtus'），陰性，單數，離格。方面離格。" },
                    { id_verbi: 'v10_29', terminus: 'omnibus', analysis_morphologicus: "Pronombre ('omnis'), m., pl., dat. Objeto indirecto.", analysis_morphologicus_en: "Pronoun ('omnis'), m., pl., dat. Indirect object.", analysis_morphologicus_zh: "代名詞（'omnis'），陽性，複數，與格。間接賓語。" },
                    { id_verbi: 'v10_30', terminus: 'praestarent,', analysis_morphologicus: "Verbo ('praesto'), 3ª p., pl., imp., subj., act.", analysis_morphologicus_en: "Verb ('praesto'), 3rd p., pl., imp., subj., act.", analysis_morphologicus_zh: "動詞（'praesto'），第三人稱複數，未完成時，虛擬，主動。" },
                    { id_verbi: 'v10_31', terminus: 'totius', analysis_morphologicus: "Adjetivo ('totus'), f., sg., gen. Modifica a 'Galliae'.", analysis_morphologicus_en: "Adjective ('totus'), f., sg., gen. Modifies 'Galliae'.", analysis_morphologicus_zh: "形容詞（'totus'），陰性，單數，屬格。修飾「Galliae」。" },
                    { id_verbi: 'v10_32', terminus: 'Galliae', analysis_morphologicus: "Sustantivo, f., sg., gen.", analysis_morphologicus_en: "Noun, f., sg., gen.", analysis_morphologicus_zh: "名詞，陰性，單數，屬格。" },
                    { id_verbi: 'v10_33', terminus: 'imperio', analysis_morphologicus: "Sustantivo ('imperium'), n., sg., abl. Complemento de 'potiri'.", analysis_morphologicus_en: "Noun ('imperium'), n., sg., abl. Complement of 'potiri'.", analysis_morphologicus_zh: "名詞（'imperium'），中性，單數，離格。動詞'potiri'的補語。" },
                    { id_verbi: 'v10_34', terminus: 'potiri.', analysis_morphologicus: "Verbo deponente ('potior'), inf. pres. Sujeto de 'esse'.", analysis_morphologicus_en: "Deponent verb ('potior'), pres. inf. Subject of 'esse'.", analysis_morphologicus_zh: "異態動詞（'potior'），現在時不定式。「esse」的主語。" }
                ]
            },
            {
                id_orationis: 'o11',
                textus_originalis: "Id hoc facilius eis persuasit quod undique loci natura Heluetii continentur: una ex parte flumine Rheno latissimo atque altissimo, qui agrum Heluetium a Germanis diuidit; altera ex parte monte Iura altissimo, qui est inter Sequanos et Heluetios; tertia lacu Lemanno et flumine Rhodano, qui prouinciam nostram ab Heluetiis diuidit.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>La oración principal es <b>Id hoc facilius eis persuasit</b>. Le sigue una <b>cláusula causal</b> con 'quod'. Los dos puntos introducen una explicación detallada estructurada en tres partes paralelas (<i>una ex parte...</i>).</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>The main clause is <b>Id hoc facilius eis persuasit</b>. It is followed by a <b>causal clause</b> with 'quod'. The colon introduces a detailed explanation structured in three parallel parts (<i>una ex parte...</i>).</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>主句是 <b>Id hoc facilius eis persuasit</b>。其後是由 'quod' 引導的<b>原因從句</b>。冒號後是對分為三個平行部分（<i>una ex parte...</i>）的詳細解釋。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Les convenció de esto con mayor facilidad porque los helvecios están confinados por todas partes por la naturaleza del terreno: por un lado, por el río Rin, muy ancho y profundo, que separa el territorio helvecio de los germanos; por otro, por la altísima cordillera del Jura, que se encuentra entre los sécuanos y los helvecios; y en tercer lugar, por el lago Lemán y el río Ródano, que separa nuestra provincia de los helvecios.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>He persuaded them to this course more easily for this reason: the Helvetii are confined on all sides by the nature of their land. On one side by the Rhine, a very broad and deep river, which separates the Helvetian territory from the Germans; on a second side by the lofty Jura mountain range, which lies between the Sequani and the Helvetii; and on the third by Lake Geneva and the Rhone river, which separates our Province from the Helvetii.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>他之所以能輕易地說服他們，是因為赫爾維蒂人的疆域四面受地形所限：一邊是寬闊湍急的萊茵河，將他們與日耳曼人隔開；另一邊是高聳的侏羅山脈，橫亙在他們與塞夸尼人之間；第三邊則是雷曼湖與羅納河，成為他們與我方行省的分界。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v11_1', terminus: 'Id', analysis_morphologicus: "Pronombre, n., sg., acus. Objeto directo.", analysis_morphologicus_en: "Pronoun, n., sg., acc. Direct object.", analysis_morphologicus_zh: "代名詞，中性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v11_2', terminus: 'hoc', analysis_morphologicus: "Pronombre, n., sg., abl. Ablativo de causa/grado.", analysis_morphologicus_en: "Pronoun, n., sg., abl. Ablative of cause/degree.", analysis_morphologicus_zh: "代名詞，中性，單數，離格。原因/程度離格。" },
                    { id_verbi: 'v11_3', terminus: 'facilius', analysis_morphologicus: "Adverbio comparativo.", analysis_morphologicus_en: "Comparative adverb.", analysis_morphologicus_zh: "比較副詞。" },
                    { id_verbi: 'v11_4', terminus: 'eis', analysis_morphologicus: "Pronombre, m., pl., dat. Objeto indirecto.", analysis_morphologicus_en: "Pronoun, m., pl., dat. Indirect object.", analysis_morphologicus_zh: "代名詞，陽性，複數，與格。間接賓語。" },
                    { id_verbi: 'v11_5', terminus: 'persuasit', analysis_morphologicus: "Verbo, 3ª p., sg., perf., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., sg., perf., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱單數，完成時，直陳，主動。" },
                    { id_verbi: 'v11_6', terminus: 'quod', analysis_morphologicus: "Conjunción causal.", analysis_morphologicus_en: "Causal conjunction.", analysis_morphologicus_zh: "原因連詞。" },
                    { id_verbi: 'v11_7', terminus: 'undique', analysis_morphologicus: "Adverbio de lugar.", analysis_morphologicus_en: "Adverb of place.", analysis_morphologicus_zh: "地點副詞。" },
                    { id_verbi: 'v11_8', terminus: 'loci', analysis_morphologicus: "Sustantivo, m., sg., gen.", analysis_morphologicus_en: "Noun, m., sg., gen.", analysis_morphologicus_zh: "名詞，陽性，單數，屬格。" },
                    { id_verbi: 'v11_9', terminus: 'natura', analysis_morphologicus: "Sustantivo, f., sg., abl. Ablativo de causa.", analysis_morphologicus_en: "Noun, f., sg., abl. Ablative of cause.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。原因離格。" },
                    { id_verbi: 'v11_10', terminus: 'Heluetii', analysis_morphologicus: "Sustantivo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Noun, m., pl., nom. Subject.", analysis_morphologicus_zh: "名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v11_11', terminus: 'continentur:', analysis_morphologicus: "Verbo, 3ª p., pl., pres., pas., ind.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., pass., ind.", analysis_morphologicus_zh: "動詞，第三人稱複數，現在時，被動，直陳。" },
                    { id_verbi: 'v11_12', terminus: 'una', analysis_morphologicus: "Adj., f., sg., abl.", analysis_morphologicus_en: "Adj., f., sg., abl.", analysis_morphologicus_zh: "形容詞，陰性，單數，離格。" },
                    { id_verbi: 'v11_13', terminus: 'ex', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v11_14', terminus: 'parte', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v11_15', terminus: 'flumine', analysis_morphologicus: "Sustantivo, n., sg., abl.", analysis_morphologicus_en: "Noun, n., sg., abl.", analysis_morphologicus_zh: "名詞，中性，單數，離格。" },
                    { id_verbi: 'v11_16', terminus: 'Rheno', analysis_morphologicus: "Sustantivo, m., sg., abl.", analysis_morphologicus_en: "Noun, m., sg., abl.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。" },
                    { id_verbi: 'v11_17', terminus: 'latissimo', analysis_morphologicus: "Adj., m., sg., abl. Superlativo.", analysis_morphologicus_en: "Adj., m., sg., abl. Superlative.", analysis_morphologicus_zh: "形容詞，陽性，單數，離格。最高級。" },
                    { id_verbi: 'v11_18', terminus: 'atque', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v11_19', terminus: 'altissimo,', analysis_morphologicus: "Adj., m., sg., abl. Superlativo.", analysis_morphologicus_en: "Adj., m., sg., abl. Superlative.", analysis_morphologicus_zh: "形容詞，陽性，單數，離格。最高級。" },
                    { id_verbi: 'v11_20', terminus: 'qui', analysis_morphologicus: "Pronombre relativo, m., sg., nom. Sujeto.", analysis_morphologicus_en: "Relative pronoun, m., sg., nom. Subject.", analysis_morphologicus_zh: "關係代名詞，陽性，單數，主格。主語。" },
                    { id_verbi: 'v11_21', terminus: 'agrum', analysis_morphologicus: "Sustantivo, m., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun, m., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞，陽性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v11_22', terminus: 'Heluetium', analysis_morphologicus: "Adjetivo, m., sg., acus.", analysis_morphologicus_en: "Adjective, m., sg., acc.", analysis_morphologicus_zh: "形容詞，陽性，單數，賓格。" },
                    { id_verbi: 'v11_23', terminus: 'a', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v11_24', terminus: 'Germanis', analysis_morphologicus: "Sustantivo, m., pl., abl.", analysis_morphologicus_en: "Noun, m., pl., abl.", analysis_morphologicus_zh: "名詞，陽性，複數，離格。" },
                    { id_verbi: 'v11_25', terminus: 'diuidit;', analysis_morphologicus: "Verbo, 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱單數，現在時，直陳，主動。" },
                    { id_verbi: 'v11_26', terminus: 'altera', analysis_morphologicus: "Adj., f., sg., abl.", analysis_morphologicus_en: "Adj., f., sg., abl.", analysis_morphologicus_zh: "形容詞，陰性，單數，離格。" },
                    { id_verbi: 'v11_27', terminus: 'ex', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v11_28', terminus: 'parte', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v11_29', terminus: 'monte', analysis_morphologicus: "Sustantivo, m., sg., abl.", analysis_morphologicus_en: "Noun, m., sg., abl.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。" },
                    { id_verbi: 'v11_30', terminus: 'Iura', analysis_morphologicus: "Sustantivo, m., sg., abl.", analysis_morphologicus_en: "Noun, m., sg., abl.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。" },
                    { id_verbi: 'v11_31', terminus: 'altissimo,', analysis_morphologicus: "Adj., m., sg., abl. Superlativo.", analysis_morphologicus_en: "Adj., m., sg., abl. Superlative.", analysis_morphologicus_zh: "形容詞，陽性，單數，離格。最高級。" },
                    { id_verbi: 'v11_32', terminus: 'qui', analysis_morphologicus: "Pronombre relativo, m., sg., nom. Sujeto.", analysis_morphologicus_en: "Relative pronoun, m., sg., nom. Subject.", analysis_morphologicus_zh: "關係代名詞，陽性，單數，主格。主語。" },
                    { id_verbi: 'v11_33', terminus: 'est', analysis_morphologicus: "Verbo, 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱單數，現在時，直陳，主動。" },
                    { id_verbi: 'v11_34', terminus: 'inter', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v11_35', terminus: 'Sequanos', analysis_morphologicus: "Sustantivo, m., pl., acus.", analysis_morphologicus_en: "Noun, m., pl., acc.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。" },
                    { id_verbi: 'v11_36', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v11_37', terminus: 'Heluetios;', analysis_morphologicus: "Sustantivo, m., pl., acus.", analysis_morphologicus_en: "Noun, m., pl., acc.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。" },
                    { id_verbi: 'v11_38', terminus: 'tertia', analysis_morphologicus: "Adj., f., sg., abl.", analysis_morphologicus_en: "Adj., f., sg., abl.", analysis_morphologicus_zh: "形容詞，陰性，單數，離格。" },
                    { id_verbi: 'v11_39', terminus: 'lacu', analysis_morphologicus: "Sustantivo, m., sg., abl.", analysis_morphologicus_en: "Noun, m., sg., abl.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。" },
                    { id_verbi: 'v11_40', terminus: 'Lemanno', analysis_morphologicus: "Sustantivo, m., sg., abl.", analysis_morphologicus_en: "Noun, m., sg., abl.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。" },
                    { id_verbi: 'v11_41', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v11_42', terminus: 'flumine', analysis_morphologicus: "Sustantivo, n., sg., abl.", analysis_morphologicus_en: "Noun, n., sg., abl.", analysis_morphologicus_zh: "名詞，中性，單數，離格。" },
                    { id_verbi: 'v11_43', terminus: 'Rhodano,', analysis_morphologicus: "Sustantivo, m., sg., abl.", analysis_morphologicus_en: "Noun, m., sg., abl.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。" },
                    { id_verbi: 'v11_44', terminus: 'qui', analysis_morphologicus: "Pronombre relativo, m., sg., nom. Sujeto.", analysis_morphologicus_en: "Relative pronoun, m., sg., nom. Subject.", analysis_morphologicus_zh: "關係代名詞，陽性，單數，主格。主語。" },
                    { id_verbi: 'v11_45', terminus: 'prouinciam', analysis_morphologicus: "Sustantivo, f., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun, f., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v11_46', terminus: 'nostram', analysis_morphologicus: "Adj. posesivo, f., sg., acus.", analysis_morphologicus_en: "Possessive adj., f., sg., acc.", analysis_morphologicus_zh: "物主形容詞，陰性，單數，賓格。" },
                    { id_verbi: 'v11_47', terminus: 'ab', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v11_48', terminus: 'Heluetiis', analysis_morphologicus: "Sustantivo, m., pl., abl.", analysis_morphologicus_en: "Noun, m., pl., abl.", analysis_morphologicus_zh: "名詞，陽性，複數，離格。" },
                    { id_verbi: 'v11_49', terminus: 'diuidit.', analysis_morphologicus: "Verbo, 3ª p., sg., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., sg., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱單數，現在時，直陳，主動。" }
                ]
            },
            {
                id_capituli: 3,
                orationes: [
                id_orationis: 'o12',
                textus_originalis: "His rebus fiebat ut et minus late uagarentur et minus facile finitimis bellum inferre possent; qua ex parte homines bellandi cupidi magno dolore adficiebantur.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>La oración principal es <b>His rebus fiebat</b>. Introduce una <b>cláusula de resultado</b> con 'ut'. La segunda parte, después del punto y coma, es una oración principal cuyo sujeto es 'homines'.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>The main clause is <b>His rebus fiebat</b>. It introduces a <b>result clause</b> with 'ut'. The second part, after the semicolon, is a main clause whose subject is 'homines'.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>主句是 <b>His rebus fiebat</b>，其中 'fiebat' 作為無人稱動詞。它引導一個帶有 'ut' + 虛擬式的<b>結果從句</b>。在此從句中，有兩個由 'et...et' 連接的動詞。分號後的句子第二部分是一個主句，主語是 'homines'。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Como resultado de esto, ocurría que apenas podían extenderse y tenían dificultades para hacer la guerra a sus vecinos, por lo cual, siendo un pueblo aficionado a la guerra, se sentían profundamente afligidos.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>As a result of these factors, their ability to roam was restricted and they could not easily wage war on their neighbors. For a people fond of warfare, this was a cause of great distress.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>受此地理形勢影響，他們活動的範圍不大，也不易向鄰近部落開戰。對於一個好戰的民族而言，這無疑是極大的苦惱。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v12_1', terminus: 'His', analysis_morphologicus: "Pronombre, n., pl., abl.", analysis_morphologicus_en: "Pronoun, n., pl., abl.", analysis_morphologicus_zh: "代名詞，中性，複數，離格。" },
                    { id_verbi: 'v12_2', terminus: 'rebus', analysis_morphologicus: "Sustantivo, f., pl., abl.", analysis_morphologicus_en: "Noun, f., pl., abl.", analysis_morphologicus_zh: "名詞，陰性，複數，離格。" },
                    { id_verbi: 'v12_3', terminus: 'fiebat', analysis_morphologicus: "Verbo, 3ª p., sg., imp., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., sg., imp., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱單數，未完成時，直陳，主動。" },
                    { id_verbi: 'v12_4', terminus: 'ut', analysis_morphologicus: "Conjunción de resultado.", analysis_morphologicus_en: "Conjunction of result.", analysis_morphologicus_zh: "結果連詞。" },
                    { id_verbi: 'v12_5', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v12_6', terminus: 'minus', analysis_morphologicus: "Adverbio comparativo.", analysis_morphologicus_en: "Comparative adverb.", analysis_morphologicus_zh: "比較副詞。" },
                    { id_verbi: 'v12_7', terminus: 'late', analysis_morphologicus: "Adverbio.", analysis_morphologicus_en: "Adverb.", analysis_morphologicus_zh: "副詞。" },
                    { id_verbi: 'v12_8', terminus: 'uagarentur', analysis_morphologicus: "Verbo deponente, 3ª p., pl., imp., subj.", analysis_morphologicus_en: "Deponent verb, 3rd p., pl., imp., subj.", analysis_morphologicus_zh: "異態動詞，第三人稱複數，未完成時，虛擬。" },
                    { id_verbi: 'v12_9', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v12_10', terminus: 'minus', analysis_morphologicus: "Adverbio comparativo.", analysis_morphologicus_en: "Comparative adverb.", analysis_morphologicus_zh: "比較副詞。" },
                    { id_verbi: 'v12_11', terminus: 'facile', analysis_morphologicus: "Adverbio.", analysis_morphologicus_en: "Adverb.", analysis_morphologicus_zh: "副詞。" },
                    { id_verbi: 'v12_12', terminus: 'finitimis', analysis_morphologicus: "Sustantivo, m., pl., dat.", analysis_morphologicus_en: "Noun, m., pl., dat.", analysis_morphologicus_zh: "名詞，陽性，複數，與格。" },
                    { id_verbi: 'v12_13', terminus: 'bellum', analysis_morphologicus: "Sustantivo, n., sg., acus. Objeto directo.", analysis_morphologicus_en: "Noun, n., sg., acc. Direct object.", analysis_morphologicus_zh: "名詞，中性，單數，賓格。直接賓語。" },
                    { id_verbi: 'v12_14', terminus: 'inferre', analysis_morphologicus: "Verbo, inf. pres., act.", analysis_morphologicus_en: "Verb, pres. inf., act.", analysis_morphologicus_zh: "動詞，現在時不定式，主動。" },
                    { id_verbi: 'v12_15', terminus: 'possent;', analysis_morphologicus: "Verbo, 3ª p., pl., imp., subj.", analysis_morphologicus_en: "Verb, 3rd p., pl., imp., subj.", analysis_morphologicus_zh: "動詞，第三人稱複數，未完成時，虛擬。" },
                    { id_verbi: 'v12_16', terminus: 'qua', analysis_morphologicus: "Adverbio relativo.", analysis_morphologicus_en: "Relative adverb.", analysis_morphologicus_zh: "關係副詞。" },
                    { id_verbi: 'v12_17', terminus: 'ex', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v12_18', terminus: 'parte', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v12_19', terminus: 'homines', analysis_morphologicus: "Sustantivo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Noun, m., pl., nom. Subject.", analysis_morphologicus_zh: "名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v12_20', terminus: 'bellandi', analysis_morphologicus: "Gerundio, genitivo.", analysis_morphologicus_en: "Gerund, genitive.", analysis_morphologicus_zh: "動名詞，屬格。" },
                    { id_verbi: 'v12_21', terminus: 'cupidi', analysis_morphologicus: "Adjetivo, m., pl., nom.", analysis_morphologicus_en: "Adjective, m., pl., nom.", analysis_morphologicus_zh: "形容詞，陽性，複數，主格。" },
                    { id_verbi: 'v12_22', terminus: 'magno', analysis_morphologicus: "Adjetivo, m., sg., abl.", analysis_morphologicus_en: "Adjective, m., sg., abl.", analysis_morphologicus_zh: "形容詞，陽性，單數，離格。" },
                    { id_verbi: 'v12_23', terminus: 'dolore', analysis_morphologicus: "Sustantivo, m., sg., abl.", analysis_morphologicus_en: "Noun, m., sg., abl.", analysis_morphologicus_zh: "名詞，陽性，單數，離格。" },
                    { id_verbi: 'v12_24', terminus: 'adficiebantur.', analysis_morphologicus: "Verbo, 3ª p., pl., imp., pas., ind.", analysis_morphologicus_en: "Verb, 3rd p., pl., imp., pass., ind.", analysis_morphologicus_zh: "動詞，第三人稱複數，未完成時，被動，直陳。" }
                ]
            },
            {
                id_orationis: 'o13',
                textus_originalis: "Pro multitudine autem hominum et pro gloria belli atque fortitudinis angustos se fines habere arbitrabantur, qui in longitudinem milia passuum CCXL, in latitudinem CLXXX patebant.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>La oración principal es <b>arbitrabantur</b>, que rige una <b>oración de infinitivo (AcI)</b>: <i>se angustos fines habere</i>. <b>qui... patebant</b> es una <b>cláusula de relativo</b> que modifica a 'fines'.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>The main clause is <b>arbitrabantur</b>, which governs an <b>infinitive clause (AcI)</b>: <i>se angustos fines habere</i>. <b>qui... patebant</b> is a <b>relative clause</b> modifying 'fines'.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>主句是 <b>arbitrabantur</b>，它支配一個<b>不定式子句（AcI）</b>：<i>se angustos fines habere</i>。<b>qui... patebant</b> 是修飾 'fines' 的<b>關係從句</b>。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Consideraban que, para su gran número de habitantes y su reputación de valor y de gloria guerrera, sus fronteras eran demasiado estrechas, pues se extendían 240 millas de largo por 180 de ancho.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>Considering their large population and their renown for bravery and warfare, they believed the territory they had was too small, extending 240 miles in length and 180 in breadth.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>他們認為，以其眾多的人口和赫赫戰功而論，現有的疆域實在太過狹小了——縱長二百四十羅里，橫闊一百八十羅里。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v13_1', terminus: 'Pro', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v13_2', terminus: 'multitudine', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v13_3', terminus: 'autem', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v13_4', terminus: 'hominum', analysis_morphologicus: "Sustantivo, m., pl., gen.", analysis_morphologicus_en: "Noun, m., pl., gen.", analysis_morphologicus_zh: "名詞，陽性，複數，屬格。" },
                    { id_verbi: 'v13_5', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v13_6', terminus: 'pro', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v13_7', terminus: 'gloria', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v13_8', terminus: 'belli', analysis_morphologicus: "Sustantivo, n., sg., gen.", analysis_morphologicus_en: "Noun, n., sg., gen.", analysis_morphologicus_zh: "名詞，中性，單數，屬格。" },
                    { id_verbi: 'v13_9', terminus: 'atque', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v13_10', terminus: 'fortitudinis', analysis_morphologicus: "Sustantivo, f., sg., gen.", analysis_morphologicus_en: "Noun, f., sg., gen.", analysis_morphologicus_zh: "名詞，陰性，單數，屬格。" },
                    { id_verbi: 'v13_11', terminus: 'angustos', analysis_morphologicus: "Adjetivo, m., pl., acus.", analysis_morphologicus_en: "Adjective, m., pl., acc.", analysis_morphologicus_zh: "形容詞，陽性，複數，賓格。" },
                    { id_verbi: 'v13_12', terminus: 'se', analysis_morphologicus: "Pronombre reflexivo, acus. Sujeto de AcI.", analysis_morphologicus_en: "Reflexive pronoun, acc. Subject of AcI.", analysis_morphologicus_zh: "反身代名詞，賓格。不定式子句的主語。" },
                    { id_verbi: 'v13_13', terminus: 'fines', analysis_morphologicus: "Sustantivo, m., pl., acus. Objeto directo de 'habere'.", analysis_morphologicus_en: "Noun, m., pl., acc. Direct object of 'habere'.", analysis_morphologicus_zh: "名詞，陽性，複數，賓格。'habere'的直接賓語。" },
                    { id_verbi: 'v13_14', terminus: 'habere', analysis_morphologicus: "Verbo, inf. pres., act.", analysis_morphologicus_en: "Verb, pres. inf., act.", analysis_morphologicus_zh: "動詞，現在時不定式，主動。" },
                    { id_verbi: 'v13_15', terminus: 'arbitrabantur,', analysis_morphologicus: "Verbo deponente, 3ª p., pl., imp., ind.", analysis_morphologicus_en: "Deponent verb, 3rd p., pl., imp., ind.", analysis_morphologicus_zh: "異態動詞，第三人稱複數，未完成時，直陳。" },
                    { id_verbi: 'v13_16', terminus: 'qui', analysis_morphologicus: "Pronombre relativo, m., pl., nom. Sujeto.", analysis_morphologicus_en: "Relative pronoun, m., pl., nom. Subject.", analysis_morphologicus_zh: "關係代名詞，陽性，複數，主格。主語。" },
                    { id_verbi: 'v13_17', terminus: 'in', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v13_18', terminus: 'longitudinem', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v13_19', terminus: 'milia', analysis_morphologicus: "Sustantivo, n., pl., acus.", analysis_morphologicus_en: "Noun, n., pl., acc.", analysis_morphologicus_zh: "名詞，中性，複數，賓格。" },
                    { id_verbi: 'v13_20', terminus: 'passuum', analysis_morphologicus: "Sustantivo, m., pl., genitivo partitivo.", analysis_morphologicus_en: "Noun, m., pl., partitive genitive.", analysis_morphologicus_zh: "名詞，陽性，複數，部分屬格。" },
                    { id_verbi: 'v13_21', terminus: 'CCXL,', analysis_morphologicus: "Numeral.", analysis_morphologicus_en: "Numeral.", analysis_morphologicus_zh: "數詞。" },
                    { id_verbi: 'v13_22', terminus: 'in', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v13_23', terminus: 'latitudinem', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v13_24', terminus: 'CLXXX', analysis_morphologicus: "Numeral.", analysis_morphologicus_en: "Numeral.", analysis_morphologicus_zh: "數詞。" },
                    { id_verbi: 'v13_25', terminus: 'patebant.', analysis_morphologicus: "Verbo, 3ª p., pl., imp., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., imp., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱複數，未完成時，直陳，主動。" }
                ]
            },
            {
                id_capituli: 4,
                orationes: [
                id_orationis: 'o14',
                textus_originalis: "His rebus adducti et auctoritate Orgetorigis permoti constituerunt ea quae ad proficiscendum pertinerent comparare, iumentorum et carrorum quam maximum numerum coemere, sementes quam maximas facere, ut in itinere copia frumenti suppeteret, cum proximis ciuitatibus pacem et amicitiam confirmare.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>El verbo principal <b>constituerunt</b> rige una serie de <b>infinitivos completivos</b>: <i>comparare, coemere, facere, confirmare</i>. <b>ut... suppeteret</b> es una cláusula subordinada final.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>The main verb <b>constituerunt</b> governs a series of <b>complementary infinitives</b>: <i>comparare, coemere, facere, confirmare</i>. <b>ut... suppeteret</b> is a subordinate purpose clause.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>主要動詞<b>constituerunt</b>支配一系列<b>補語不定式</b>：<i>comparare, coemere, facere, confirmare</i>。<b>ut... suppeteret</b>是一個目的從句。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Inducidos por estas consideraciones y movidos por la autoridad de Orgetórix, decidieron preparar lo necesario para la partida, comprar el mayor número posible de bestias de carga y de carros, hacer las mayores siembras posibles para asegurar la provisión de trigo durante el viaje, y consolidar la paz y la amistad con los pueblos vecinos.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>Influenced by these factors and moved by the authority of Orgetorix, they decided to prepare what was necessary for their departure, to buy up the greatest possible number of pack animals and wagons, to make the most extensive sowings possible to ensure a supply of grain on their journey, and to establish peace and friendship with the neighboring states.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>受這些情況影響，並在奧格托里克斯的權威鼓動下，他們決定準備出發所需的一切，盡可能多地購買馱畜和車輛，盡可能多地播種，以確保旅途中有充足的糧食供應，並與鄰近的部族鞏固和平與友誼。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v14_1', terminus: 'His', analysis_morphologicus: "Pronombre, n., pl., abl.", analysis_morphologicus_en: "Pronoun, n., pl., abl.", analysis_morphologicus_zh: "代名詞，中性，複數，離格。" },
                    { id_verbi: 'v14_2', terminus: 'rebus', analysis_morphologicus: "Sustantivo, f., pl., abl.", analysis_morphologicus_en: "Noun, f., pl., abl.", analysis_morphologicus_zh: "名詞，陰性，複數，離格。" },
                    { id_verbi: 'v14_3', terminus: 'adducti', analysis_morphologicus: "Participio, perf., pas., nom., pl., m.", analysis_morphologicus_en: "Participle, perf., pass., nom., pl., m.", analysis_morphologicus_zh: "分詞，完成時，被動，主格，複數，陽性。" },
                    { id_verbi: 'v14_4', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v14_5', terminus: 'auctoritate', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v14_6', terminus: 'Orgetorigis', analysis_morphologicus: "Sustantivo, m., sg., gen.", analysis_morphologicus_en: "Noun, m., sg., gen.", analysis_morphologicus_zh: "名詞，陽性，單數，屬格。" },
                    { id_verbi: 'v14_7', terminus: 'permoti', analysis_morphologicus: "Participio, perf., pas., nom., pl., m.", analysis_morphologicus_en: "Participle, perf., pass., nom., pl., m.", analysis_morphologicus_zh: "分詞，完成時，被動，主格，複數，陽性。" },
                    { id_verbi: 'v14_8', terminus: 'constituerunt', analysis_morphologicus: "Verbo, 3ª p., pl., perf., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., perf., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱複數，完成時，直陳，主動。" },
                    { id_verbi: 'v14_9', terminus: 'ea', analysis_morphologicus: "Pronombre, n., pl., acus.", analysis_morphologicus_en: "Pronoun, n., pl., acc.", analysis_morphologicus_zh: "代名詞，中性，複數，賓格。" },
                    { id_verbi: 'v14_10', terminus: 'quae', analysis_morphologicus: "Pronombre relativo, n., pl., nom.", analysis_morphologicus_en: "Relative pronoun, n., pl., nom.", analysis_morphologicus_zh: "關係代名詞，中性，複數，主格。" },
                    { id_verbi: 'v14_11', terminus: 'ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v14_12', terminus: 'proficiscendum', analysis_morphologicus: "Gerundio, acusativo.", analysis_morphologicus_en: "Gerund, accusative.", analysis_morphologicus_zh: "動名詞，賓格。" },
                    { id_verbi: 'v14_13', terminus: 'pertinerent', analysis_morphologicus: "Verbo, 3ª p., pl., imp., subj., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., imp., subj., act.", analysis_morphologicus_zh: "動詞，第三人稱複數，未完成時，虛擬，主動。" },
                    { id_verbi: 'v14_14', terminus: 'comparare,', analysis_morphologicus: "Verbo, inf. pres., act.", analysis_morphologicus_en: "Verb, pres. inf., act.", analysis_morphologicus_zh: "動詞，現在時不定式，主動。" },
                    { id_verbi: 'v14_15', terminus: 'iumentorum', analysis_morphologicus: "Sustantivo, n., pl., gen.", analysis_morphologicus_en: "Noun, n., pl., gen.", analysis_morphologicus_zh: "名詞，中性，複數，屬格。" },
                    { id_verbi: 'v14_16', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v14_17', terminus: 'carrorum', analysis_morphologicus: "Sustantivo, m., pl., gen.", analysis_morphologicus_en: "Noun, m., pl., gen.", analysis_morphologicus_zh: "名詞，陽性，複數，屬格。" },
                    { id_verbi: 'v14_18', terminus: 'quam', analysis_morphologicus: "Adverbio, con superlativo.", analysis_morphologicus_en: "Adverb, with superlative.", analysis_morphologicus_zh: "副詞，與最高級連用。" },
                    { id_verbi: 'v14_19', terminus: 'maximum', analysis_morphologicus: "Adj., m., sg., acus. Superlativo.", analysis_morphologicus_en: "Adj., m., sg., acc. Superlative.", analysis_morphologicus_zh: "形容詞，陽性，單數，賓格。最高級。" },
                    { id_verbi: 'v14_20', terminus: 'numerum', analysis_morphologicus: "Sustantivo, m., sg., acus.", analysis_morphologicus_en: "Noun, m., sg., acc.", analysis_morphologicus_zh: "名詞，陽性，單數，賓格。" },
                    { id_verbi: 'v14_21', terminus: 'coemere,', analysis_morphologicus: "Verbo, inf. pres., act.", analysis_morphologicus_en: "Verb, pres. inf., act.", analysis_morphologicus_zh: "動詞，現在時不定式，主動。" },
                    { id_verbi: 'v14_22', terminus: 'sementes', analysis_morphologicus: "Sustantivo, f., pl., acus.", analysis_morphologicus_en: "Noun, f., pl., acc.", analysis_morphologicus_zh: "名詞，陰性，複數，賓格。" },
                    { id_verbi: 'v14_23', terminus: 'quam', analysis_morphologicus: "Adverbio, con superlativo.", analysis_morphologicus_en: "Adverb, with superlative.", analysis_morphologicus_zh: "副詞，與最高級連用。" },
                    { id_verbi: 'v14_24', terminus: 'maximas', analysis_morphologicus: "Adj., f., pl., acus. Superlativo.", analysis_morphologicus_en: "Adj., f., pl., acc. Superlative.", analysis_morphologicus_zh: "形容詞，陰性，複數，賓格。最高級。" },
                    { id_verbi: 'v14_25', terminus: 'facere,', analysis_morphologicus: "Verbo, inf. pres., act.", analysis_morphologicus_en: "Verb, pres. inf., act.", analysis_morphologicus_zh: "動詞，現在時不定式，主動。" },
                    { id_verbi: 'v14_26', terminus: 'ut', analysis_morphologicus: "Conjunción final.", analysis_morphologicus_en: "Purpose conjunction.", analysis_morphologicus_zh: "目的連詞。" },
                    { id_verbi: 'v14_27', terminus: 'in', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v14_28', terminus: 'itinere', analysis_morphologicus: "Sustantivo, n., sg., abl.", analysis_morphologicus_en: "Noun, n., sg., abl.", analysis_morphologicus_zh: "名詞，中性，單數，離格。" },
                    { id_verbi: 'v14_29', terminus: 'copia', analysis_morphologicus: "Sustantivo, f., sg., nom.", analysis_morphologicus_en: "Noun, f., sg., nom.", analysis_morphologicus_zh: "名詞，陰性，單數，主格。" },
                    { id_verbi: 'v14_30', terminus: 'frumenti', analysis_morphologicus: "Sustantivo, n., sg., gen.", analysis_morphologicus_en: "Noun, n., sg., gen.", analysis_morphologicus_zh: "名詞，中性，單數，屬格。" },
                    { id_verbi: 'v14_31', terminus: 'suppeteret,', analysis_morphologicus: "Verbo, 3ª p., sg., imp., subj., act.", analysis_morphologicus_en: "Verb, 3rd p., sg., imp., subj., act.", analysis_morphologicus_zh: "動詞，第三人稱單數，未完成時，虛擬，主動。" },
                    { id_verbi: 'v14_32', terminus: 'cum', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v14_33', terminus: 'proximis', analysis_morphologicus: "Adj., f., pl., abl. Superlativo.", analysis_morphologicus_en: "Adj., f., pl., abl. Superlative.", analysis_morphologicus_zh: "形容詞，陰性，複數，離格。最高級。" },
                    { id_verbi: 'v14_34', terminus: 'ciuitatibus', analysis_morphologicus: "Sustantivo, f., pl., abl.", analysis_morphologicus_en: "Noun, f., pl., abl.", analysis_morphologicus_zh: "名詞，陰性，複數，離格。" },
                    { id_verbi: 'v14_35', terminus: 'pacem', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v14_36', terminus: 'et', analysis_morphologicus: "Conjunción.", analysis_morphologicus_en: "Conjunction.", analysis_morphologicus_zh: "連詞。" },
                    { id_verbi: 'v14_37', terminus: 'amicitiam', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v14_38', terminus: 'confirmare.', analysis_morphologicus: "Verbo, inf. pres., act.", analysis_morphologicus_en: "Verb, pres. inf., act.", analysis_morphologicus_zh: "動詞，現在時不定式，主動。" }
                ]
            },
            {
                id_orationis: 'o15',
                textus_originalis: "Ad eas res conficiendas biennium sibi satis esse duxerunt; in tertium annum profectionem lege confirmant.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Dos oraciones coordinadas. La primera tiene como verbo <b>duxerunt</b>, que rige una AcI. La segunda tiene como verbo <b>confirmant</b>.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>Two coordinated clauses. The first has the verb <b>duxerunt</b>, which governs an AcI. The second has the verb <b>confirmant</b>.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>兩個並列的句子。第一個句子的動詞是<b>duxerunt</b>，它支配一個不定式子句。第二個句子的動詞是<b>confirmant</b>。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Consideraron que un bienio les sería suficiente para llevar a cabo estos preparativos; mediante una ley, fijan la partida para el tercer año.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>They considered that a period of two years would be sufficient for them to complete these preparations; by law, they set their departure for the third year.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>他們認為兩年時間足以完成這些準備工作；他們通過法律確定第三年出發。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v15_1', terminus: 'Ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v15_2', terminus: 'eas', analysis_morphologicus: "Pronombre, f., pl., acus.", analysis_morphologicus_en: "Pronoun, f., pl., acc.", analysis_morphologicus_zh: "代名詞，陰性，複數，賓格。" },
                    { id_verbi: 'v15_3', terminus: 'res', analysis_morphologicus: "Sustantivo, f., pl., acus.", analysis_morphologicus_en: "Noun, f., pl., acc.", analysis_morphologicus_zh: "名詞，陰性，複數，賓格。" },
                    { id_verbi: 'v15_4', terminus: 'conficiendas', analysis_morphologicus: "Gerundivo, f., pl., acus.", analysis_morphologicus_en: "Gerundive, f., pl., acc.", analysis_morphologicus_zh: "動形詞，陰性，複數，賓格。" },
                    { id_verbi: 'v15_5', terminus: 'biennium', analysis_morphologicus: "Sustantivo, n., sg., acus.", analysis_morphologicus_en: "Noun, n., sg., acc.", analysis_morphologicus_zh: "名詞，中性，單數，賓格。" },
                    { id_verbi: 'v15_6', terminus: 'sibi', analysis_morphologicus: "Pronombre, dativo.", analysis_morphologicus_en: "Pronoun, dative.", analysis_morphologicus_zh: "代名詞，與格。" },
                    { id_verbi: 'v15_7', terminus: 'satis', analysis_morphologicus: "Adverbio.", analysis_morphologicus_en: "Adverb.", analysis_morphologicus_zh: "副詞。" },
                    { id_verbi: 'v15_8', terminus: 'esse', analysis_morphologicus: "Verbo, inf. pres.", analysis_morphologicus_en: "Verb, pres. inf.", analysis_morphologicus_zh: "動詞，現在時不定式。" },
                    { id_verbi: 'v15_9', terminus: 'duxerunt;', analysis_morphologicus: "Verbo, 3ª p., pl., perf., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., perf., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱複數，完成時，直陳，主動。" },
                    { id_verbi: 'v15_10', terminus: 'in', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v15_11', terminus: 'tertium', analysis_morphologicus: "Adj., m., sg., acus.", analysis_morphologicus_en: "Adj., m., sg., acc.", analysis_morphologicus_zh: "形容詞，陽性，單數，賓格。" },
                    { id_verbi: 'v15_12', terminus: 'annum', analysis_morphologicus: "Sustantivo, m., sg., acus.", analysis_morphologicus_en: "Noun, m., sg., acc.", analysis_morphologicus_zh: "名詞，陽性，單數，賓格。" },
                    { id_verbi: 'v15_13', terminus: 'profectionem', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v15_14', terminus: 'lege', analysis_morphologicus: "Sustantivo, f., sg., abl.", analysis_morphologicus_en: "Noun, f., sg., abl.", analysis_morphologicus_zh: "名詞，陰性，單數，離格。" },
                    { id_verbi: 'v15_15', terminus: 'confirmant.', analysis_morphologicus: "Verbo, 3ª p., pl., pres., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., pl., pres., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱複數，現在時，直陳，主動。" }
                ]
            },
            {
                id_orationis: 'o16',
                textus_originalis: "Ad eas res conficiendas Orgetorix deligitur.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración simple con verbo en voz pasiva: <b>deligitur</b>. El sujeto es <b>Orgetorix</b>.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A simple sentence with a verb in the passive voice: <b>deligitur</b>. The subject is <b>Orgetorix</b>.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>一個帶有被動語態動詞的簡單句：<b>deligitur</b>。主語是<b>Orgetorix</b>。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Para llevar a cabo estas misiones, Orgetórix es elegido.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>To carry out these tasks, Orgetorix is chosen.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>為了完成這些任務，奧格托里克斯被選中。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v16_1', terminus: 'Ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v16_2', terminus: 'eas', analysis_morphologicus: "Pronombre, f., pl., acus.", analysis_morphologicus_en: "Pronoun, f., pl., acc.", analysis_morphologicus_zh: "代名詞，陰性，複數，賓格。" },
                    { id_verbi: 'v16_3', terminus: 'res', analysis_morphologicus: "Sustantivo, f., pl., acus.", analysis_morphologicus_en: "Noun, f., pl., acc.", analysis_morphologicus_zh: "名詞，陰性，複數，賓格。" },
                    { id_verbi: 'v16_4', terminus: 'conficiendas', analysis_morphologicus: "Gerundivo, f., pl., acus.", analysis_morphologicus_en: "Gerundive, f., pl., acc.", analysis_morphologicus_zh: "動形詞，陰性，複數，賓格。" },
                    { id_verbi: 'v16_5', terminus: 'Orgetorix', analysis_morphologicus: "Sustantivo, m., sg., nom.", analysis_morphologicus_en: "Noun, m., sg., nom.", analysis_morphologicus_zh: "名詞，陽性，單數，主格。" },
                    { id_verbi: 'v16_6', terminus: 'deligitur.', analysis_morphologicus: "Verbo, 3ª p., sg., pres., pas., ind.", analysis_morphologicus_en: "Verb, 3rd p., sg., pres., pass., ind.", analysis_morphologicus_zh: "動詞，第三人稱單數，現在時，被動，直陳。" }
                ]
            },
            {
                id_orationis: 'o17',
                textus_originalis: "Is sibi legationem ad ciuitates suscepit.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración simple. Sujeto: <b>Is</b>. Verbo: <b>suscepit</b>. Objeto Directo: <b>legationem</b>.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>Simple sentence. Subject: <b>Is</b>. Verb: <b>suscepit</b>. Direct Object: <b>legationem</b>.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>簡單句。主語：<b>Is</b>。動詞：<b>suscepit</b>。直接賓語：<b>legationem</b>。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Él tomó para sí la embajada ante los pueblos.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>He undertook for himself the embassy to the states.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>他親自承擔了出使各邦的任務。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v17_1', terminus: 'Is', analysis_morphologicus: "Pronombre, m., sg., nom.", analysis_morphologicus_en: "Pronoun, m., sg., nom.", analysis_morphologicus_zh: "代名詞，陽性，單數，主格。" },
                    { id_verbi: 'v17_2', terminus: 'sibi', analysis_morphologicus: "Pronombre, dativo.", analysis_morphologicus_en: "Pronoun, dative.", analysis_morphologicus_zh: "代名詞，與格。" },
                    { id_verbi: 'v17_3', terminus: 'legationem', analysis_morphologicus: "Sustantivo, f., sg., acus.", analysis_morphologicus_en: "Noun, f., sg., acc.", analysis_morphologicus_zh: "名詞，陰性，單數，賓格。" },
                    { id_verbi: 'v17_4', terminus: 'ad', analysis_morphologicus: "Preposición + Acusativo.", analysis_morphologicus_en: "Preposition + Accusative.", analysis_morphologicus_zh: "介詞 + 賓格。" },
                    { id_verbi: 'v17_5', terminus: 'ciuitates', analysis_morphologicus: "Sustantivo, f., pl., acus.", analysis_morphologicus_en: "Noun, f., pl., acc.", analysis_morphologicus_zh: "名詞，陰性，複數，賓格。" },
                    { id_verbi: 'v17_6', terminus: 'suscepit.', analysis_morphologicus: "Verbo, 3ª p., sg., perf., ind., act.", analysis_morphologicus_en: "Verb, 3rd p., sg., perf., ind., act.", analysis_morphologicus_zh: "動詞，第三人稱單數，完成時，直陳，主動。" }
                ]
            },
            {
                id_orationis: 'o18',
                textus_originalis: "In eo itinere persuadet Castico, Catamantaloedis filio, Sequano, cuius pater regnum in Sequanis multos annos obtinuerat et a senatu populi Romani amicus appellatus erat, ut regnum in ciuitate sua occuparet quod pater ante habuerat; itemque Dumnorigi Haeduo, fratri Diuiciaci, qui eo tempore principatum in ciuitate optinebat ac maxime plebi acceptus erat, ut idem conaretur persuadet eique filiam suam in matrimonium dat.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración muy compleja con estructura paralela. El verbo principal <b>persuadet</b> se repite. El primer bloque es <b>persuadet Castico... ut... occuparet</b>. El segundo es <b>itemque [persuadet] Dumnorigi... ut... conaretur</b>. El verbo final es <b>dat</b>.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>An extremely complex sentence with a parallel structure. The main verb <b>persuadet</b> is repeated. The first block is <b>persuadet Castico... ut... occuparet</b>. The second is <b>itemque [persuadet] Dumnorigi... ut... conaretur</b>. The final verb is <b>dat</b>.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>一個帶有平行結構的極其複雜的句子。主要動詞<b>persuadet</b>被重複。第一個區塊是<b>persuadet Castico... ut... occuparet</b>。第二個區塊是<b>itemque [persuadet] Dumnorigi... ut... conaretur</b>。最後的動詞是<b>dat</b>。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Durante este viaje, persuade al sécuano Cástico, hijo de Catamantaledes, para que tomara el poder en su pueblo, que su padre había tenido antes; de igual modo persuade al heduo Dumnórige, para que intentara lo mismo, y le entrega a su propia hija en matrimonio.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>On this journey, he persuades Casticus, a Sequanian, the son of Catamantaloedes, to seize the kingship in his own state, which his father had held before; and likewise he persuades Dumnorix, an Aeduan, to attempt the same, and gives him his own daughter in marriage.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>在這次出使途中，他說服了塞夸尼人卡斯蒂庫斯（其父卡塔曼塔洛迪斯曾在塞夸尼人中為王多年），讓他在自己的邦中奪取其父曾擁有的王權；同樣地，他又說服了埃杜伊人杜姆諾里克斯，勸其圖謀同樣的事業，並將自己的女兒嫁給他。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v18_1', terminus: 'In', analysis_morphologicus: "Preposición + Ablativo.", analysis_morphologicus_en: "Preposition + Ablative.", analysis_morphologicus_zh: "介詞 + 離格。" },
                    { id_verbi: 'v18_2', terminus: 'eo', analysis_morphologicus: 'Pronombre/Adjetivo demostrativo, neutro, singular, ablativo.', analysis_morphologicus_en: 'Demonstrative pronoun/adjective, neuter, singular, ablative.', analysis_morphologicus_zh: '指示代詞/形容詞，中性，單數，離格。' },
                    { id_verbi: 'v18_3', terminus: 'itinere', analysis_morphologicus: 'Sustantivo, neutro, singular, ablativo.', analysis_morphologicus_en: 'Noun, neuter, singular, ablative.', analysis_morphologicus_zh: '名詞，中性，單數，離格。' },
                    { id_verbi: 'v18_4', terminus: 'persuadet', analysis_morphologicus: 'Verbo, 3ª persona, singular, presente de indicativo activo. Verbo principal.', analysis_morphologicus_en: 'Verb, 3rd person, singular, present indicative active. Main verb.', analysis_morphologicus_zh: '動詞，第三人稱，單數，現在時直陳主動語態。主要動詞。' },
                    { id_verbi: 'v18_5', terminus: 'Castico,', analysis_morphologicus: 'Sustantivo propio, masculino, singular, dativo. Objeto indirecto de "persuadet".', analysis_morphologicus_en: 'Proper noun, masculine, singular, dative. Indirect object of "persuadet".', analysis_morphologicus_zh: '專有名詞，陽性，單數，與格。"persuadet"的間接賓語。' },
                    { id_verbi: 'v18_6', terminus: 'Catamantaloedis', analysis_morphologicus: 'Sustantivo propio, masculino, singular, genitivo.', analysis_morphologicus_en: 'Proper noun, masculine, singular, genitive.', analysis_morphologicus_zh: '專有名詞，陽性，單數，屬格。' },
                    { id_verbi: 'v18_7', terminus: 'filio,', analysis_morphologicus: 'Sustantivo, masculino, singular, dativo. Aposición a "Castico".', analysis_morphologicus_en: 'Noun, masculine, singular, dative. In apposition to "Castico".', analysis_morphologicus_zh: '名詞，陽性，單數，與格。"Castico"的同位語。' },
                    { id_verbi: 'v18_8', terminus: 'Sequano,', analysis_morphologicus: 'Sustantivo, masculino, singular, dativo. Aposición a "Castico".', analysis_morphologicus_en: 'Noun, masculine, singular, dative. In apposition to "Castico".', analysis_morphologicus_zh: '名詞，陽性，單數，與格。"Castico"的同位語。' },
                    { id_verbi: 'v18_9', terminus: 'cuius', analysis_morphologicus: 'Pronombre relativo, masculino, singular, genitivo. Posesivo.', analysis_morphologicus_en: 'Relative pronoun, masculine, singular, genitive. Possessive.', analysis_morphologicus_zh: '關係代名詞，陽性，單數，屬格。所有格。' },
                    { id_verbi: 'v18_10', terminus: 'pater', analysis_morphologicus: 'Sustantivo, masculino, singular, nominativo. Sujeto de "obtinuerat" y "appellatus erat".', analysis_morphologicus_en: 'Noun, masculine, singular, nominative. Subject of "obtinuerat" and "appellatus erat".', analysis_morphologicus_zh: '名詞，陽性，單數，主格。"obtinuerat"和"appellatus erat"的主語。' },
                    { id_verbi: 'v18_11', terminus: 'regnum', analysis_morphologicus: 'Sustantivo, neutro, singular, acusativo. Objeto directo de "obtinuerat".', analysis_morphologicus_en: 'Noun, neuter, singular, accusative. Direct object of "obtinuerat".', analysis_morphologicus_zh: '名詞，中性，單數，賓格。"obtinuerat"的直接賓語。' },
                    { id_verbi: 'v18_12', terminus: 'in', analysis_morphologicus: 'Preposición. Rige ablativo.', analysis_morphologicus_en: 'Preposition. Governs ablative.', analysis_morphologicus_zh: '介詞。支配離格。' },
                    { id_verbi: 'v18_13', terminus: 'Sequanis', analysis_morphologicus: 'Sustantivo, masculino, plural, ablativo.', analysis_morphologicus_en: 'Noun, masculine, plural, ablative.', analysis_morphologicus_zh: '名詞，陽性，複數，離格。' },
                    { id_verbi: 'v18_14', terminus: 'multos', analysis_morphologicus: 'Adjetivo, masculino, plural, acusativo. Modifica a "annos".', analysis_morphologicus_en: 'Adjective, masculine, plural, accusative. Modifies "annos".', analysis_morphologicus_zh: '形容詞，陽性，複數，賓格。修飾"annos"。' },
                    { id_verbi: 'v18_15', terminus: 'annos', analysis_morphologicus: 'Sustantivo, masculino, plural, acusativo. Acusativo de duración.', analysis_morphologicus_en: 'Noun, masculine, plural, accusative. Accusative of duration.', analysis_morphologicus_zh: '名詞，陽性，複數，賓格。表示持續時間的賓格。' },
                    { id_verbi: 'v18_16', terminus: 'obtinuerat', analysis_morphologicus: 'Verbo, 3ª persona, singular, pluscuamperfecto de indicativo, activo.', analysis_morphologicus_en: 'Verb, 3rd person, singular, pluperfect indicative, active.', analysis_morphologicus_zh: '動詞，第三人稱，單數，過去完成時直陳主動語態。' },
                    { id_verbi: 'v18_17', terminus: 'et', analysis_morphologicus: 'Conjunción copulativa.', analysis_morphologicus_en: 'Coordinating conjunction.', analysis_morphologicus_zh: '並列連詞。' },
                    { id_verbi: 'v18_18', terminus: 'a', analysis_morphologicus: 'Preposición. Rige ablativo (complemento agente).', analysis_morphologicus_en: 'Preposition. Governs ablative (agent).', analysis_morphologicus_zh: '介詞。支配離格（施動者）。' },
                    { id_verbi: 'v18_19', terminus: 'senatu', analysis_morphologicus: 'Sustantivo, masculino, singular, ablativo.', analysis_morphologicus_en: 'Noun, masculine, singular, ablative.', analysis_morphologicus_zh: '名詞，陽性，單數，離格。' },
                    { id_verbi: 'v18_20', terminus: 'populi', analysis_morphologicus: 'Sustantivo, masculino, singular, genitivo.', analysis_morphologicus_en: 'Noun, masculine, singular, genitive.', analysis_morphologicus_zh: '名詞，陽性，單數，屬格。' },
                    { id_verbi: 'v18_21', terminus: 'Romani', analysis_morphologicus: 'Adjetivo, masculino, singular, genitivo.', analysis_morphologicus_en: 'Adjective, masculine, singular, genitive.', analysis_morphologicus_zh: '形容詞，陽性，單數，屬格。' },
                    { id_verbi: 'v18_22', terminus: 'amicus', analysis_morphologicus: 'Sustantivo, masculino, singular, nominativo. Predicativo de "pater".', analysis_morphologicus_en: 'Noun, masculine, singular, nominative. Predicate of "pater".', analysis_morphologicus_zh: '名詞，陽性，單數，主格。"pater"的謂語。' },
                    { id_verbi: 'v18_23', terminus: 'appellatus', analysis_morphologicus: 'Participio perfecto pasivo, nominativo, singular, masculino.', analysis_morphologicus_en: 'Perfect passive participle, nominative, singular, masculine.', analysis_morphologicus_zh: '完成時被動分詞，主格，單數，陽性。' },
                    { id_verbi: 'v18_24', terminus: 'erat,', analysis_morphologicus: 'Verbo (sum), 3ª pers. sing., pluscuamperfecto pasivo de indicativo.', analysis_morphologicus_en: 'Verb (sum), 3rd pers. sing., pluperfect passive indicative.', analysis_morphologicus_zh: '動詞（sum），第三人稱單數，過去完成時被動直陳語態。' },
                    { id_verbi: 'v18_25', terminus: 'ut', analysis_morphologicus: 'Conjunción. Introduce una cláusula completiva.', analysis_morphologicus_en: 'Conjunction. Introduces a completive clause.', analysis_morphologicus_zh: '連詞。引導補語從句。' },
                    { id_verbi: 'v18_26', terminus: 'regnum', analysis_morphologicus: 'Sustantivo, neutro, singular, acusativo. Objeto directo de "occuparet".', analysis_morphologicus_en: 'Noun, neuter, singular, accusative. Direct object of "occuparet".', analysis_morphologicus_zh: '名詞，中性，單數，賓格。"occuparet"的直接賓語。' },
                    { id_verbi: 'v18_27', terminus: 'in', analysis_morphologicus: 'Preposición. Rige ablativo.', analysis_morphologicus_en: 'Preposition. Governs ablative.', analysis_morphologicus_zh: '介詞。支配離格。' },
                    { id_verbi: 'v18_28', terminus: 'ciuitate', analysis_morphologicus: 'Sustantivo, femenino, singular, ablativo.', analysis_morphologicus_en: 'Noun, feminine, singular, ablative.', analysis_morphologicus_zh: '名詞，陰性，單數，離格。' },
                    { id_verbi: 'v18_29', terminus: 'sua', analysis_morphologicus: 'Adjetivo posesivo, femenino, singular, ablativo.', analysis_morphologicus_en: 'Possessive adjective, feminine, singular, ablative.', analysis_morphologicus_zh: '物主形容詞，陰性，單數，離格。' },
                    { id_verbi: 'v18_30', terminus: 'occuparet', analysis_morphologicus: 'Verbo, 3ª persona, singular, imperfecto de subjuntivo, activo.', analysis_morphologicus_en: 'Verb, 3rd person, singular, imperfect subjunctive, active.', analysis_morphologicus_zh: '動詞，第三人稱，單數，未完成時虛擬主動語態。' },
                    { id_verbi: 'v18_31', terminus: 'quod', analysis_morphologicus: 'Pronombre relativo, neutro, singular, acusativo. Objeto directo de "habuerat".', analysis_morphologicus_en: 'Relative pronoun, neuter, singular, accusative. Direct object of "habuerat".', analysis_morphologicus_zh: '關係代名詞，中性，單數，賓格。"habuerat"的直接賓語。' },
                    { id_verbi: 'v18_32', terminus: 'pater', analysis_morphologicus: 'Sustantivo, masculino, singular, nominativo. Sujeto de "habuerat".', analysis_morphologicus_en: 'Noun, masculine, singular, nominative. Subject of "habuerat".', analysis_morphologicus_zh: '名詞，陽性，單數，主格。"habuerat"的主語。' },
                    { id_verbi: 'v18_33', terminus: 'ante', analysis_morphologicus: 'Adverbio.', analysis_morphologicus_en: 'Adverb.', analysis_morphologicus_zh: '副詞。' },
                    { id_verbi: 'v18_34', terminus: 'habuerat;', analysis_morphologicus: 'Verbo, 3ª persona, singular, pluscuamperfecto de indicativo, activo.', analysis_morphologicus_en: 'Verb, 3rd person, singular, pluperfect indicative, active.', analysis_morphologicus_zh: '動詞，第三人稱，單數，過去完成時直陳主動語態。' },
                    { id_verbi: 'v18_35', terminus: 'itemque', analysis_morphologicus: 'Adverbio (item) con conjunción enclítica (-que).', analysis_morphologicus_en: 'Adverb (item) with enclitic conjunction (-que).', analysis_morphologicus_zh: '副詞（item）帶後接連詞（-que）。' },
                    { id_verbi: 'v18_36', terminus: 'Dumnorigi', analysis_morphologicus: 'Sustantivo propio, masculino, singular, dativo. Objeto indirecto de "persuadet".', analysis_morphologicus_en: 'Proper noun, masculine, singular, dative. Indirect object of "persuadet".', analysis_morphologicus_zh: '專有名詞，陽性，單數，與格。"persuadet"的間接賓語。' },
                    { id_verbi: 'v18_37', terminus: 'Haeduo,', analysis_morphologicus: 'Sustantivo, masculino, singular, dativo. Aposición a "Dumnorigi".', analysis_morphologicus_en: 'Noun, masculine, singular, dative. In apposition to "Dumnorigi".', analysis_morphologicus_zh: '名詞，陽性，單數，與格。"Dumnorigi"的同位語。' },
                    { id_verbi: 'v18_38', terminus: 'fratri', analysis_morphologicus: 'Sustantivo, masculino, singular, dativo. Aposición a "Dumnorigi".', analysis_morphologicus_en: 'Noun, masculine, singular, dative. In apposition to "Dumnorigi".', analysis_morphologicus_zh: '名詞，陽性，單數，與格。"Dumnorigi"的同位語。' },
                    { id_verbi: 'v18_39', terminus: 'Diuiciaci,', analysis_morphologicus: 'Sustantivo propio, masculino, singular, genitivo.', analysis_morphologicus_en: 'Proper noun, masculine, singular, genitive.', analysis_morphologicus_zh: '專有名詞，陽性，單數，屬格。' },
                    { id_verbi: 'v18_40', terminus: 'qui', analysis_morphologicus: 'Pronombre relativo, masculino, singular, nominativo. Sujeto de "optinebat" y "erat".', analysis_morphologicus_en: 'Relative pronoun, masculine, singular, nominative. Subject of "optinebat" and "erat".', analysis_morphologicus_zh: '關係代名詞，陽性，單數，主格。"optinebat"和"erat"的主語。' },
                    { id_verbi: 'v18_41', terminus: 'eo', analysis_morphologicus: 'Adjetivo demostrativo, neutro, singular, ablativo.', analysis_morphologicus_en: 'Demonstrative adjective, neuter, singular, ablative.', analysis_morphologicus_zh: '指示形容詞，中性，單數，離格。' },
                    { id_verbi: 'v18_42', terminus: 'tempore', analysis_morphologicus: 'Sustantivo, neutro, singular, ablativo.', analysis_morphologicus_en: 'Noun, neuter, singular, ablative.', analysis_morphologicus_zh: '名詞，中性，單數，離格。' },
                    { id_verbi: 'v18_43', terminus: 'principatum', analysis_morphologicus: 'Sustantivo, masculino, singular, acusativo. Objeto directo de "optinebat".', analysis_morphologicus_en: 'Noun, masculine, singular, accusative. Direct object of "optinebat".', analysis_morphologicus_zh: '名詞，陽性，單數，賓格。"optinebat"的直接賓語。' },
                    { id_verbi: 'v18_44', terminus: 'in', analysis_morphologicus: 'Preposición. Rige ablativo.', analysis_morphologicus_en: 'Preposition. Governs ablative.', analysis_morphologicus_zh: '介詞。支配離格。' },
                    { id_verbi: 'v18_45', terminus: 'ciuitate', analysis_morphologicus: 'Sustantivo, femenino, singular, ablativo.', analysis_morphologicus_en: 'Noun, feminine, singular, ablative.', analysis_morphologicus_zh: '名詞，陰性，單數，離格。' },
                    { id_verbi: 'v18_46', terminus: 'optinebat', analysis_morphologicus: 'Verbo, 3ª persona, singular, imperfecto de indicativo, activo.', analysis_morphologicus_en: 'Verb, 3rd person, singular, imperfect indicative, active.', analysis_morphologicus_zh: '動詞，第三人稱，單數，未完成時直陳主動語態。' },
                    { id_verbi: 'v18_47', terminus: 'ac', analysis_morphologicus: 'Conjunción copulativa.', analysis_morphologicus_en: 'Coordinating conjunction.', analysis_morphologicus_zh: '並列連詞。' },
                    { id_verbi: 'v18_48', terminus: 'maxime', analysis_morphologicus: 'Adverbio superlativo.', analysis_morphologicus_en: 'Superlative adverb.', analysis_morphologicus_zh: '最高級副詞。' },
                    { id_verbi: 'v18_49', terminus: 'plebi', analysis_morphologicus: 'Sustantivo, femenino, singular, dativo. Dativo de interés con "acceptus".', analysis_morphologicus_en: 'Noun, feminine, singular, dative. Dative of interest with "acceptus".', analysis_morphologicus_zh: '名詞，陰性，單數，與格。與"acceptus"連用的利益與格。' },
                    { id_verbi: 'v18_50', terminus: 'acceptus', analysis_morphologicus: 'Participio/Adjetivo, masculino, singular, nominativo.', analysis_morphologicus_en: 'Participle/Adjective, masculine, singular, nominative.', analysis_morphologicus_zh: '分詞/形容詞，陽性，單數，主格。' },
                    { id_verbi: 'v18_51', terminus: 'erat,', analysis_morphologicus: 'Verbo (sum), 3ª persona, singular, imperfecto de indicativo.', analysis_morphologicus_en: 'Verb (sum), 3rd person, singular, imperfect indicative.', analysis_morphologicus_zh: '動詞（sum），第三人稱，單數，未完成時直陳語態。' },
                    { id_verbi: 'v18_52', terminus: 'ut', analysis_morphologicus: 'Conjunción. Introduce una cláusula completiva.', analysis_morphologicus_en: 'Conjunction. Introduces a completive clause.', analysis_morphologicus_zh: '連詞。引導補語從句。' },
                    { id_verbi: 'v18_53', terminus: 'idem', analysis_morphologicus: 'Pronombre, neutro, singular, acusativo. Objeto directo de "conaretur".', analysis_morphologicus_en: 'Pronoun, neuter, singular, accusative. Direct object of "conaretur".', analysis_morphologicus_zh: '代名詞，中性，單數，賓格。"conaretur"的直接賓語。' },
                    { id_verbi: 'v18_54', terminus: 'conaretur', analysis_morphologicus: 'Verbo deponente, 3ª persona, singular, imperfecto de subjuntivo.', analysis_morphologicus_en: 'Deponent verb, 3rd person, singular, imperfect subjunctive.', analysis_morphologicus_zh: '異態動詞，第三人稱，單數，未完成時虛擬語態。' },
                    { id_verbi: 'v18_55', terminus: 'persuadet', analysis_morphologicus: 'Verbo, 3ª persona, singular, presente de indicativo activo.', analysis_morphologicus_en: 'Verb, 3rd person, singular, present indicative active.', analysis_morphologicus_zh: '動詞，第三人稱，單數，現在時直陳主動語態。' },
                    { id_verbi: 'v18_56', terminus: 'eique', analysis_morphologicus: 'Pronombre (ei), dativo, singular + conjunción enclítica (-que). Objeto indirecto de "dat".', analysis_morphologicus_en: 'Pronoun (ei), dative, singular + enclitic conjunction (-que). Indirect object of "dat".', analysis_morphologicus_zh: '代名詞（ei），與格，單數 + 後接連詞（-que）。"dat"的間接賓語。' },
                    { id_verbi: 'v18_57', terminus: 'filiam', analysis_morphologicus: 'Sustantivo, femenino, singular, acusativo. Objeto directo de "dat".', analysis_morphologicus_en: 'Noun, feminine, singular, accusative. Direct object of "dat".', analysis_morphologicus_zh: '名詞，陰性，單數，賓格。"dat"的直接賓語。' },
                    { id_verbi: 'v18_58', terminus: 'suam', analysis_morphologicus: 'Adjetivo posesivo, femenino, singular, acusativo.', analysis_morphologicus_en: 'Possessive adjective, feminine, singular, accusative.', analysis_morphologicus_zh: '物主形容詞，陰性，單數，賓格。' },
                    { id_verbi: 'v18_59', terminus: 'in', analysis_morphologicus: 'Preposición. Rige acusativo (finalidad).', analysis_morphologicus_en: 'Preposition. Governs accusative (purpose).', analysis_morphologicus_zh: '介詞。支配賓格（目的）。' },
                    { id_verbi: 'v18_60', terminus: 'matrimonium', analysis_morphologicus: 'Sustantivo, neutro, singular, acusativo.', analysis_morphologicus_en: 'Noun, neuter, singular, accusative.', analysis_morphologicus_zh: '名詞，中性，單數，賓格。' },
                    { id_verbi: 'v18_61', terminus: 'dat.', analysis_morphologicus: 'Verbo, 3ª persona, singular, presente de indicativo activo.', analysis_morphologicus_en: 'Verb, 3rd person, singular, present indicative active.', analysis_morphologicus_zh: '動詞，第三人稱，單數，現在時直陳主動語態。' }
                ]
            },
            {
                id_orationis: 'o19',
                textus_originalis: "Perfacile factu esse illis probat conata perficere, propterea quod ipse suae ciuitatis imperium obtenturus esset: non esse dubium quin totius Galliae plurimum Heluetii possent; se suis copiis suoque exercitu illis regna conciliaturum confirmat.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>Oración muy compleja con múltiples AcI. El verbo principal <b>probat</b> rige la AcI <b>Perfacile factu esse... perficere</b>. La razón se da en una cláusula con <b>propterea quod</b>. El verbo <b>confirmat</b> rige dos AcI más.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>A very complex sentence with multiple AcI clauses. The main verb <b>probat</b> governs the AcI <b>Perfacile factu esse... perficere</b>. The reason is given in a clause with <b>propterea quod</b>. The verb <b>confirmat</b> governs two more AcI clauses.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>一個帶有多個不定式子句的非常複雜的句子。主要動詞<b>probat</b>支配不定式子句<b>Perfacile factu esse... perficere</b>。原因由帶有<b>propterea quod</b>的子句給出。動詞<b>confirmat</b>支配另外兩個不定式子句。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Les demuestra que llevar a cabo sus intentos es muy fácil de hacer, porque él mismo estaba a punto de obtener el poder de su propio pueblo; confirma que no había duda de que los helvecios eran los más poderosos de toda la Galia, y asegura que él, con sus propias tropas y su ejército, les conseguiría sus reinos.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>He proves to them that to accomplish their attempts would be very easy to do, because he himself was about to seize the power of his own state; he confirms that there was no doubt that the Helvetii were the most powerful of all Gaul, and assures them that he, with his own troops and army, would win them their kingdoms.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>他向他們證明，完成他們的計劃是輕而易舉的事，因為他自己也將要取得本邦的政權；他申明，赫爾維蒂人無疑是全高盧最強大的，並保證他將用自己的軍隊和兵力為他們贏得王國。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v19_1', terminus: 'Perfacile', analysis_morphologicus: "Adjetivo, neutro, singular, acusativo.", analysis_morphologicus_en: "Adjective, neuter, singular, accusative.", analysis_morphologicus_zh: "形容詞，中性，單數，賓格。" },
                    { id_verbi: 'v19_2', terminus: 'factu', analysis_morphologicus: 'Supino en ablativo. Ablativo de respecto.', analysis_morphologicus_en: 'Supine in the ablative. Ablative of respect.', analysis_morphologicus_zh: '目的動名詞，離格。方面離格。' },
                    { id_verbi: 'v19_3', terminus: 'esse', analysis_morphologicus: 'Verbo (sum), infinitivo de presente. Verbo de la AcI.', analysis_morphologicus_en: 'Verb (sum), present infinitive. Verb of the AcI.', analysis_morphologicus_zh: '動詞（sum），現在時不定式。不定式子句的動詞。' },
                    { id_verbi: 'v19_4', terminus: 'illis', analysis_morphologicus: 'Pronombre, masculino, plural, dativo. Objeto indirecto de "probat".', analysis_morphologicus_en: 'Pronoun, masculine, plural, dative. Indirect object of "probat".', analysis_morphologicus_zh: '代名詞，陽性，複數，與格。"probat"的間接賓語。' },
                    { id_verbi: 'v19_5', terminus: 'probat', analysis_morphologicus: 'Verbo, 3ª pers. sing., presente, activo, indicativo.', analysis_morphologicus_en: 'Verb, 3rd pers. sing., present, active, indicative.', analysis_morphologicus_zh: '動詞，第三人稱單數，現在時，主動語態，直陳法。' },
                    { id_verbi: 'v19_6', terminus: 'conata', analysis_morphologicus: 'Participio sustantivado, neutro, plural, acusativo. Objeto directo de "perficere".', analysis_morphologicus_en: 'Substantivized participle, neuter, plural, accusative. Direct object of "perficere".', analysis_morphologicus_zh: '名詞化分詞，中性，複數，賓格。"perficere"的直接賓語。' },
                    { id_verbi: 'v19_7', terminus: 'perficere,', analysis_morphologicus: 'Verbo, infinitivo presente, activo. Sujeto de "esse".', analysis_morphologicus_en: 'Verb, present infinitive, active. Subject of "esse".', analysis_morphologicus_zh: '動詞，現在時不定式，主動語態。"esse"的主語。' },
                    { id_verbi: 'v19_8', terminus: 'propterea', analysis_morphologicus: 'Adverbio.', analysis_morphologicus_en: 'Adverb.', analysis_morphologicus_zh: '副詞。' },
                    { id_verbi: 'v19_9', terminus: 'quod', analysis_morphologicus: 'Conjunción causal.', analysis_morphologicus_en: 'Causal conjunction.', analysis_morphologicus_zh: '原因連詞。' },
                    { id_verbi: 'v19_10', terminus: 'ipse', analysis_morphologicus: 'Pronombre, masculino, singular, nominativo.', analysis_morphologicus_en: 'Pronoun, masculine, singular, nominative.', analysis_morphologicus_zh: '代名詞，陽性，單數，主格。' },
                    { id_verbi: 'v19_11', terminus: 'suae', analysis_morphologicus: 'Adjetivo posesivo, femenino, singular, genitivo.', analysis_morphologicus_en: 'Possessive adjective, feminine, singular, genitive.', analysis_morphologicus_zh: '物主形容詞，陰性，單數，屬格。' },
                    { id_verbi: 'v19_12', terminus: 'ciuitatis', analysis_morphologicus: 'Sustantivo, femenino, singular, genitivo.', analysis_morphologicus_en: 'Noun, feminine, singular, genitive.', analysis_morphologicus_zh: '名詞，陰性，單數，屬格。' },
                    { id_verbi: 'v19_13', terminus: 'imperium', analysis_morphologicus: 'Sustantivo, neutro, singular, acusativo.', analysis_morphologicus_en: 'Noun, neuter, singular, accusative.', analysis_morphologicus_zh: '名詞，中性，單數，賓格。' },
                    { id_verbi: 'v19_14', terminus: 'obtenturus', analysis_morphologicus: 'Participio futuro activo.', analysis_morphologicus_en: 'Future active participle.', analysis_morphologicus_zh: '未來主動分詞。' },
                    { id_verbi: 'v19_15', terminus: 'esset:', analysis_morphologicus: 'Verbo, 3ª pers. sing., imperfecto, activo, subjuntivo.', analysis_morphologicus_en: 'Verb, 3rd pers. sing., imperfect, active, subjunctive.', analysis_morphologicus_zh: '動詞，第三人稱單數，未完成時，主動語態，虛擬式。' },
                    { id_verbi: 'v19_16', terminus: 'non', analysis_morphologicus: 'Adverbio.', analysis_morphologicus_en: 'Adverb.', analysis_morphologicus_zh: '副詞。' },
                    { id_verbi: 'v19_17', terminus: 'esse', analysis_morphologicus: 'Verbo, infinitivo presente.', analysis_morphologicus_en: 'Verb, present infinitive.', analysis_morphologicus_zh: '動詞，現在時不定式。' },
                    { id_verbi: 'v19_18', terminus: 'dubium', analysis_morphologicus: 'Adjetivo, neutro, singular, acusativo.', analysis_morphologicus_en: 'Adjective, neuter, singular, accusative.', analysis_morphologicus_zh: '形容詞，中性，單數，賓格。' },
                    { id_verbi: 'v19_19', terminus: 'quin', analysis_morphologicus: 'Conjunción.', analysis_morphologicus_en: 'Conjunction.', analysis_morphologicus_zh: '連詞。' },
                    { id_verbi: 'v19_20', terminus: 'totius', analysis_morphologicus: 'Adjetivo, femenino, singular, genitivo.', analysis_morphologicus_en: 'Adjective, feminine, singular, genitive.', analysis_morphologicus_zh: '形容詞，陰性，單數，屬格。' },
                    { id_verbi: 'v19_21', terminus: 'Galliae', analysis_morphologicus: 'Sustantivo, femenino, singular, genitivo.', analysis_morphologicus_en: 'Noun, feminine, singular, genitive.', analysis_morphologicus_zh: '名詞，陰性，單數，屬格。' },
                    { id_verbi: 'v19_22', terminus: 'plurimum', analysis_morphologicus: 'Adverbio superlativo.', analysis_morphologicus_en: 'Superlative adverb.', analysis_morphologicus_zh: '最高級副詞。' },
                    { id_verbi: 'v19_23', terminus: 'Heluetii', analysis_morphologicus: 'Sustantivo, masculino, plural, nominativo.', analysis_morphologicus_en: 'Noun, masculine, plural, nominative.', analysis_morphologicus_zh: '名詞，陽性，複數，主格。' },
                    { id_verbi: 'v19_24', terminus: 'possent;', analysis_morphologicus: 'Verbo, 3ª pers. plural, imperfecto, activo, subjuntivo.', analysis_morphologicus_en: 'Verb, 3rd pers. plural, imperfect, active, subjunctive.', analysis_morphologicus_zh: '動詞，第三人稱複數，未完成時，主動語態，虛擬式。' },
                    { id_verbi: 'v19_25', terminus: 'se', analysis_morphologicus: 'Pronombre reflexivo, acusativo.', analysis_morphologicus_en: 'Reflexive pronoun, accusative.', analysis_morphologicus_zh: '反身代名詞，賓格。' },
                    { id_verbi: 'v19_26', terminus: 'suis', analysis_morphologicus: 'Adjetivo posesivo, femenino, plural, ablativo.', analysis_morphologicus_en: 'Possessive adjective, feminine, plural, ablative.', analysis_morphologicus_zh: '物主形容詞，陰性，複數，離格。' },
                    { id_verbi: 'v19_27', terminus: 'copiis', analysis_morphologicus: 'Sustantivo, femenino, plural, ablativo.', analysis_morphologicus_en: 'Noun, feminine, plural, ablative.', analysis_morphologicus_zh: '名詞，陰性，複數，離格。' },
                    { id_verbi: 'v19_28', terminus: 'suoque', analysis_morphologicus: 'Adjetivo posesivo + conjunción.', analysis_morphologicus_en: 'Possessive adjective + conjunction.', analysis_morphologicus_zh: '物主形容詞 + 連詞。' },
                    { id_verbi: 'v19_29', terminus: 'exercitu', analysis_morphologicus: 'Sustantivo, masculino, singular, ablativo.', analysis_morphologicus_en: 'Noun, masculine, singular, ablative.', analysis_morphologicus_zh: '名詞，陽性，單數，離格。' },
                    { id_verbi: 'v19_30', terminus: 'illis', analysis_morphologicus: 'Pronombre, dativo, plural.', analysis_morphologicus_en: 'Pronoun, dative, plural.', analysis_morphologicus_zh: '代名詞，與格，複數。' },
                    { id_verbi: 'v19_31', terminus: 'regna', analysis_morphologicus: 'Sustantivo, neutro, plural, acusativo.', analysis_morphologicus_en: 'Noun, neuter, plural, accusative.', analysis_morphologicus_zh: '名詞，中性，複數，賓格。' },
                    { id_verbi: 'v19_32', terminus: 'conciliaturum', analysis_morphologicus: 'Participio futuro activo.', analysis_morphologicus_en: 'Future active participle.', analysis_morphologicus_zh: '未來主動分詞。' },
                    { id_verbi: 'v19_33', terminus: 'confirmat.', analysis_morphologicus: 'Verbo, 3ª pers. sing., presente, activo, indicativo.', analysis_morphologicus_en: 'Verb, 3rd pers. sing., present, active, indicative.', analysis_morphologicus_zh: '動詞，第三人稱單數，現在時，主動語態，直陳法。' }
                ]
            },
            {
                id_orationis: 'o20',
                textus_originalis: "Hac oratione adducti inter se fidem et ius iurandum dant et regno occupato per tres potentissimos ac firmissimos populos totius Galliae sese potiri posse sperant.",
                analysis_syntacticus: {
                    es: { titulus: "Análisis Sintáctico", contentus: `<p>El sujeto elíptico (los tres líderes) está modificado por <b>adducti</b>. Los verbos principales son <b>dant</b> y <b>sperant</b>. <b>Sperant</b> rige una AcI: <b>sese potiri posse</b>. <b>Regno occupato</b> es un ablativo absoluto.</p>` },
                    en: { titulus: "Syntactic Analysis", contentus: `<p>The elliptical subject (the three leaders) is modified by <b>adducti</b>. The main verbs are <b>dant</b> and <b>sperant</b>. <b>Sperant</b> governs an AcI: <b>sese potiri posse</b>. <b>Regno occupato</b> is an ablative absolute.</p>` },
                    zh: { titulus: "句法分析", contentus: `<p>省略的主語（三位領袖）由<b>adducti</b>修飾。主要動詞是<b>dant</b>和<b>sperant</b>。<b>Sperant</b>支配一個不定式子句：<b>sese potiri posse</b>。<b>Regno occupato</b>是一個獨立離格結構。</p>` }
                },
                translationes_explicatae: {
                    es: { titulus: "Traducción y Comentarios", contentus: `<p><b>Traducción Idiomática:</b><br><i>Persuadidos por este discurso, se dan entre sí juramento de lealtad y, una vez tomados sus reinos, esperan poder apoderarse de toda la Galia a través de estos tres pueblos, los más poderosos y firmes.</i></p>` },
                    en: { titulus: "Translations & Commentary", contentus: `<p><b>Idiomatic Translation:</b><br><i>Influenced by this speech, they give a pledge and an oath to one another, and with the kingship seized, they hope to be able to gain possession of all Gaul through these three most powerful and steadfast peoples.</i></p>` },
                    zh: { titulus: "翻譯與註釋", contentus: `<p><b>意譯：</b><br><i>被這番言辭所打動，他們互相交換了誓言和信物，並希望在奪取王權後，能通過這三個最強大、最穩固的民族來稱霸整個高盧。</i></p>` }
                },
                verba: [
                    { id_verbi: 'v20_1', terminus: 'Hac', analysis_morphologicus: "Pronombre, femenino, singular, ablativo.", analysis_morphologicus_en: "Pronoun, feminine, singular, ablative.", analysis_morphologicus_zh: "代名詞，陰性，單數，離格。" },
                    { id_verbi: 'v20_2', terminus: 'oratione', analysis_morphologicus: 'Sustantivo, femenino, singular, ablativo.', analysis_morphologicus_en: 'Noun, feminine, singular, ablative.', analysis_morphologicus_zh: '名詞，陰性，單數，離格。' },
                    { id_verbi: 'v20_3', terminus: 'adducti', analysis_morphologicus: 'Participio, perfecto, pasivo, nominativo, plural, masculino.', analysis_morphologicus_en: 'Participle, perfect, passive, nominative, plural, masculine.', analysis_morphologicus_zh: '分詞，完成時，被動語態，主格，複數，陽性。' },
                    { id_verbi: 'v20_4', terminus: 'inter', analysis_morphologicus: 'Preposición que rige acusativo.', analysis_morphologicus_en: 'Preposition governing accusative.', analysis_morphologicus_zh: '介詞，支配賓格。' },
                    { id_verbi: 'v20_5', terminus: 'se', analysis_morphologicus: 'Pronombre reflexivo, acusativo.', analysis_morphologicus_en: 'Reflexive pronoun, accusative.', analysis_morphologicus_zh: '反身代名詞，賓格。' },
                    { id_verbi: 'v20_6', terminus: 'fidem', analysis_morphologicus: 'Sustantivo, femenino, singular, acusativo.', analysis_morphologicus_en: 'Noun, feminine, singular, accusative.', analysis_morphologicus_zh: '名詞，陰性，單數，賓格。' },
                    { id_verbi: 'v20_7', terminus: 'et', analysis_morphologicus: 'Conjunción.', analysis_morphologicus_en: 'Conjunction.', analysis_morphologicus_zh: '連詞。' },
                    { id_verbi: 'v20_8', terminus: 'ius', analysis_morphologicus: 'Sustantivo, neutro, singular, acusativo.', analysis_morphologicus_en: 'Noun, neuter, singular, accusative.', analysis_morphologicus_zh: '名詞，中性，單數，賓格。' },
                    { id_verbi: 'v20_9', terminus: 'iurandum', analysis_morphologicus: 'Gerundivo.', analysis_morphologicus_en: 'Gerundive.', analysis_morphologicus_zh: '動形詞。' },
                    { id_verbi: 'v20_10', terminus: 'dant', analysis_morphologicus: 'Verbo, 3ª pers. plural, presente, activo, indicativo.', analysis_morphologicus_en: 'Verb, 3rd pers. plural, present, active, indicative.', analysis_morphologicus_zh: '動詞，第三人稱複數，現在時，主動語態，直陳法。' },
                    { id_verbi: 'v20_11', terminus: 'et', analysis_morphologicus: 'Conjunción.', analysis_morphologicus_en: 'Conjunction.', analysis_morphologicus_zh: '連詞。' },
                    { id_verbi: 'v20_12', terminus: 'regno', analysis_morphologicus: 'Sustantivo, neutro, singular, ablativo.', analysis_morphologicus_en: 'Noun, neuter, singular, ablative.', analysis_morphologicus_zh: '名詞，中性，單數，離格。' },
                    { id_verbi: 'v20_13', terminus: 'occupato', analysis_morphologicus: 'Participio, perfecto, pasivo, ablativo, singular, neutro.', analysis_morphologicus_en: 'Participle, perfect, passive, ablative, singular, neuter.', analysis_morphologicus_zh: '分詞，完成時，被動語態，離格，單數，中性。' },
                    { id_verbi: 'v20_14', terminus: 'per', analysis_morphologicus: 'Preposición que rige acusativo.', analysis_morphologicus_en: 'Preposition governing accusative.', analysis_morphologicus_zh: '介詞，支配賓格。' },
                    { id_verbi: 'v20_15', terminus: 'tres', analysis_morphologicus: 'Adjetivo, acusativo, plural.', analysis_morphologicus_en: 'Adjective, accusative, plural.', analysis_morphologicus_zh: '形容詞，賓格，複數。' },
                    { id_verbi: 'v20_16', terminus: 'potentissimos', analysis_morphologicus: 'Adjetivo, superlativo, acusativo, plural.', analysis_morphologicus_en: 'Adjective, superlative, accusative, plural.', analysis_morphologicus_zh: '形容詞，最高級，賓格，複數。' },
                    { id_verbi: 'v20_17', terminus: 'ac', analysis_morphologicus: 'Conjunción.', analysis_morphologicus_en: 'Conjunction.', analysis_morphologicus_zh: '連詞。' },
                    { id_verbi: 'v20_18', terminus: 'firmissimos', analysis_morphologicus: 'Adjetivo, superlativo, acusativo, plural.', analysis_morphologicus_en: 'Adjective, superlative, accusative, plural.', analysis_morphologicus_zh: '形容詞，最高級，賓格，複數。' },
                    { id_verbi: 'v20_19', terminus: 'populos', analysis_morphologicus: 'Sustantivo, masculino, plural, acusativo.', analysis_morphologicus_en: 'Noun, masculine, plural, accusative.', analysis_morphologicus_zh: '名詞，陽性，複數，賓格。' },
                    { id_verbi: 'v20_20', terminus: 'totius', analysis_morphologicus: 'Adjetivo, genitivo, singular.', analysis_morphologicus_en: 'Adjective, genitive, singular.', analysis_morphologicus_zh: '形容詞，屬格，單數。' },
                    { id_verbi: 'v20_21', terminus: 'Galliae', analysis_morphologicus: 'Sustantivo, femenino, singular, genitivo.', analysis_morphologicus_en: 'Noun, feminine, singular, genitive.', analysis_morphologicus_zh: '名詞，陰性，單數，屬格。' },
                    { id_verbi: 'v20_22', terminus: 'sese', analysis_morphologicus: 'Pronombre reflexivo, acusativo.', analysis_morphologicus_en: 'Reflexive pronoun, accusative.', analysis_morphologicus_zh: '反身代名詞，賓格。' },
                    { id_verbi: 'v20_23', terminus: 'potiri', analysis_morphologicus: 'Verbo deponente, infinitivo presente.', analysis_morphologicus_en: 'Deponent verb, present infinitive.', analysis_morphologicus_zh: '異態動詞，現在時不定式。' },
                    { id_verbi: 'v20_24', terminus: 'posse', analysis_morphologicus: 'Verbo, infinitivo presente.', analysis_morphologicus_en: 'Verb, present infinitive.', analysis_morphologicus_zh: '動詞，現在時不定式。' },
                    { id_verbi: 'v20_25', terminus: 'sperant.', analysis_morphologicus: 'Verbo, 3ª pers. plural, presente, activo, indicativo.', analysis_morphologicus_en: 'Verb, 3rd pers. plural, present, active, indicative.', analysis_morphologicus_zh: '動詞，第三人稱複數，現在時，主動語態，直陳法。' }
                ]
            }
        ]
    }
};

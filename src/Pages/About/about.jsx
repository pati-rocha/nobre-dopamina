import { Header } from "../../components/Header/header";
import { MainAboutStyled } from "./about.style";
import imgDuvida from "../../assets/duvida1.png"

export function About() {
    return(
        <>
        <Header text={"O que é o TDAH?"} image={imgDuvida} textAlt={"ilustração de cérebro rosa com lâmpadas amarelas ao seu redor"}  />
       <MainAboutStyled>
        <p>O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) é um transtorno neurobiológico, de causas genéticas, que aparece na infância e freqüentemente acompanha o indivíduo por toda a sua vida. Ele se caracteriza por sintomas de desatenção, inquietude e impulsividade. Ele é chamado às vezes de DDA (Distúrbio do Déficit de Atenção). Em inglês, também é chamado de ADD, ADHD ou de AD/HD.</p>

        <h3>Existe mesmo o TDAH?</h3>
        <p>Ele é reconhecido oficialmente por vários países e pela Organização Mundial da Saúde (OMS). Em alguns países, como nos Estados Unidos, portadores de TDAH são protegidos pela lei quanto a receberem tratamento diferenciado na escola.</p>
        <h3>Não existe controvérsia sobre a existência do TDAH?</h3>
        <p>Não, nenhuma. Existe inclusive um Consenso Internacional publicado pelos mais renomados médicos e psicólogos de todo o mundo a este respeito. Consenso é uma publicação científica realizada após extensos debates entre pesquisadores de todo o mundo, incluindo aqueles que não pertencem a um mesmo grupo ou instituição e não compartilham necessariamente as mesmas idéias sobre todos os aspectos de um transtorno.</p>

        <h3>Por que algumas pessoas insistem que o TDAH não existe?</h3>
        <p>Pelas mais variadas razões, desde inocência e falta de formação científica até mesmo má-fé. Alguns chegam a afirmar que “o TDAH não existe”, é uma “invenção” médica ou da indústria farmacêutica, para terem lucros com o tratamento.</p>
        <p>No primeiro caso se incluem todos aqueles profissionais que nunca publicaram qualquer pesquisa demonstrando o que eles afirmam categoricamente e não fazem parte de nenhum grupo científico. Quando questionados, falam em “experiência pessoal” ou então relatam casos que somente eles conhecem porque nunca foram publicados em revistas especializadas. Muitos escrevem livros ou têm sítios na Internet, mas nunca apresentaram seus “resultados” em congressos ou publicaram em revistas científicas, para que os demais possam julgar a veracidade do que dizem.</p>
        <p>Os segundos são aqueles que pretendem “vender” alguma forma de tratamento diferente daquilo que é atualmente preconizado, alegando que somente eles podem tratar de modo correto.</p>
        <p>Tanto os primeiros quanto os segundos afirmam que o tratamento do TDAH com medicamentos causa conseqüências terríveis. Quando a literatura científica é pesquisada, nada daquilo que eles afirmam é encontrado em qualquer pesquisa em qualquer país do mundo. Esta é a principal característica destes indivíduos: apesar de terem uma “aparência” de cientistas ou pesquisadores, jamais publicaram nada que comprovasse o que dizem.</p>

        <h3>O TDAH é comum?</h3>
        <p>Ele é o transtorno mais comum em crianças e adolescentes encaminhados para serviços especializados. Ele ocorre em 3 a 5% das crianças, em várias regiões diferentes do mundo em que já foi pesquisado. Em mais da metade dos casos o transtorno acompanha o indivíduo na vida adulta, embora os sintomas de inquietude sejam mais brandos.</p>

        <h3>Quais são os sintomas de TDAH?</h3>
        <p>O TDAH se caracteriza por uma combinação de dois tipos de sintomas:</p>
        <p>1) Desatenção</p>
        <p>2) Hiperatividade-impulsividade</p>
        <p>O TDAH na infância em geral se associa a dificuldades na escola e no relacionamento com demais crianças, pais e professores. As crianças são tidas como “avoadas”, “vivendo no mundo da lua” e geralmente “estabanadas” e com “bicho carpinteiro” ou “ligados por um motor” (isto é, não param quietas por muito tempo). Os meninos tendem a ter mais sintomas de hiperatividade e impulsividade que as meninas, mas todos são desatentos. Crianças e adolescentes com TDAH podem apresentar mais problemas de comportamento, como por exemplo, dificuldades com regras e limites.</p>
        <p>Em adultos, ocorrem problemas de desatenção para coisas do cotidiano e do trabalho, bem como com a memória (são muito esquecidos). São inquietos (parece que só relaxam dormindo), vivem mudando de uma coisa para outra e também são impulsivos (“colocam os carros na frente dos bois”). Eles têm dificuldade em avaliar seu próprio comportamento e quanto isto afeta os demais à sua volta. São freqüentemente considerados “egoístas”. Eles têm uma grande freqüência de outros problemas associados, tais como o uso de drogas e álcool, ansiedade e depressão.</p>

        <h3>Quais são as causas do TDAH?</h3>
        <p>Já existem inúmeros estudos em todo o mundo – inclusive no Brasil – demonstrando que a prevalência do TDAH é semelhante em diferentes regiões, o que indica que o transtorno não é secundário a fatores culturais (as práticas de determinada sociedade, etc.), o modo como os pais educam os filhos ou resultado de conflitos psicológicos.</p>
        <p>Estudos científicos mostram que portadores de TDAH têm alterações na região frontal e as suas conexões com o resto do cérebro. A região frontal orbital é uma das mais desenvolvidas no ser humano em comparação com outras espécies animais e é responsável pela inibição do comportamento (isto é, controlar ou inibir comportamentos inadequados), pela capacidade de prestar atenção, memória, autocontrole, organização e planejamento.</p>
        <p>O que parece estar alterado nesta região cerebral é o funcionamento de um sistema de substâncias químicas chamadas neurotransmissores (principalmente dopamina e noradrenalina), que passam informação entre as células nervosas (neurônios).
        Existem causas que foram investigadas para estas alterações nos neurotransmissores da região frontal e suas conexões.</p>
        
        <h3>A) Hereditariedade:</h3>
        <p>Os genes parecem ser responsáveis não pelo transtorno em si, mas por uma predisposição ao TDAH. A participação de genes foi suspeitada, inicialmente, a partir de observações de que nas famílias de portadores de TDAH a presença de parentes também afetados com TDAH era mais freqüente do que nas famílias que não tinham crianças com TDAH. A prevalência da doença entre os parentes das crianças afetadas é cerca de 2 a 10 vezes mais do que na população em geral (isto é chamado de recorrência familial).</p>

        <p>Porém, como em qualquer transtorno do comportamento, a maior ocorrência dentro da família pode ser devido a influências ambientais, como se a criança aprendesse a se comportar de um modo “desatento” ou “hiperativo” simplesmente por ver seus pais se comportando desta maneira, o que excluiria o papel de genes. Foi preciso, então, comprovar que a recorrência familial era de fato devida a uma predisposição genética, e não somente ao ambiente. Outros tipos de estudos genéticos foram fundamentais para se ter certeza da participação de genes: os estudos com gêmeos e com adotados. Nos estudos com adotados comparam-se pais biológicos e pais adotivos de crianças afetadas, verificando se há diferença na presença do TDAH entre os dois grupos de pais. Eles mostraram que os pais biológicos têm 3 vezes mais TDAH que os pais adotivos.</p>
        <p>Os estudos com gêmeos comparam gêmeos univitelinos e gêmeos fraternos (bivitelinos), quanto a diferentes aspectos do TDAH (presença ou não, tipo, gravidade etc…). Sabendo-se que os gêmeos univitelinos têm 100% de semelhança genética, ao contrário dos fraternos (50% de semelhança genética), se os univitelinos se parecem mais nos sintomas de TDAH do que os fraternos, a única explicação é a participação de componentes genéticos (os pais são iguais, o ambiente é o mesmo, a dieta, etc.). Quanto mais parecidos, ou seja, quanto mais concordam em relação àquelas características, maior é a influência genética para a doença. Realmente, os estudos de gêmeos com TDAH mostraram que os univitelinos são muito mais parecidos (também se diz “concordantes”) do que os fraternos, chegando a ter 70% de concordância, o que evidencia uma importante participação de genes na origem do TDAH.</p>
        <p>A partir dos dados destes estudos, o próximo passo na pesquisa genética do TDAH foi começar a procurar que genes poderiam ser estes. É importante salientar que no TDAH, como na maioria dos transtornos do comportamento, em geral multifatoriais, nunca devemos falar em determinação genética, mas sim em predisposição ou influência genética. O que acontece nestes transtornos é que a predisposição genética envolve vários genes, e não um único gene (como é a regra para várias de nossas características físicas, também). Provavelmente não existe, ou não se acredita que exista, um único “gene do TDAH”. Além disto, genes podem ter diferentes níveis de atividade, alguns podem estar agindo em alguns pacientes de um modo diferente que em outros; eles interagem entre si, somando-se ainda as influências ambientais. Também existe maior incidência de depressão, transtorno bipolar (antigamente denominado Psicose Maníaco-Depressiva) e abuso de álcool e drogas nos familiares de portadores de TDAH.</p>

        <h3>B) Substâncias ingeridas na gravidez:</h3>
        <p>Tem-se observado que a nicotina e o álcool quando ingeridos durante a gravidez podem causar alterações em algumas partes do cérebro do bebê, incluindo-se aí a região frontal orbital. Pesquisas indicam que mães alcoolistas têm mais chance de terem filhos com problemas de hiperatividade e desatenção. É importante lembrar que muitos destes estudos somente nos mostram uma associação entre estes fatores, mas não mostram uma relação de causa e efeito.</p>
        
        <h3>C) Sofrimento fetal:</h3>
        <p>Alguns estudos mostram que mulheres que tiveram problemas no parto que acabaram causando sofrimento fetal tinham mais chance de terem filhos com TDAH. A relação de causa não é clara. Talvez mães com TDAH sejam mais descuidadas e assim possam estar mais predispostas a problemas na gravidez e no parto. Ou seja, a carga genética que ela própria tem (e que passa ao filho) é que estaria influenciando a maior presença de problemas no parto.</p>

        <h3>D) Exposição a chumbo:</h3>
        <p>Crianças pequenas que sofreram intoxicação por chumbo podem apresentar sintomas semelhantes aos do TDAH. Entretanto, não há nenhuma necessidade de se realizar qualquer exame de sangue para medir o chumbo numa criança com TDAH, já que isto é raro e pode ser facilmente identificado pela história clínica.</p>

        <h3>E) Problemas Familiares:</h3>
        <p>Algumas teorias sugeriam que problemas familiares (alto grau de discórdia conjugal, baixa instrução da mãe, famílias com apenas um dos pais, funcionamento familiar caótico e famílias com nível socioeconômico mais baixo) poderiam ser a causa do TDAH nas crianças. Estudos recentes têm refutado esta idéia. As dificuldades familiares podem ser mais conseqüência do que causa do TDAH (na criança e mesmo nos pais).</p>

        <p><strong>Problemas familiares podem agravar um quadro de TDAH, mas não causá-lo.</strong></p>

        <h3>F) Outras Causas</h3>
        <p>Outros fatores já foram aventados e posteriormente abandonados como causa de TDAH:</p>
        <ul>
            <li>1. corante amarelo</li>
            <li>2. aspartame</li>
            <li>3. luz artificial</li>
            <li>4. deficiência hormonal (principalmente da tireóide)</li>
            <li>5. deficiências vitamínicas na dieta.</li>
        </ul>
        <p><strong>Todas estas possíveis causas foram investigadas cientificamente e foram desacreditadas.</strong></p>
        
        <p><i>Fonte: site da Associação Brasileira do Déficit de Atenção - ABDA.</i></p>   


       </MainAboutStyled>
       </>

    )
}
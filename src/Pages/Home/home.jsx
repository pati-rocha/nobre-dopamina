import { Header } from "../../components/Header/header.jsx";
import { MainHomeStyled } from "./home.style.js";
import imgHeader from '../../assets/capa.png'
import { Section } from "../../components/Section/section.jsx";
import imgCine from "../../assets/cine.png"
import imgBooks from "../../assets/books.png"
import imgTypes from "../../assets/types.png"
import imgDiagnosis from "../../assets/diagnosis.png"

import { useState } from "react";
import { GoToTop } from "../../components/GoToTop/goToTop.jsx";


export function Home() {

  // const [open, setOpen] = useState(false)
  return (
    <>
    <GoToTop />
      <Header image={imgHeader} />
      <MainHomeStyled>
        <section className="firstSection">
          <h2>Bem vindo(a)!!!</h2>
          <p>
            Nobre Dopamina foi pensado a partir da dificuldade em encontrar referências sobre atendimento médico especializado para diagnóstico do TDAH. Pensando nisso o site foi desenvolvido para a comunidade para ser um ambiente seguro para trocar experiências
            sobre as vivências das pessoas com o transtorno e também para indicações de
            profissionais.
          </p>
          <p>
            Nesse espaço você encontra informações, dicas, sugestões e matérias sobre o
            transtorno.
          </p>
        </section>
       <div className="cardsContainer">
        <Section 
        image={imgCine}
       
        title={"10 filmes e séries sobre inclusão para ver na Netflix e no Prime Video"}>       

        <h3>1. Hoje eu quero voltar sozinho [filme]</h3>
        <p>Baseado em um curta-metragem, Hoje eu quero voltar sozinho é um filme brasileiro. Em sua história, conhecemos Leo, um garoto cego que no auge da sua adolescência está em busca de liberdade e de seu primeiro beijo. Duas coisas que parecem caminhar na mesma direção quando ele conhece Gabriel, um menino novo da escola.</p>

        <h3>2. Como Estrelas na Terra [filme]</h3>
        <p>Distribuído pela Disney em alguns países, Como Estrelas na Terra é um filme indiano. Sua trama gira em torno de um garotinho de nove anos de idade cheio de imaginação, mas que não consegue ir bem na escola. Já tendo reprovado uma vez, ele é mandado para um colégio interno, onde um professor percebe que ele possui dislexia.</p>

        <h3>3. Crip Camp: Revolução pela Inclusão [documentário]</h3>
        <p>Ideal para quem gosta de histórias reais, Crip Camp foi indicado ao Oscar de Melhor Documentário. Por meio de imagens de arquivo e entrevistas, o filme retrata os acontecimentos vividos no início dos anos 70 no acampamento de verão Jened. Destinado a adolescentes e adultos com deficiência, o lugar os tratava de maneira livre e empoderadora, despertando um sentimento de mudança e revolução entre os campistas.</p>

        <h3>4. O Filho Eterno [filme]</h3>
        <p>Filme brasileiro, O Filho Eterno é baseado em um livro homônimo. A produção segue os passos de um escritor que vê sua vida mudar quando seu filho nasce com Síndrome de Down. A partir daí dá-se início a uma longa jornada para que o homem entenda e aceite a condição do garoto, entendendo seu papel para ajudá-lo.</p>  

        <h3>5. Special [série]</h3>   
        <p>Título que não podia faltar nessa lista de séries e filmes sobre inclusão, Special é uma série escrita, produzida e estrelada por Ryan O’Connell. A comédia acompanha um jovem gay com paralisia cerebral, que após contar uma mentira no trabalho decide que é hora de mudar de vida, se tornando independente e buscando uma vida amorosa.</p>

        <h3>6. Atypical [série]</h3>
        <p>Produção original da Netflix, Atypical foi encerrada após sua 4ª temporada. A série gira em torno de um jovem do Ensino Médio que está dentro do espectro do autismo e que enfrenta dificuldades ao dar seus primeiros passos em direção a um relacionamento amoroso, passando por uma jornada de autodescobertas.</p>

        <h3>7. The Fundamentals of Caring [filme]</h3>
        <p>Com participação especial de Selena Gomez, The Fundamentals of Caring segue os passos de um escritor, que após uma tragédia familiar começa a trabalhar como cuidador de um jovem com distrofia muscular, completamente cético e sarcástico sobre a vida. Para ajudá-lo a ver a vida sob outra perspectiva, ele o leva em uma viagem de carro por lugares nada turísticos.</p>

        <h3>8. Manhãs de Setembro [série]</h3>
        <p>Série original do Prime Video, Manhãs de Setembro fala com respeito e delicadeza sobre as dificuldades encontradas por pessoas trans em nossa sociedade. A produção brasileira se debruça sobre Cassandra, mulher trans que há anos luta para ter estabilidade na vida, até que, quando finalmente as coisas parecem dar certo, sua ex-namorada aparece contando que ela é pai de um garoto de 10 anos de idade.</p>

        <h3>9. Amigos Para Sempre [filme]</h3>
        <p>Remake do filme francês Intocáveis, Amigos Para Sempre é uma comédia dramática. Em sua história acompanhamos um milionário tetraplégico, que para surpresa de todos decide contratar como seu assistente um homem em liberdade condicional, extremamente simpático. Completamente opostos, eles se dão bem de uma estranha maneira, aprendendo valiosas lições um com o outro.</p>

        <h3>10. Sound of Metal [filme]</h3>
        <p>Indicado a Melhor Filme do Oscar 2021, Sound of Metal foi lançado no Festival de Cinema de Toronto. Na trama, um baterista de heavy metal que sofreu uma súbita perda auditiva descobre que sua condição só tende a piorar. Apoiado por sua namorada, ele procura ajuda em uma comunidade para surdos, tentando aprender a viver em um mundo desconhecido.</p>

        <p><i>Fonte: site Tecnoblog.net </i></p>
       </Section> 

       <Section 
       image={imgBooks}
       title={"5 livros que relatam a experiência com TDAH"} >
        <h3>1.No Mundo da Lua, por Paulo Mattos.</h3>
        <p>Escrito pelo médico psiquiatra e brasileiro, mestre e doutor em Psiquiatria e professor da Universidade Federal do Rio de Janeiro (UFRJ), Paulo Mattos, o livro aborda aspectos sobre sintomas, diagnóstico, causas e tratamento do Transtorno do Déficit de Atenção com Hiperatividade (TDAH) em crianças, adolescentes e adultos.</p>

        <h3>2.Mentes Inquietas, por Ana Beatriz Barbosa Silva.</h3>
        <p>Neste livro, a psiquiatra Ana Beatriz Barbosa Silva desmitifica o Transtorno do Déficit de Atenção com Hiperatividade (TDAH) apresentando não apenas sintomas, mas como identificá-los e saber a hora de procurar ajuda profissional.</p>

        <h3>3.TDAH – Autobiografia de um Portador do Transtorno do Déficit de Atenção, por Marcus Deminco.</h3>
        <p>Este é um relato autobiográfico feito por um jovem portador do Transtorno do Déficit de Atenção com Hiperatividade (TDAH). O livro também conta como o autor descobriu o TDAH, as adversidades mais frequentes decorrentes da Dislexia, depoimentos emocionantes de outras pessoas diagnosticadas e muito mais.</p>

        <h3>4.O Menino que Tinha Medo de Errar, por Taubman Andrea Viviana.</h3>
        <p>O livro, ilustrado por Carrossine Camila, conta a história de Pedro, um garoto que prefere passar os dias sozinho, confinado em sua casa em vez de aproveitar a companhia dos amigos, porque tem medo de fazer alguma coisa errada nas brincadeiras.</p>

        <h3>5.TDAH em Quadrinhos, Mauren Striebel.</h3>
        <p>Um livro educativo e técnico que poderá ajudar familiares e amigos na compreensão Transtorno do Déficit de Atenção com Hiperatividade (TDAH) através das histórias em quadrinhos sobre o dia a dia de Neco e Juba.</p>

        <p><i>Fonte: site Vale Mais Saúde</i></p>        
       </Section>

       <Section
       image={imgTypes}
       title={"Dicas e estratégias para lidar com o TDAH"}>
        <p>Por mais difícil que seja lidar com o TDAH na vida adulta, algumas estratégias podem ser úteis e, bem utilizadas, fazem com que o TDAH não seja o fim do mundo, como muitas pessoas pensam. Essas estratégias podem ser utilizadas tanto no trabalho quanto na vida pessoal do adulto com TDAH. Estas pessoas costumam esquecer de pagar as contas, perdem as chaves com facilidade, não se lembram de reuniões e outros compromissos, ou, quando lembram, geralmente alguma coisa fica pendente ou sem finalização. Isto não quer dizer que uma pessoa com TDAH seja ineficiente ou incapaz de realizar um trabalho com competência. Se ela estiver consciente dos seus pontos fracos, seus pontos fortes, seguindo o seu tratamento de maneira correta (medicação/psicoterapia), as estratégias podem ajudá-la no dia-a-dia, fazendo com que o adulto com TDAH possa ter uma vida de sucesso, tanto na sua vida pessoal quanto profissional.</p>

        <h3>1 – Lidando com o estresse e a alteração de humor:</h3>
        <p>Devido à impulsividade, desorganização e distração, o adulto com TDAH frequentemente batalha para mudar um círculo vicioso com poucas horas de sono, pouco (ou nenhum) exercício físico e péssimos hábitos alimentares – e tudo isso pode acentuar os sintomas do TDAH.</p>
        <ul>
          <li><strong>Pratique exercícios</strong> – Indicado para todos em geral, as pessoas que tem TDAH podem se beneficiar ainda mais. Alivia o estresse, melhora o humor, acalma a mente e ainda ajuda a gastar o excesso de energia que as pessoas com TDAH tem. </li>
          <li><strong>Durma bastante </strong> – e durma bem! Poucas horas de sono aumentam os sintomas do TDAH, diminuindo a capacidade de manter o foco durante dia. Para isso, evite tomar cafeína antes de dormir, mantenha uma rotina à noite e evite exercícios por até uma hora antes de ir dormir.</li>
          <li><strong>Alimente-se de maneira correta</strong> – Comer bem ajuda a diminuir a distração, hiperatividade e os níveis de estresse. Pequenas porções durante o dia, ingerir pouco açúcar, menos carboidrato e mais proteínas podem ajudar a reduzir os sintomas do TDAH.</li>
        </ul>

        <h3>2 – Como se organizar e evitar a desordem diária</h3>
        <p>A distração e a falta de atenção tornam a vida de um adulto com TDAH um verdadeiro desafio, deixando-o sobrecarregado. As dicas a seguir, foram elaboradas para ajudar o pessoa com TDAH a organizar melhor a sua vida.</p>
        <ul>
          <li><strong>Crie espaço </strong>– Verifique diariamente o que você usará e o que deverá ficar guardado. Defina lugares para chaves, contas e outros itens que se perdem facilmente. E jogue fora tudo o que não for necessário!</li>
          <li><strong>Use uma agenda </strong>– O uso da agenda ajuda a lidar e organizar os seus horários e compromissos. É como andar de bicicleta – a prática leva a perfeição. Quanto mais você utiliza, mais você criará padrões de comportamento organizado.</li>
          <li><strong> Faça listas </strong>– Crie o hábito de fazer listas e anotar tudo o que for importante, como tarefas, compromissos, projetos, deadlines, etc. Caso esteja usando uma agenda, mantenha suas anotações junto. O planejamento é condição necessária para o bom desempenho das pessoas com TDAH.</li>
          <li><strong> Faça agora!</strong>– Para evitar o esquecimento, procrastinação e desordem, comuns em adultos com TDAH, faça o que tiver que ser feito na hora, evitando deixar ‘’para depois’’. Tarefas como responder a um e-mail importante, limpar sua bagunça, retornar uma ligação, preparar uma apresentação não podem ficar para ‘’o dia seguinte’’.</li>
          <li><strong> Estabeleça um sistema de arquivamento</strong>– Use divisores, ou então separe pelo tipo de documento (receitas, contas, fichas de inscrição, etc.). Etiquetar ou colorir seus arquivos também são ótimas estratégias.</li>
          <li><strong>Dedique um tempo do seu dia para e-mails </strong>– Separe alguns minutos do seu dia para checar seus e-mails, evitando abrir sua caixa de correspondência de 5 em 5 minutos. Responda, arquive ou apague na hora, dependendo do caso.</li>        
        </ul>

        <h3>3 – Administrando seu tempo e não perdendo seus compromissos</h3>

        <p><i>Fonte: site da Associação Brasileira do Déficit de Atenção - ABDA</i></p>


       </Section>

       <Section
       image={imgDiagnosis}
       title={"Como é feito o diagnósticos do TDAH?"}>

        <p>O diagnóstico do TDAH é clínico, realizado por meio de avaliações médicas, educacionais e psicológicas. Dessa forma, envolve uma equipe multidisciplinar que, em conjunto com os pais da criança, encontram coerência entre os comportamentos e os sintomas do TDAH.</p>
        <p>Os sinais que caracterizam o TDAH podem estar presentes em qualquer pessoa em diferentes graus – especialmente em crianças. No entanto, em pessoas que possuem a condição, estes sinais se manifestam simultaneamente e com constância. Para fazer o diagnóstico de TDAH de maneira correta, é necessário realizar uma avaliação criteriosa em diferentes aspectos da vida da criança.</p>

        <h3>São feitas 3 avaliações principais:</h3>

        <p>Avaliação médica – os sintomas de TDAH são identificados e o médico analisa quais condições podem ter contribuído para o desenvolvimento deles. Essa avaliação inclui a pesquisa do histórico de exposição pré-natal do bebê a alguns fatores, tais como: substâncias químicas, como remédios, álcool e tabaco ingeridos pela mãe;complicações ou infecções perinatais; infecções do sistema nervoso central; traumatismo cranioencefálico;doença cardíaca; falta de apetite e/ou alimentação seletiva; histórico familiar de TDAH.</p>

        <p>Histórico familiar de TDAH. Avaliação do desenvolvimento – que permite determinar o início e a evolução dos sinais e sintomas. Essa avaliação usa escalas específicas do TDAH, com verificação de marcos de desenvolvimento e da linguagem da criança. A análise é feita tanto pelas famílias quanto por funcionários de escolas, o que possibilita a avaliação em diferentes contextos.</p>

        <p> <strong>Atenção: Essas escalas não devem ser usadas isoladamente para fazer um diagnóstico.</strong></p>
        
        <p>Avaliação educacional – é aquela em que é possível documentar de que maneira os sinais e sintomas podem influenciar o desempenho educacional.</p>

        <p>Com base nessas três avaliações, familiares, educadores e equipe médica identificam os sintomas presentes no desenvolvimento da criança. Para firmar o diagnóstico de TDAH, é preciso que ela apresente seis ou mais sinais de desatenção, hiperatividade e impulsividade.</p>

        <p>Além disso, é necessário que os sintomas de TDAH: Estejam presentes muitas vezes por seis meses ou mais;
        Ocorram em pelo menos dois ambientes diferentes, como a casa e a escola, por exemplo; Se manifestem antes dos 12 anos de idade; Interfiram no desempenho da pessoa em atividades em casa, na escola ou outro ambiente.</p>

        <p><i>Fonte: site Cellera Farma.</i></p>


       </Section>

       </div>


      </MainHomeStyled>
    </>
  );
}

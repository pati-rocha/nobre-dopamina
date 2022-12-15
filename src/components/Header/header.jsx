import { HeaderStyled } from './header.style'

export function Header({text,image,textAlt}) {
    return(
        <HeaderStyled>
            <h2>{text}</h2>
            <div>
            <img src={image} alt={textAlt} />
            </div>
        </HeaderStyled>
    )
}

// const teweet = [
//     {
//         name: "Ligia2020",
//         city: "João Pessoa",
//         state: "PB",
//         profissional: {
//             nome: "Fulano de Tal",
//             contato: "83999999999",
//             especialidade: "Neurologia"
//         },
//         tweet: [
//             "Este é um comentário sobre TDAH",
//             "Este é outro comentário sobre TDAH"
//         ]
//     },
// ]
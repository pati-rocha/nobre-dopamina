import imgAvatar from "../../assets/avatarMensage.png"
import { ContainerStyled } from "./container.style"


export function Container({uf,city,contact, content,created,expertise,plan,professional}){
    return(
        <ContainerStyled>      
        <div className="containerAvatar">
            <img src={imgAvatar}/>
            <p>Kavaii Anime</p>
            <p>{city} - {uf}</p>
            <p>{created}</p>         
        </div>
        <div className="containerText">
            <p>{professional}</p>
            <p>{expertise}</p>
            <p>{contact}</p>
            <p>Aceita plano de saúde: {plan}</p>
            <p>{content}</p>
        </div>

        </ContainerStyled>
    )
}
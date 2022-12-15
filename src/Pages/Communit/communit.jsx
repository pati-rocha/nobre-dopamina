
import imgCommunit from "../../assets/communit2.png"
import { Form } from "../../components/Form/form";
import { Header } from "../../components/Header/header";
import {MainCommunitStyled } from "./communit.style";



export function Communit(){
    return(
       <>
       <Header image={imgCommunit} text={"Comunidade"}/>

       <MainCommunitStyled>
        <section>
            <p>Que bom que você está aqui na nossa comunidade! Aqui você vai poder compartilhar suas experiências e indicações dos profissionais que você conhece.</p>
            <p>Faça login ou cadastre-se para postar seu comentário! </p>

                
           <Form/>
        
        
        </section>
       </MainCommunitStyled>

      
       
       
       </>
    )
}
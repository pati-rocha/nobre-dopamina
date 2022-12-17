
import imgCommunit from "../../assets/communit2.png"
import { Container } from "../../components/Container/container";
import { Header } from "../../components/Header/header";
import { Form } from "../../components/Form/form"
import {MainCommunitStyled } from "./communit.style";


export function Communit(){
  
    return(
       <>
       <Header image={imgCommunit} />

       <MainCommunitStyled>
        <section className="firstSection">
            <h2>Compartilhe sua história...</h2>
            <p>Que bom que você está aqui na nossa comunidade!</p>
            <p> Aqui você vai poder compartilhar suas experiências e indicações dos profissionais que te acompanham nessa jornada.</p>
                  
        </section>        

        <Form />
           
       </MainCommunitStyled>     
       
       
       </>
    )
}
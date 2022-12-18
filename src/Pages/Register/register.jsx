import { FormStyled, MainLoginStyled, } from "./register.style";
import imgLogin from "../../assets/avatarLogin.png";
import { toast } from "react-toastify";

import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { auth } from "../../services/firebaseConfig"

export function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth); 

    function handleSignIn(e) {
        e.preventDefault();
        createUserWithEmailAndPassword( email, password);
        toast.success("Cadastrado com sucesso!")       
    } 

    return (
        <MainLoginStyled>
        <img src={imgLogin} alt="ilustração de um boneco com cadeado fechado" />
        <h2>Fazer cadastro</h2>
        <p>Faça aqui o login para adicionar seu comentário.</p>
  
        <FormStyled onSubmit={()=>{}}>
          <input 
          type="email" 
          placeholder="Digite seu email"         
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          
          />
         
          <input
            type="password"
            minLength={6}
            placeholder="Digite sua senha"
            autoComplete="on"          
            name="password"
            onChange={(e) => setPassword(e.target.value)}
           
          />
         
  
          <button type="submit" onClick={handleSignIn}>Cadastrar</button>
  
      
  
        </FormStyled>
      </MainLoginStyled>
    )
}
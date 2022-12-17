import { FormStyled, MainLoginStyled, RegisterStyled} from "./login.style";
import imgLogin from "../../assets/avatarLogin.png";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { auth } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Campo obrigatório!"),
  password: yup.string().required("Campo obrigatório!").max(6, "Mínimo 6 caracteres")
})

export function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
    resolver:yupResolver(schema)
  });

  
  const navigate = useNavigate();

  const onSubmit = data => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      toast.success("Login realizado com sucesso!")
      navigate("/comunidade", {replace:true})
    })
    .catch(() => {
      toast.error("Erro ao tentar fazer login!")
      console.log("erro de login");
    })
    
    reset()
  }

  return (
    <MainLoginStyled>
      <img src={imgLogin} alt="ilustração de um boneco com cadeado fechado" />
      <h2>Fazer login</h2>
      <p>Faça aqui o login para adicionar seu comentário.</p>

      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <input 
        type="email" 
        placeholder="Digite seu email"         
        name="email"
        {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          minLength={6}
          placeholder="Digite sua senha"
          autoComplete="on"          
          name="password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Entrar</button>

        <RegisterStyled>
          <p>Você ainda não tem conta?</p>
          <Link to={"/cadastro"}>Crie sua conta aqui</Link>
        </RegisterStyled>

      </FormStyled>
    </MainLoginStyled>
  );
}

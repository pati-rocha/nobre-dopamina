import { FormStyled } from "./form.style";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { db } from "../../services/firebaseConfig"; 
import{
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc
} from "firebase/firestore"
import { Container } from "../Container/container";

const schema = yup.object().shape({
  uf: yup.string().required("Campo obrigatório!"),
  city: yup.string().required("Campo obrigatório!"),
  expertise: yup.string().required("Campo obrigatório!"),
  plan: yup.string().required("Campo obrigatório!"),
  professional: yup.string().required("Campo obrigatório!"),
  contact: yup
    .string()
    .required("Campo obrigatório!")
    .min(11, "Mínimo 11 caracteres"),
  content: yup.string().required("Campo obrigatório!").max(800, "Máximo 800 caracteres "),
  checkbox: yup
    .boolean()
    .oneOf([true], "Você deve aceitar os termos e condições!"),
});

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {

    data.created = new Date().toLocaleDateString()

    addDoc(collection(db, "posts"), data)
     .then( () => {
      toast.success("Enviado com sucesso!")
      reset();
     })
     .cath((error) => {
      console.log("errro ao enviar", + error);
      toast.error("Ops erro ao enviar")
     })    
  };

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [posts, setPosts] = useState([]);
  const [termoBuscado, setTermoBuscado] = useState("");
  const [postsFiltrados, setPostsFiltrados] = useState([]);

   
  function handleSearch(e) {
    setTermoBuscado(e.target.value);
  }

  useEffect(() => {
    const filtered = posts.filter((post) => {
      return post.uf.includes(termoBuscado.toLowerCase());
    });
    setPostsFiltrados(filtered);

  }, [])


  useEffect( () => {

    const postsRef = collection(db, "posts")
    const queryRef = query( postsRef, orderBy("created","asc"))

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          created:doc.data().created,
          uf: doc.data().uf,
          city:doc.data().city,
          expertise:doc.data().expertise,
          plan:doc.data().plan,
          professional:doc.data().professional,
          contact:doc.data().contact,
          content:doc.data().content       

        })
      })
      setPosts(lista);
    })

  },[])

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setUfs(response.data);        
      });
  }, []);

  useEffect(() => {
    if(selectedUf !== "") {
      axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then((response) => {
        setCities(response.data);             
      });
    }
    
  }, [selectedUf]);

  function handleSelectedUf(ufSigla){ 
    setSelectedUf(ufSigla);
  }
  
  function handleSelectedCity(city){
    setSelectedCity(city);
  }
  return (
    <>
      
     {posts.map( (item,index) => (
      <Container 
      key={index}
      uf={item.uf}
      city={item.city}
      contact={item.contact}
      content={item.content}
      created={item.created}
      expertise={item.expertise}
      plan={item.plan}
      professional={item.professional}
      />
    ))}
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Estado:</label>
        <select
          className="input"
          type="text"
          name="uf"
          id="uf"          
          {...register("uf", {onChange:(e) => handleSelectedUf(e.target.value)})}
        >
          <option></option>
          {ufs.map(uf => (
            <option key={uf.id} value={uf.sigla}> 
            {uf.nome}
            </option>
          ))}
        </select>
      </div>
      <p>{errors.uf?.message}</p>

      <div>
        <label>Cidade:</label>
        <select
          className="input"
          type="text"
          name="city"
          id="city"
          {...register("city", {onChange:(e) => handleSelectedCity(e.target.value)})}
        >
          <option></option>
          {cities.map(city => (
            <option key={city.id} value={city.nome}> 
            {city.nome}
            </option>
          ))}
        </select>
      </div>
      <p>{errors.city?.message}</p>

      <div>
        <label>Especialidade:</label>
        <select
          className="input"
          type="text"
          id="especialidades"
          name="expertise"
          {...register("expertise")}
        >
          <option></option>
          <option value={"Neurologia"}> Neurologia </option>
          <option value={"Psicologia"}> Psicologia </option>
          <option value={"Psiquiatria"}> Psiquiatria</option>
        </select>
      </div>
      <p>{errors.expertise?.message}</p>

      <div>
        <label>Aceita plano de saúde?</label>
        <select className="input" id="plano" name="plan" {...register("plan")}>
          <option></option>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
      </div>
      <p>{errors.plan?.message}</p>

      <div>
        <label>Nome do profissional:</label>
        <input
          className="input"
          type="text"
          minLength={8}
          maxLength={40}
          placeholder="Nome do profissional"
          name="professional"         
          {...register("professional")}
        />
      </div>
      <p>{errors.professional?.message}</p>

      <div>
        <label>Contato:</label>
        <input
          className="input"
          type="tel"
          maxLength={11}
          placeholder="( )_ _ _ _ _ _ _ _ _"
          name="contact"
          {...register("contact")}
        />
      </div>
      <p>{errors.contact?.message}</p>

      <div className="divTextarea">
        <label>Comentário:</label>
        <textarea
          placeholder="Deixe sua mensagem..."
          rows="8"
          minLength={10}
          maxLength={800}
          name="content"
          {...register("content")}
        ></textarea>
      </div>
      <p>{errors.content?.message}</p>

      <div className="divCheckbox">
        <input
          className="checkbox"
          type="checkbox"
          name="checkbox"
          {...register("checkbox")}
        />
        <label>
          Concordo com a Política de Privacidade e com o Termo de Uso.
        </label>
      </div>
      <p>{errors.checkbox?.message}</p>
      <button>Enviar</button>          
     
    </FormStyled>

   
    </>
  );
}

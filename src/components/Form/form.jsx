import { FormStyled } from "./form.style";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

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
  content: yup.string().required("Campo obrigatório!"),
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
    console.log(data);
    reset();
  };

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setUfs(response.data);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then((response) => {
        setCities(response.data);
        console.log(response.data);      
      });
  }, [selectedUf]);

  function handleSelectedUf(e){
    const uf = e.target.value;    
    setSelectedUf(uf);
  }
  
  function handleSelectedCity(e){
    const city = e.target.value;
    setSelectedCity(city);
  }
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Estado:</label>
        <select
          className="input"
          type="text"
          name="uf"
          id="uf"
          onChange={handleSelectedUf}
          {...register("uf")}
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
          value={selectedCity}
          onChange={handleSelectedCity}
          {...register("city")}
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
          <option value={"neurologia"}> Neurologia </option>
          <option value={"psiquiatria"}> Psicologia </option>
          <option value={"psicologia"}> Psiquiatria</option>
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
          Declaro que li, concordo e estou ciente das aplicações legais
          descritas no código de conduta.
        </label>
      </div>
      <p>{errors.checkbox?.message}</p>

      <button>Enviar</button>
    </FormStyled>
  );
}

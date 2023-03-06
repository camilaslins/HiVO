import { useState } from "react";
import "./app.css"
import {FormInput} from "./components/FormInput";

export const App = () => {
  const [values, setValues] = useState({
    nome: "",
    datanasc: "",
    rg: "",
    cpf: "",
    nacionalidade: "",
    genero: "",
    cep: "",
    endereco: "",
    num: "",
    bairro: "",
    cidade: "",
    estado: "",
    tel: "",
    email: "",
    senha: "",
  });

  const inputs = [
    {
      id:1,
      name:"nome",
      type:"text",
      placeholder:"seu nome",
      label:"Nome Completo",
      className:'nome',
    },
    {
      id:2,
      name:"datanasc",
      type:"date",
      placeholder:"00/00/0000",
      label:"Data de nascimento",
      className:'nasc',
    },
    {
      id:3,
      name:"rg",
      type:"text",
      placeholder:"000000-0",
      label:"RG",
      className:'rg',
    },
    {
      id:4,
      name:"cpf",
      type:"text",
      placeholder:"000.000.000-00",
      label:"CPF",
      className:'cpf',
    },
    {
      id:5,
      name:"nacionalidade",
      type:"text",
      placeholder:"exemplo",
      label:"Nacionalidade",
      className:'nacionalidade',
    },
    {
      id:6,
      name:"genero",
      type:"text",
      placeholder:"exemplo",
      label:"Identidade de Gênero",
      className:'gen',
    },
    {
      id:7,
      name:"cep",
      type:"text",
      placeholder:"00000-000",
      label:"CEP",
      className:'cep',
    },
    {
      id:8,
      name:"endereco",
      type:"text",
      placeholder:"exemplo",
      label:"Endereço",
      className:'endereco',
    },
    {
      id:9,
      name:"num",
      type:"text",
      placeholder:"000",
      label:"Número",
      className:'num',
    },
    {
      id:10,
      name:"bairro",
      type:"text",
      placeholder:"exemplo",
      label:"Bairro",
      className:'bairro',
    },
    {
      id:11,
      name:"cidade",
      type:"text",
      placeholder:"exemplo",
      label:"Cidade",
      className:'cidade',
    },
    {
      id:12,
      name:"estado",
      type:"text",
      placeholder:"exemplo",
      label:"Estado",
      className:'estado',
    },
    {
      id:13,
      name:"tel",
      type:"text",
      placeholder:"(00)00000-0000",
      label:"Telefone",
      className:'tel',
    },
    {
      id:14,
      name:"email",
      type:"text",
      placeholder:"exemplo@hotmail.com",
      label:"E-mail",
      className:'email',
    },
    {
      id:15,
      name:"senha",
      type:"password",
      placeholder:"exemplo",
      label:"Senha",
      className:'senha',
    },
  ]

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Seguinte</button>
      </form>
    </div>
  )
}



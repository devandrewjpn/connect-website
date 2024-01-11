import { useEffect, useState } from "react";
import { statesApi } from "../../../lib/axios";

import axios from "axios";
import { Resend } from 'resend';


const ContactForm = () => {

  const resend = new Resend('re_DkF4im7L_8HLqMEWU1sD9GzFHvP7HYQfn');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    Nome: "",
    Email: "",
    Telefone: "",
    Estado: "",
    Cidade: "",
    Meio_de_contato: "",
    Horario_para_contato: "",
    Marca_do_veiculo: "",
    Modelo_do_veiculo: "",
    Ano_do_veiculo: "",
  })

  const fetchStates = async () => {
    const response = await statesApi.get('/')
    setStates(response.data)
  }

  useEffect(() => {
    fetchStates()
  }, [])

  const fetchCities = async (uf) => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    setCities(response.data)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if(event.target.tagName === 'SELECT' && event.target.name === 'Estado'){
      if(event.target.value !== 'none')
      fetchCities(event.target.value)
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else if(event.target.tagName === 'SELECT' && event.target.name === 'Cidade'){
      if(event.target.value !== 'none')
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else if(event.target.tagName === 'SELECT' || event.target.name === 'Meio_de_contato' || event.target.name === 'Horario_para_contato') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else if(event.target.tagName === 'INPUT') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const testResend = () => {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'yuutoandrew.jpn@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    // testResend()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls py-4">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Nome:*"
              name="Nome"
              value={formData.Nome}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder="Email:*"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group-meta form-group mb-20">
            <input
              type="telefone"
              placeholder="Telefone:*"
              name="Telefone"
              value={formData.Telefone}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group-meta form-group mb-15">
            <select name="Estado" id="" onChange={handleChange} required>
              <option value="none">Selecione um estado</option>
              {states.map(state => {
                return (
                  <option key={state.id} value={state.sigla}>{state.nome}</option>
                )
              })}
            </select>
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group-meta form-group mb-15">
            <select name="Cidade" id="" onChange={handleChange} required>
              <option value="none">Selecione uma cidade</option>
              {cities.map(city => {
                return (
                  <option key={city.id} value={city.sigla}>{city.nome}</option>
                )
              })}
            </select>
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <select name="Meio_de_contato" id="" onChange={handleChange} required>
              <option value="">Selecione um meio de contato</option>  
              <option value="Ligação">Ligação</option>  
              <option value="WhatsApp">WhatsApp</option>  
            </select>
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <select name="Horario_para_contato" id="" onChange={handleChange} required>
              <option value="">Selecione um horário para contato</option>
              <option value="Manhã">Manhã</option>  
              <option value="Tarde">Tarde</option>  
              <option value="Noite">Noite</option>  
            </select>
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group-meta form-group mb-20">
            <input
              type="marca"
              placeholder="Marca do veículo:*"
              name="Marca_do_veiculo"
              value={formData.Marca_do_veiculo}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group-meta form-group mb-20">
            <input
              type="modelo"
              placeholder="Modelo do veículo:*"
              name="Modelo_do_veiculo"
              value={formData.Modelo_do_veiculo}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group-meta form-group mb-20">
            <input
              type="anoveiculo"
              placeholder="Ano do veículo:*"
              name="Ano_do_veiculo"
              value={formData.Ano_do_veiculo}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase"
          >
            Enviar mensagem
          </button>
        </div>
      </div>

    </form>
  );
};

export default ContactForm;

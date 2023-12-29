import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Nome:*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder="Email:*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="telefone"
              placeholder="Telefone:*"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <textarea
              placeholder="Mensagem:*"
              name="message"
              value={formData.message}
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

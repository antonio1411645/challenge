import { useState } from "react";

export default function RegisterForm({ onContinue }) {
  const [formData, setFormData] = useState({
    nombre: "", 
    tipoDocumento: "DNI",
    documento: "",
    phone: "",
    privacy: false,
    commercials: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.privacy) {
      alert("Debes aceptar la Política de Privacidad.");
      return;
    }
    if (!formData.commercials) {
      alert("Debes aceptar la Política de Comunicaciones Comerciales.");
      return;
    }

    onContinue(formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <div className="form-row">
        <select
          name="tipoDocumento"
          value={formData.tipoDocumento}
          onChange={handleChange}
        >
          <option value="DNI">DNI</option>
          <option value="CE">Carné de extranjería</option>
        </select>

        <input
          type="text"
          name="documento"
          placeholder="Número de documento"
          value={formData.documento}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Celular"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label className="checkbox">
        <input
          type="checkbox"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
        />
        Acepto la Política de Privacidad
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          name="commercials"
          checked={formData.commercials}
          onChange={handleChange}
        />
        Acepto la Política de Comunicaciones Comerciales
      </label>

      <p className="terms-note">
        <a href="/terminos" target="_blank" rel="noopener noreferrer">
          Aplican Términos y Condiciones
        </a>
      </p>

      <button type="submit" className="btn">
        Cotiza aquí
      </button>
    </form>
  );
}

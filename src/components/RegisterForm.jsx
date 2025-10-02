import { useState } from "react";

export default function RegisterForm({ onContinue }) {
  const [formData, setFormData] = useState({
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
      alert("Acepto la Politica de Privacidad");
      return;
    }
    if (!formData.commercials) {
      alert("Acepto la Politica Comunicaciones Comerciales");
      return;
    }
    onContinue();
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
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
          checked={formData.privacy}
          onChange={handleChange}
        />
        Acepto la Politica Comunicaciones Comerciales
      </label>
      <p className="terms-note">
     <a href="/terminos" target="_blank">Aplican Términos y Condiciones</a>
</p>
      <button type="submit" className="btn">
        Cotiza aquí
      </button>
    </form>
  );
}
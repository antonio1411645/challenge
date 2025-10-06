import { usePlan } from "../context/PlanContext";
import RegisterForm from "../components/RegisterForm";
import logo from "../assets/logo.svg";
import familia from "../assets/familia.svg"

export default function Register({ onContinue }) {
  const { setUserData, setSelectedOption } = usePlan(); 

  const handleContinue = (formData) => {
    setUserData(formData);          
    setSelectedOption("me");        
    onContinue();                   
  };

  return (
    <div className="register-page">
      <header className="register-header">
        <img src={logo} alt="Rimac logo" className="logo" />
        <div className="phone">
          <span>¡Compra por este medio!</span>
          <strong>(01) 411 6001</strong>
        </div>
      </header>

      <div className="register-body">
        <div className="register-page__image">
          <img src={familia} alt="Seguro ilustración" />
        </div>

        <div className="register-page__content">
          <main className="register-main">
            <div className="tag">Seguro Salud Flexible</div>

            <h1 className="title">Creado para ti y tu familia</h1>
            <p className="subtitle">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>

            <RegisterForm onContinue={handleContinue} />
          </main>
        </div>
      </div>
    </div>
  );
}

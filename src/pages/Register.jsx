import RegisterForm from "../components/RegisterForm";

export default function Register({ onContinue }) {
  return (
    <div className="register-page">
     <header className="register-header">
          <img src="/logo.svg" alt="Rimac logo" className="logo" />
          <div className="phone">
            <span>¡Compra por este medio!</span>
            <strong>(01) 411 6001</strong>
          </div>
        </header>
        <div className="register-body">
      <div className="register-page__image">
        <img src="/familia.svg" alt="Seguro ilustración" />
      </div>

        <div className="register-page__content">
        <main className="register-main">
          <div className="tag">Seguro Salud Flexible</div>

          <h1 className="title">
            Creado para ti y tu familia
          </h1>
          <p className="subtitle">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoria. 100% online.
          </p>

          <RegisterForm onContinue={onContinue} />
        </main>
      </div>
      </div>
    </div>
  );
}
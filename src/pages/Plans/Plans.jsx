import { usePlan } from "../../context/PlanContext";
import left from "../../assets/arrow-left.svg";
import parami from "../../assets/parami.svg";
import alguienmas from "../../assets/alguienmas.svg";
import iconocasa from "../../assets/iconocasa.svg";
import iconohospital from "../../assets/iconohospital.svg";
import logo from "../../assets/logo.svg";
import iconosombra from "../../assets/iconosombra.svg";
import "./Plans.scss";

export default function Plans() {
  const { 
    userData, 
    selectedOption, 
    setSelectedOption, 
    selectedPlan, 
    setSelectedPlan 
  } = usePlan();

  const primerNombre = userData?.nombre ? userData.nombre.split(" ")[0] : "";

  const plans = [
    {
      id: 1,
      title: "Plan en Casa",
      price: "S/ 39",
      icon: iconocasa,
      benefits: [
        "Médico general a domicilio por S/ 20 y medicinas cubiertas al 100%",
        "Videoconsulta y orientación telefónica al 100%",
        "Indemnización de S/ 300 en caso de hospitalización por más de un día"
      ]
    },
    {
      id: 2,
      title: "Plan en Casa y Clínica",
      price: "S/ 99",
      icon: iconohospital,
      benefits: [
        "Consultas en clínica para cualquier especialidad",
        "Medicinas y exámenes derivados cubiertos al 80%",
        "Atención médica en más de 200 clínicas del país"
      ]
    },
    {
      id: 3,
      title: "Plan en Casa + Chequeo",
      price: "S/ 49",
      icon: iconocasa,
      benefits: [
        "Chequeo preventivo general presencial o virtual",
        "Acceso a vacunas del MINSA en centros privados",
        "Incluye todos los beneficios del Plan en Casa"
      ]
    }
  ];

  return (
    <div className="plans-page">
      <header className="plans-header">
        <img src={logo} alt="Rimac logo" className="logo" />
        <div className="phone">
          <span>¡Compra por este medio!</span>
          <strong>(01) 411 6001</strong>
        </div>
      </header>
      
      <div className="plans-steps">
        <div className={`step ${!selectedPlan ? "active" : "done"}`}>
          <span className="circle">1</span>
          <span className="label">Planes y coberturas</span>
        </div>

        <div className={`step-line ${selectedPlan ? "active" : ""}`}></div>

        <div className={`step ${selectedPlan ? "active" : ""}`}>
          <span className="circle">2</span>
          <span className="label">Resumen</span>
        </div>
      </div>

      <main className="plans-main">
        {!selectedPlan ? (
          <>
            <h1 className="title">¡Hola {primerNombre || "!"}!</h1>
            <p className="subtitle">¿Para quién deseas cotizar?</p>

            <div className="plans-filters">
              <div
                className={`option-card ${selectedOption === "me" ? "active" : ""}`}
                onClick={() => setSelectedOption("me")}
              >
                <img src={parami} alt="Para mí" className="option-icon" />
                <h3>Para mí</h3>
                <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
              </div>

              <div
                className={`option-card ${selectedOption === "family" ? "active" : ""}`}
                onClick={() => setSelectedOption("family")}
              >
                <img src={alguienmas} alt="Para alguien más" className="option-icon" />
                <h3>Para alguien más</h3>
                <p>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
              </div>
            </div>

            {selectedOption && (
              <div className="plans-list">
                {plans.map((plan) => (
                  <div className="plan-card" key={plan.id}>
                    <div className="plan-card-header">
                      <h2>{plan.title}</h2>
                      <img src={plan.icon} alt={plan.title} />
                    </div>

                    <p className="cost-label">Costo del plan</p>
                    <div className="price">{plan.price} al mes</div>

                    <ul>
                      {plan.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>

                    <button className="btn" onClick={() => setSelectedPlan(plan)}>
                      Seleccionar Plan
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="summary">
            <button className="back-btn" onClick={() => setSelectedPlan(null)}>
              <img src={left} alt="Volver" className="back-icon" />
              Volver
            </button>

               <h1 className="summary-title">Resumen del seguro</h1>

            <div className="summary-card">
              <p className="summary-label">PRECIOS CALCULADOS PARA:</p>

              <div className="summary-user">
                <img src={iconosombra} alt="user" className="user-icon" />
                <h2>{userData?.nombre}</h2>
              </div>

              <hr />

              <div className="summary-info">
                <h3>Responsable de pago</h3>
                <p>DNI: {userData?.documento}</p>
                <p>Celular: {userData?.phone}</p>

                <h3>Plan elegido</h3>
                <p>{selectedPlan.title}</p>
                <p>Costo del Plan: {selectedPlan.price} al mes</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

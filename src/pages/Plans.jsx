import { useState } from "react";

export default function Plans() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      title: "Plan en Casa",
      price: "S/ 39",
      icon: "/iconocasa.svg",
      benefits: [
        "Médico general a domicilio por S/ 20 y medicinas cubiertas al 100%",
        "Videoconsulta y orientación telefónica al 100% en medicina general + pediatría",
        "Indemnización de S/ 300 en caso de hospitalización por más de un día"
      ]
    },
    {
      id: 2,
      title: "Plan en Casa y Clínica",
      price: "S/ 99",
      icon: "/iconohospital.svg",
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
      icon: "/iconocasa.svg",
      benefits: [
        "Un Chequeo preventivo general de manera presencial o virtual",
        "Acceso a vacunas en el programa del MINSA en centros privados",
        "Incluye todos los beneficios del Plan en Casa"
      ]
    }
  ];

  return (
    <div className="plans-page">
      {/* Header */}
      <header className="plans-header">
        <img src="/logo.svg" alt="Rimac logo" className="logo" />
        <div className="phone">
          <span>¡Compra por este medio!</span>
          <strong>(01) 411 6001</strong>
        </div>
      </header>

      {/* Stepper */}
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

      {/* Main */}
      <main className="plans-main">
        {!selectedPlan ? (
          <>
            <h1 className="title">Elige el plan que se adapte a ti</h1>
            <p className="subtitle">Selecciona a quién deseas asegurar.</p>

            {/* Filtros */}
            <div className="plans-filters">
              <div
                className={`option-card ${selectedOption === "me" ? "active" : ""}`}
                onClick={() => setSelectedOption("me")}
              >
                <img src="/parami.svg" alt="Para mí" className="option-icon" />
                <h3>Para mí</h3>
                <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
              </div>

              <div
                className={`option-card ${selectedOption === "family" ? "active" : ""}`}
                onClick={() => setSelectedOption("family")}
              >
                <img src="/alguienmas.svg" alt="Para alguien más" className="option-icon" />
                <h3>Para alguien más</h3>
                <p>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
              </div>
            </div>

            {/* Cards solo si ya eligió */}
            {selectedOption && (
              <div className="plans-list">
                {plans.map((plan) => (
                  <div className="plan-card" key={plan.id}>
                    {/* Header con ícono y título */}
                   <div className="plan-card-header">
                    <h2>{plan.title}</h2>
                     <img src={plan.icon} alt={plan.title} />
                     </div>

                    <p className="cost-label">Costo del plan</p>
                    <div className="price">{plan.price} al mes</div>
                    <ul>
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>

                    <button
                      className="btn"
                      onClick={() => setSelectedPlan(plan)} // 👈 ahora guarda el plan
                    >
                      Seleccionar Plan
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
<div className="summary"><
    h1 className="summary-title">Resumen del seguro</h1>
  <div className="summary-card">
    <p className="summary-subtitle">PRECIO CALCULADO PARA:</p>

    <div className="summary-card-header">
      <img src="/iconosombra.svg" alt={selectedPlan.title} className="summary-icon" />
       <h2>Rocio Miranda Diaz</h2>
    </div>

    <div className="summary-price">{selectedPlan.price} al mes</div>

    <ul className="summary-benefits">
      {selectedPlan.benefits.map((benefit, idx) => (
        <li key={idx}>{benefit}</li>
      ))}
    </ul>

    <button className="confirm-btn">Confirmar</button>
  </div>
</div>


        )}
      </main>
    </div>
  );
}

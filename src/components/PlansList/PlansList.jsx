import React from 'react'
import './PlansList.scss'

export default function PlansList({ plans }) {
  return (
    <section className="plans">
      <h3 className="plans__title">Nuestros planes</h3>
      <ul className="plans__list">
        {plans.map(plan => (
          <li key={plan.id} className="plans__item">
            <article className="plans__card">
              <h4 className="plans__name">{plan.name}</h4>
              <p className="plans__price">S/ {plan.price}</p>
              <p className="plans__desc">{plan.description}</p>
              <button className="plans__button">Seleccionar plan</button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
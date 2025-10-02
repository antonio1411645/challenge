import React from 'react'
import './UserCard.scss'

export default function UserCard({ user }) {
  if (!user) return null
  return (
    <aside className="user-card">
      <img className="user-card__avatar" src={user.avatar} alt={user.name} />
      <div className="user-card__info">
        <h2 className="user-card__name">{user.name}</h2>
        <p className="user-card__email">{user.email}</p>
      </div>
    </aside>
  )
}
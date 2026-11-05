import './UserCard.css'

function UserCard({ name, email, occupation, image }) {
  return (
    <article className="user-card">
      <img className="user-card__image" src={image} alt={`${name} profile`} />
      <div className="user-card__details">
        <h3>{name}</h3>
        <p className="user-card__occupation">{occupation}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </article>
  )
}

export default UserCard

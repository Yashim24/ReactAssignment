function TeamMember({ name, role, image, bio }) {
  return (
    <article className="team-member">
      <img src={image} alt={`${name}, ${role}`} className="team-member__image" />
      <div className="team-member__content">
        <h3>{name}</h3>
        <p className="team-member__role">{role}</p>
        <p className="team-member__bio">{bio}</p>
      </div>
    </article>
  )
}

export default TeamMember

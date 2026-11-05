function StudentProfile({ name, age, course, school, description }) {
  return (
    <article className="student-profile">
      <div className="student-avatar" aria-hidden="true">
        {name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()}
      </div>
      <div>
        <h3>{name}</h3>
        <dl className="student-details">
          <div><dt>Age</dt><dd>{age}</dd></div>
          <div><dt>Course of study</dt><dd>{course}</dd></div>
          <div><dt>School</dt><dd>{school}</dd></div>
        </dl>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default StudentProfile

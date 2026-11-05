import Navbar from './components/Navbar.jsx'
import StudentProfile from './components/StudentProfile.jsx'
import UserCard from './components/UserCard.jsx'
import TeamMember from './components/TeamMember.jsx'
import './components/TeamMembers.css'

const users = [
  {
    name: 'Ada Okafor',
    email: 'ada.okafor@example.com',
    occupation: 'Frontend Developer',
    image: 'https://i.pravatar.cc/160?img=47',
  },
  {
    name: 'Tunde Bello',
    email: 'tunde.bello@example.com',
    occupation: 'Data Analyst',
    image: 'https://i.pravatar.cc/160?img=12',
  },
  {
    name: 'Zainab Musa',
    email: 'zainab.musa@example.com',
    occupation: 'UI/UX Designer',
    image: 'https://i.pravatar.cc/160?img=44',
  },
]

const team = [
  {
    name: 'Amara James',
    role: 'Project Manager',
    image: 'https://i.pravatar.cc/240?img=49',
    bio: 'Keeps projects organised and helps the team turn ideas into clear plans.',
  },
  {
    name: 'Daniel Yusuf',
    role: 'Lead Developer',
    image: 'https://i.pravatar.cc/240?img=13',
    bio: 'Builds reliable web experiences and enjoys solving technical problems.',
  },
  {
    name: 'Fatima Ibrahim',
    role: 'Product Designer',
    image: 'https://i.pravatar.cc/240?img=45',
    bio: 'Creates accessible, thoughtful interfaces centred on people.',
  },
  {
    name: 'Chidi Nwosu',
    role: 'Data Specialist',
    image: 'https://i.pravatar.cc/240?img=14',
    bio: 'Finds useful insights in data and communicates them in simple ways.',
  },
]

function App() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <section id="home" className="hero-section">
          <p className="eyebrow">WELCOME To InsideLife Naija</p>
          <h1>Where we share stories that touches the heart all aroud Naija.</h1>
          <p className="hero-copy">
            A simple React project showcasing reusable components, props and styling. 
            Am proud of careerEx
          </p>
        </section>

        <section id="about" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">TASK 1</p>
            <h2>Student Profile</h2>
          </div>
          <StudentProfile
            name="Emmanuel Peter Bagwam"
            age={24}
            course="FrontEnd Engineering"
            school="CarreerEx Academic"
            description="I am a curious and motivated student who enjoys learning how technology can solve everyday problems. I am currently building my skills in web development and data analysis."
          />
        </section>

        <section id="services" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">TASKS 3 & 4</p>
            <h2>Our Community</h2>
            <p>Bringing You Stories Around Naija.</p>
          </div>
          <div className="user-grid">
            {users.map((user) => (
              <UserCard key={user.email} {...user} />
            ))}
          </div>
        </section>

        <section id="team" className="section-block team-section">
          <div className="section-heading">
            <p className="eyebrow">TASK 5</p>
            <h2>Meet the Team</h2>
            <p>Four team members displayed with one reusable component.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Let’s tell the world stories around Naija.</h2>
          <p>Contact: alwaysbagwam@gmail.com</p>
        </section>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} INSIDELIFE NAIJA. Built with React and Vite.
      </footer>
    </>
  )
}

export default App

function Navbar() {
  const navStyle = {
    backgroundColor: '#172554',
    color: '#ffffff',
    padding: '16px 6%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    flexWrap: 'wrap',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.12)',
  }

  const logoStyle = {
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    textDecoration: 'none',
  }

  const linksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
    flexWrap: 'wrap',
  }

  const linkStyle = {
    color: '#dbeafe',
    textDecoration: 'none',
    fontSize: '0.94rem',
    fontWeight: 600,
  }

  return (
    <nav style={navStyle} aria-label="Main navigation">
      <a href="#home" style={logoStyle}>INSIDELIFE NAIJA</a>
      <div style={linksStyle}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar

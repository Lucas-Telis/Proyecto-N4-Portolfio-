import './Header.css'

const template = () => {
  return `
  <header>
    <h1>Lucas Telis</h1>
    <nav>
      <ul>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience/Studies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
                <li>
          <a href=>Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const Header = () => {
  return template()
}

export default Header

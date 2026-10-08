import './App.css'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Subrat Maharana</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Subrat Maharana</h1>

          <h2>B.Tech CSE Student | React.js Developer</h2>

          <p className="hero-text">
            I build responsive web applications using React.js,
            JavaScript, Python, Django and SQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="https://github.com/subratmaharana"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a B.Tech Computer Science Engineering student with an
          interest in frontend development and problem solving. I work
          with React.js, JavaScript, HTML, CSS, Python, Django and SQL.
          I enjoy building practical web applications and continuously
          improving my development skills.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-container">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>Python</span>
          <span>Django</span>
          <span>REST APIs</span>
          <span>SQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>DSA</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-container">

          {/* Personal Portfolio */}
          <div className="project-card">
            <h3>Personal Portfolio</h3>

            <p>
              A responsive personal portfolio website built using
              React.js, JavaScript, HTML and CSS.
            </p>

            <p className="tech">
              React.js • JavaScript • HTML • CSS
            </p>
          </div>

          {/* Expense Tracker */}
          <div className="project-card">
            <h3>Expense Tracker Pro</h3>

            <p>
              A Django-based expense management application with
              authentication, income and expense tracking, categories
              and budget management.
            </p>

            <p className="tech">
              Python • Django • MySQL • HTML • CSS • Bootstrap
            </p>

            <div className="project-links">
              <a
                href="https://github.com/subratmaharana/expense-tracker"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Learning Management System */}
          <div className="project-card">
            <h3>Learning Management System</h3>

            <p>
              A web application for user authentication, course
              management and database operations.
            </p>

            <p className="tech">
              Python • Django • SQL
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>

        <p>
          Interested in working together? Feel free to connect with me.
        </p>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=subrat.code05@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/subratmaharana"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/maharanasubrat/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Subrat Maharana. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
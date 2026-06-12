import teamData from '../../data/teamData';
import './About.css';

function About() {
  return (
    <main className="page-about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-shape about-hero-shape--1" />
        <div className="about-hero-shape about-hero-shape--2" />
        <div className="section-container">
          <div className="about-hero-content">
            <span className="about-hero-badge glass">About Us</span>
            <h1>Who We Are</h1>
            <p>We stand with children, especially girls, wherever they are oppressed, exploited, left behind or not equally valued.</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="section-container">
          <div className="about-mission-content">
            <h2>Our Mission</h2>
            <p>At Aashray Foundation, our mission is to strive for a just world that advances children's rights and equality for girls. We tackle the root causes of inequality and work to create a world where children, especially girls, learn, lead, decide and thrive.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="section-container">
          <h2>Our Team</h2>
          <div className="about-team-grid">
            {teamData.map((member) => (
              <div key={member.id} className="about-team-card glass">
                <div className="about-team-avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

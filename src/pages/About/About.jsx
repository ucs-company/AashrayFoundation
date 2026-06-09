import teamData from '../../data/teamData';
import './About.css';

function About() {
  return (
    <main className="page-about">
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>We stand with children, especially girls, wherever they are oppressed, exploited, left behind or not equally valued.</p>
        </div>
      </section>

      <section className="about-content container">
        <h2>Our Mission</h2>
        <p>At Plan International Canada, our mission is to strive for a just world that advances children's rights and equality for girls. We tackle the root causes of inequality and work to create a world where children, especially girls, learn, lead, decide and thrive.</p>

        <h2>Our Team</h2>
        <div className="team-grid">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;

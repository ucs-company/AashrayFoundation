import programsData from '../../data/programsData';
import Button from '../../components/Common/Button';
import './Programs.css';

function Programs() {
  return (
    <main className="page-programs">
      <section className="page-hero">
        <div className="container">
          <h1>Our Programs</h1>
          <p>We work in communities around the world to advance children's rights and equality for girls.</p>
        </div>
      </section>

      <section className="container programs-list">
        {programsData.map((program) => (
          <div key={program.id} className="program-card">
            <img src={program.image} alt={program.title} />
            <div className="program-text">
              <h2>{program.title}</h2>
              <p>{program.description}</p>
              <Button variant="outline">{program.buttonText}</Button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Programs;

import Button from '../../components/Common/Button';
import './Volunteer.css';

function Volunteer() {
  return (
    <main className="page-volunteer">
      <section className="page-hero">
        <div className="container">
          <h1>Get Involved</h1>
          <p>See how you can get involved with Plan International Canada today.</p>
        </div>
      </section>

      <section className="container volunteer-options">
        <div className="volunteer-card">
          <h2>Youth Programs</h2>
          <p>Initiatives for youth ages 14-24 to lead positive change in their communities and beyond.</p>
          <Button variant="outline">Explore youth programs</Button>
        </div>
        <div className="volunteer-card">
          <h2>Girls Belong Here</h2>
          <p>A movement to advance gender equality and amplify girls' voices in Canada.</p>
          <Button variant="outline">Learn more</Button>
        </div>
        <div className="volunteer-card">
          <h2>Corporate Partnerships</h2>
          <p>Build a thriving corporate-giving partnership with us to make a lasting impact.</p>
          <Button variant="outline">Become a partner</Button>
        </div>
        <div className="volunteer-card">
          <h2>Fundraising</h2>
          <p>Start your own fundraiser and rally your community to support children's rights.</p>
          <Button variant="outline">Start fundraising</Button>
        </div>
      </section>
    </main>
  );
}

export default Volunteer;

import Button from '../../components/Common/Button';
import './Donate.css';

function Donate() {
  return (
    <main className="page-donate">
      <section className="page-hero">
        <div className="container">
          <h1>Donate</h1>
          <p>Your donation helps advance children's rights and equality for girls worldwide.</p>
          <Button variant="donate-lg">Donate now</Button>
        </div>
      </section>

      <section className="container donate-options">
        <div className="donate-card">
          <h2>Monthly Giving</h2>
          <p>Provide reliable, ongoing support that helps communities plan for the future.</p>
          <Button variant="outline">Become a monthly donor</Button>
        </div>
        <div className="donate-card">
          <h2>One-Time Gift</h2>
          <p>Make a single donation to support our most urgent needs around the world.</p>
          <Button variant="outline">Give once</Button>
        </div>
        <div className="donate-card">
          <h2>Gifts of Hope</h2>
          <p>Real gifts that go to real projects — school supplies, health care, and more.</p>
          <Button variant="outline">Shop Gifts of Hope</Button>
        </div>
      </section>
    </main>
  );
}

export default Donate;

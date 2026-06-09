import "./Medical.css";

export default function Medical() {
  return (
    <div className="medical-page">

      {/* Hero */}
      <section className="medical-hero">
        <div className="medical-overlay">
          <div className="medical-hero-content">
            <span>Project LIFE-LINE</span>
            <h1>Saving Lives Through Compassion & Care</h1>
            <p>
              Providing life-saving surgeries and critical healthcare support
              to vulnerable children and families in need.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="medical-intro">
        <div className="container">
          <h2>Every Heartbeat Matters</h2>

          <p>
            At AFLF, we believe that every child deserves a chance to live a
            healthy and fulfilling life. Project LIFE-LINE is dedicated to
            supporting children and individuals who require urgent medical care
            but cannot afford life-saving treatment.
          </p>

          <p>
            Through community support and compassionate action, we help provide
            surgeries, healthcare assistance, and renewed hope to those facing
            critical medical challenges.
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="medical-mission">
        <div className="container">

          <h2>Our Mission</h2>

          <div className="mission-grid">

            <div className="mission-card">
              <h3>Saving Children's Lives</h3>
              <p>
                Ensuring that children receive essential surgeries and medical
                treatment regardless of financial limitations.
              </p>
            </div>

            <div className="mission-card">
              <h3>Critical Surgery Support</h3>
              <p>
                Supporting complex and costly surgeries through fundraising and
                community-driven initiatives.
              </p>
            </div>

            <div className="mission-card">
              <h3>Compassionate Care</h3>
              <p>
                Bringing communities together to provide hope, dignity, and
                life-changing medical support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="medical-impact">
        <div className="container">

          <h2>Why Project LIFE-LINE Matters</h2>

          <div className="impact-grid">

            <div>
              <h3>Life-Saving</h3>
              <p>
                Critical surgeries can transform lives and give children a
                brighter future.
              </p>
            </div>

            <div>
              <h3>Accessible Care</h3>
              <p>
                Financial hardship should never prevent access to healthcare.
              </p>
            </div>

            <div>
              <h3>Community Driven</h3>
              <p>
                Together we create lasting impact through collective support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="medical-cta">
        <div className="container">
          <h2>Join Our Lifesaving Mission</h2>

          <p>
            Your contribution can help fund surgeries, provide medical support,
            and give hope to children and families facing critical health
            challenges.
          </p>

          <a href="/donate" className="medical-btn">
            Donate Now
          </a>
        </div>
      </section>

    </div>
  );
}
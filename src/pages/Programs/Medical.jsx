import "./Medical.css";

export default function Medical() {
  return (
    <div className="medical-page">

      {/* Hero */}
    <section className="medical-hero">
  <div className="medical-overlay">

    <div className="medical-hero-content">

      {/* <h1>Project LIFE-LINE</h1> */}

      {/* <div className="hero-buttons">
        <a href="/donate" className="btn-primary">
          Donate Now
        </a>
      </div> */}

    </div>

  </div>
  </section>

    {/* SECTION 1 */}
<section className="medical-section">
  <div className="container medical-grid">

    <div className="medical-image">
      <img src="/images/medical/img2.jpeg" alt="Medical Support" />
    </div>

    <div className="medical-content">
      <span>PROJECT LIFE-LINE</span>
      <h2>Every Heartbeat Matters</h2>

      <p>
        At AFLF, we believe that every child deserves a chance to live a healthy
        and fulfilling life. Project LIFE-LINE is dedicated to supporting children
        and individuals who require urgent medical care but cannot afford life-saving treatment.
      </p>

      <p>
        Through community support and compassionate action, we help provide surgeries,
        healthcare assistance, and renewed hope to those facing critical medical challenges.
      </p>
    </div>

  </div>
</section>


{/* SECTION 2 (REVERSED) */}
<section className="medical-section reverse">
  <div className="container medical-grid">

        <div className="medical-image">
      <img src="/images/medical/img2.jpeg" alt="Child Care" />
    </div>



    <div className="medical-content">
      <span>OUR PURPOSE</span>
      <h2>Saving Children's Lives</h2>

      <p>
        Every child deserves access to healthcare regardless of financial circumstances.
        Through Project LIFE-LINE we support surgeries, treatments and medical interventions
        that save lives.
      </p>
    </div>

    {/* <div className="medical-image">
      <img src="/images/medical/img2.jpeg" alt="Child Care" />
    </div> */}

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

 <section className="image-content reverse-section">
  <div className="container image-grid">

    <div className="content-box">
      <span>CRITICAL SUPPORT</span>

      <h2>Giving Families A Second Chance</h2>

      <p>
        We support children and individuals who require complex and costly
        surgeries but lack the financial means to access treatment.
      </p>

      <p>
        Through fundraising, partnerships, and community support, we help make
        life-saving healthcare accessible to those who need it most.
      </p>
    </div>

    <div className="image-box">
      <img
        src="/images/medical/img3.jpeg"
        alt="Surgery Support"
      />
    </div>

  </div>
</section>









  <section className="impact-banner">
  <div className="impact-item">
    <h3>500+</h3>
    <p>Lives Impacted</p>
  </div>

  <div className="impact-item">
    <h3>100+</h3>
    <p>Families Supported</p>
  </div>

  <div className="impact-item">
    <h3>24/7</h3>
    <p>Community Care</p>
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
      <section className="gallery-section">

  <div className="container">

    <h2>Moments of Hope</h2>

    <div className="gallery-grid">

      <img src="/images/medical/gallery-1.jpg" alt="" />
      <img src="/images/medical/gallery-2.jpg" alt="" />
      <img src="/images/medical/gallery-3.jpg" alt="" />
      <img src="/images/medical/gallery-4.jpg" alt="" />
      <img src="/images/medical/gallery-5.jpg" alt="" />
      <img src="/images/medical/gallery-6.jpg" alt="" />

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

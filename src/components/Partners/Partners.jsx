import "./Partners.css";

const logos = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/images/partnerslogos/q${i + 1}.jpg`,
}));

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <h2>Our Partners</h2>
        <p className="partners-subtitle">Trusted by organizations that believe in our mission</p>
      </div>
      <div className="partners-track-wrapper">
        <div className="partners-track">
          <div className="partners-track-inner">
            {logos.map((logo) => (
              <div key={logo.id} className="partner-logo">
                <img src={logo.src} alt={`Partner ${logo.id}`} />
              </div>
            ))}
            {logos.map((logo) => (
              <div key={`dup-${logo.id}`} className="partner-logo">
                <img src={logo.src} alt={`Partner ${logo.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

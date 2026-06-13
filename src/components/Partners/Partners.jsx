import "./Partners.css";

const logos = [
  { id: 1, src: "/images/partnerslogos/q1.jpg" },
  { id: 2, src: "/images/partnerslogos/q2.jpg" },
  { id: 3, src: "/images/partnerslogos/q3.jpg" },
  { id: 4, src: "/images/partnerslogos/q4.jpg" },
  { id: 5, src: "/images/partnerslogos/q5.jpg" },
  { id: 6, src: "/images/partnerslogos/q6.jpg" },
  { id: 7, src: "/images/partnerslogos/q7.jpg" },
  { id: 8, src: "/images/partnerslogos/q8.jpg" },
  { id: 9, src: "/images/partnerslogos/q9.jpg" },
  { id: 10, src: "/images/partnerslogos/q10.jpg" },
  { id: 11, src: "/images/partnerslogos/q11.jpg" },
  { id: 12, src: "/images/partnerslogos/q12.jpg" },
  { id: 13, src: "/images/partnerslogos/q13.jpg" },
  { id: 14, src: "/images/partnerslogos/q14.jpg" },
  { id: 15, src: "/images/partnerslogos/q15.jpg" },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <h2>Our Partners</h2>
        <p className="partners-subtitle">
          Trusted by organizations that believe in our mission
        </p>
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
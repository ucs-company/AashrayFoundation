import { useEffect, useRef } from "react";
import "./Medical.css";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop", alt: "Medical care" },
  { id: 2, src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop", alt: "Surgery support" },
  { id: 3, src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop", alt: "Hospital care" },
  { id: 4, src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop", alt: "Child healthcare" },
  { id: 5, src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop", alt: "Medical treatment" },
  { id: 6, src: "https://images.unsplash.com/photo-1530490124645-3e767e6bebb4?w=600&h=400&fit=crop", alt: "Hope and healing" },
];

const missions = [
  {
    title: "Saving Children's Lives",
    desc: "Access to vital surgeries is a matter of survival. Project Lifeline steps in as their lifeline, ensuring no child faces critical illness due to financial limitations.",
  },
  {
    title: "Critical Surgery Support",
    desc: "We take on cases of individuals, especially children, who require complex and costly surgeries but lack the means to pay for them.",
  },
  {
    title: "Compassionate Care",
    desc: "Project Lifeline embodies the spirit of compassion and unwavering solidarity. Communities come together to create miracles, one surgery at a time.",
  },
];

export default function Medical() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="medical-page">
      <section className="medical-hero1">
        <div className="medical-overlay">
          <div className="medical-hero-content">
            <span className="medical-hero-tag" ref={(el) => (sectionRefs.current[0] = el)}>PROJECT LIFE-LINE</span>
            <h1 ref={(el) => (sectionRefs.current[1] = el)}>Saving Lives,<br />One Surgery at a Time</h1>
            <p ref={(el) => (sectionRefs.current[2] = el)}>
              Every heartbeat counts. Project Lifeline is our unwavering commitment to providing
              a lifeline of hope to the poorest and most vulnerable among us.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="medical-intro-grid">
            <div className="medical-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Life-Line</h2>
              <p>
                At <strong>AFLF (Ashray for Life Foundation)</strong>, we firmly believe that
                every heartbeat counts, especially when it belongs to a child or a person in
                desperate need of life-saving surgery. <strong>Project Lifeline</strong> is our
                unwavering commitment to providing a lifeline of hope to the poorest and most
                vulnerable among us.
              </p>
              <p>
                We understand that for many little hearts, access to vital surgeries is a matter
                of survival. Project Lifeline steps in as their lifeline, ensuring that no child
                faces the threat of critical illness due to financial limitations.
              </p>
              <p className="medical-quote">
                "One surgery, one life saved — it's not just about surgeries; it's about giving
                children the precious gift of life itself."
              </p>
            </div>
            <div className="medical-intro-image">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=500&fit=crop"
                alt="Medical care"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="medical-mission" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            Through Project Lifeline, we are dedicated to saving lives and restoring hope
          </p>
          <div className="medical-mission-grid">
            {missions.map((m, i) => (
              <div key={i} className="medical-mission-card">
                <div className="medical-mission-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="medical-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="medical-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Giving Families a Second Chance</h2>
            <p>
              Through Project Lifeline, we have witnessed the miracle of life restored. Children
              who once faced critical health challenges now play, learn, and dream of a bright
              future. Families who had lost hope now have their loved ones back.
            </p>
            <p>
              Every surgery funded, every life saved, every family restored — these are the
              milestones that drive us forward. Together, we are creating miracles, one surgery
              at a time, and proving that collective compassion can achieve the extraordinary.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="medical-stats-grid">
          <div className="medical-stat">
            <span className="medical-stat-number">500+</span>
            <span className="medical-stat-label">Lives Impacted</span>
          </div>
          <div className="medical-stat">
            <span className="medical-stat-number">100+</span>
            <span className="medical-stat-label">Surgeries Supported</span>
          </div>
          <div className="medical-stat">
            <span className="medical-stat-number">200+</span>
            <span className="medical-stat-label">Families Helped</span>
          </div>
          <div className="medical-stat">
            <span className="medical-stat-number">24/7</span>
            <span className="medical-stat-label">Emergency Care</span>
          </div>
        </div>
      </section>

      <section className="medical-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Healing</h2>
          <p className="section-subtitle">Every life saved is a testament to the power of compassion</p>
          <div className="medical-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="medical-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="medical-gallery-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

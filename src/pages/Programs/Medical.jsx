import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
    <div className="medical-page" style={{ '--hero-img': 'url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=600&fit=crop)' }}>
      {/* HERO */}
      <section className="detail-hero">
        <div className="detail-hero-shape detail-hero-shape--1" />
        <div className="detail-hero-shape detail-hero-shape--2" />
        <div className="section-container">
          <div className="detail-hero-content">
            <span className="detail-hero-badge glass" ref={(el) => (sectionRefs.current[0] = el)}>PROJECT LIFE-LINE</span>
            <h1 ref={(el) => (sectionRefs.current[1] = el)}>Saving Lives,<br />One Surgery at a Time</h1>
            <p ref={(el) => (sectionRefs.current[2] = el)}>
              Every heartbeat counts. Project Lifeline is our unwavering commitment to providing
              a lifeline of hope to the poorest and most vulnerable among us.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="detail-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="section-container">
          <div className="detail-intro-grid">
            <div className="detail-intro-text">
              <span className="detail-section-tag">WELCOME TO</span>
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
              <p className="detail-quote">
                "One surgery, one life saved — it's not just about surgeries; it's about giving
                children the precious gift of life itself."
              </p>
            </div>
            <div className="detail-intro-image">
              <div className="detail-image-frame glass">
                <img
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=500&fit=crop"
                  alt="Medical care"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="detail-mission" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="section-container">
          <h2>Our Mission</h2>
          <p className="detail-section-subtitle">
            Through Project Lifeline, we are dedicated to saving lives and restoring hope
          </p>
          <div className="detail-mission-grid">
            {missions.map((m, i) => (
              <div key={i} className="detail-mission-card glass">
                <div className="detail-mission-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="detail-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="section-container">
          <div className="detail-impact-content">
            <span className="detail-section-tag">OUR IMPACT</span>
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

      {/* STATS */}
      <section className="detail-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="detail-stats-grid">
          <div className="detail-stat glass">
            <span className="detail-stat-number">500+</span>
            <span className="detail-stat-label">Lives Impacted</span>
          </div>
          <div className="detail-stat glass">
            <span className="detail-stat-number">100+</span>
            <span className="detail-stat-label">Surgeries Supported</span>
          </div>
          <div className="detail-stat glass">
            <span className="detail-stat-number">200+</span>
            <span className="detail-stat-label">Families Helped</span>
          </div>
          <div className="detail-stat glass">
            <span className="detail-stat-number">24/7</span>
            <span className="detail-stat-label">Emergency Care</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="detail-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="section-container">
          <h2>Moments of Healing</h2>
          <p className="detail-section-subtitle">Every life saved is a testament to the power of compassion</p>
          <div className="detail-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="detail-gallery-item glass">
                <img src={img.src} alt={img.alt} />
                <div className="detail-gallery-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta">
        <div className="section-container">
          <h2>Support Our Mission</h2>
          <p>Your support can help us save more lives and give families a second chance.</p>
          <div className="detail-cta-btns">
            <Link to="/donate" className="btn-primary-glass">Donate Now</Link>
            <Link to="/volunteer" className="btn-secondary-glass">Become a Volunteer</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef } from "react";
import "./OldAgeHome.css";

const galleryImages = [
  { id: 1, src: "/images/gallery/sahara1.jpg", alt: "Elderly care" },
  { id: 2, src: "/images/gallery/sahara2.jpg", alt: "Quality time" },
  { id: 3, src: "/images/gallery/sahara3.jpg", alt: "Celebrations" },
  { id: 4, src: "/images/gallery/sahara4.jpg", alt: "Community support" },
  { id: 5, src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=400&fit=crop", alt: "Golden years" },
  { id: 6, src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop", alt: "Dignity and respect" },
];

const missions = [
  {
    title: "Advocating for the Elderly",
    desc: "In a country with a projected 138 million elderly individuals, AFLF is their voice. We champion their concerns and rights, ensuring they lead secure, joyful, and dignified lives.",
  },
  {
    title: "Supporting Old-Age Homes",
    desc: "We provide essential support in the form of food grains, regular visits, and quality time spent, making their days brighter and more meaningful.",
  },
  {
    title: "Celebrating Life's Moments",
    desc: "We celebrate the special occasions of our elderly friends, like birthdays and festivals, bringing smiles, joy, and a sense of belonging to their lives.",
  },
];

export default function OldAgeHome() {
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
    <div className="oldage-page">
      <section className="oldage-hero">
        <div className="oldage-overlay">
          <div className="oldage-hero-content">
            <span className="oldage-hero-tag" ref={(el) => (sectionRefs.current[0] = el)}>PROJECT SAHARA</span>
            <h1 ref={(el) => (sectionRefs.current[1] = el)}>Empowering Elder Lives<br />with Dignity</h1>
            <p ref={(el) => (sectionRefs.current[2] = el)}>
              We envision a society where our seniors have the right to an active, healthy,
              and dignified life, regardless of their circumstances.
            </p>
          </div>
        </div>
      </section>

      <section className="oldage-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="oldage-intro-grid">
            <div className="oldage-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Sahara</h2>
              <p>
                At <strong>AFLF (Ashray for Life Foundation)</strong>, we are dedicated to a
                cause that transcends age, but centers on the invaluable wisdom and experience
                of our elderly population. We envision a society where our seniors have the
                right to an active, healthy, and dignified life, regardless of their circumstances.
              </p>
              <p>
                In a country with a projected 138 million elderly individuals, AFLF is their
                voice. We champion their concerns and rights, working tirelessly to ensure
                that they lead secure, joyful, and dignified lives.
              </p>
              <p className="oldage-quote">
                "Together, we can ensure that our seniors live their golden years with the
                dignity and respect they deserve."
              </p>
            </div>
            <div className="oldage-intro-image">
              <img
                src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=500&fit=crop"
                alt="Elderly care"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="oldage-mission" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            Dedicated to empowering and uplifting the lives of disadvantaged older persons
          </p>
          <div className="oldage-mission-grid">
            {missions.map((m, i) => (
              <div key={i} className="oldage-mission-card">
                <div className="oldage-mission-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="oldage-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="oldage-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Giving Seniors the Dignity They Deserve</h2>
            <p>
              For many elderly individuals, old-age homes are their haven. Through Project
              Sahara, we provide essential support, companionship, and a sense of belonging.
              Our regular visits, food grain distributions, and festive celebrations bring
              warmth and joy to their golden years.
            </p>
            <p>
              Every smile we bring, every celebration we share, every moment of dignity we
              restore — these are the milestones that drive us forward. Together, we can
              ensure that no senior feels forgotten or alone.
            </p>
          </div>
        </div>
      </section>

      <section className="oldage-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="oldage-stats-grid">
          <div className="oldage-stat">
            <span className="oldage-stat-number">138M+</span>
            <span className="oldage-stat-label">Elderly Population</span>
          </div>
          <div className="oldage-stat">
            <span className="oldage-stat-number">500+</span>
            <span className="oldage-stat-label">Seniors Supported</span>
          </div>
          <div className="oldage-stat">
            <span className="oldage-stat-number">50+</span>
            <span className="oldage-stat-label">Old-Age Homes</span>
          </div>
          <div className="oldage-stat">
            <span className="oldage-stat-number">100+</span>
            <span className="oldage-stat-label">Celebrations Hosted</span>
          </div>
        </div>
      </section>

      <section className="oldage-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Joy</h2>
          <p className="section-subtitle">Bringing smiles, joy, and a sense of belonging to our senior friends</p>
          <div className="oldage-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="oldage-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="oldage-gallery-overlay">
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

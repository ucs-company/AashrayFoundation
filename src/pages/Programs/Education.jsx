import { useEffect, useRef } from "react";
import "./Education.css";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop", alt: "Children studying" },
  { id: 2, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", alt: "Classroom" },
  { id: 3, src: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop", alt: "Students learning" },
  { id: 4, src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop", alt: "Library" },
  { id: 5, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop", alt: "School" },
  { id: 6, src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop", alt: "Children with books" },
];

const missions = [
  {
    title: "Eliminating Child Labor",
    desc: "No child should ever have to work to survive. Through Project Vidhyalay, we work tirelessly to eradicate child labor, providing young souls with the gift of education.",
  },
  {
    title: "Access to Basic Education",
    desc: "Illiteracy and poverty have kept countless children from accessing even basic education. Project Vidhyalay bridges this gap, offering a pathway to learning and empowerment.",
  },
  {
    title: "Empowering Women",
    desc: "We empower daily wage workers and school dropout women with basic education, giving them the ability to read, write, and sign their names, opening doors to a brighter future.",
  },
];

export default function Education() {
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
    <div className="education-page">
      <section className="edu-hero">
        <div className="edu-overlay">
          <div className="edu-hero-content">
           
          </div>
        </div>
      </section>

      <section className="edu-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="edu-intro-grid">
            <div className="edu-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Vidhyalay</h2>
              <p>
                At <strong>AFLF (Ashray for Life Foundation)</strong>, we are committed to breaking the cycle
                of illiteracy and poverty by ensuring that every underprivileged child, every slum dweller,
                and every orphaned child has the opportunity to receive a quality education.
              </p>
              <p>
                Project Vidhyalay is our flagship initiative, dedicated to the cause of{" "}
                <strong>"Education for All."</strong> We believe that education is not just a fundamental
                right — it is the most powerful tool to transform lives, families, and entire communities.
              </p>
            </div>
            <div className="edu-intro-image">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=500&fit=crop"
                alt="Education"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="edu-mission" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            Through Project Vidhyalay, we are dedicated to creating lasting change
          </p>
          <div className="edu-mission-grid">
            {missions.map((m, i) => (
              <div key={i} className="edu-mission-card">
                <div className="edu-mission-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="edu-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Transforming Lives Through Education</h2>
            <p>
              Through Project Vidhyalay, we have witnessed the transformation of lives. We've seen
              children trade their work tools for books, slum communities embrace education as a
              beacon of hope, and women gaining the confidence to pursue better opportunities for
              themselves and their families.
            </p>
            <p>
              Every child who steps into our classrooms, every woman who learns to read and write,
              every family that breaks free from poverty — these are the milestones that drive us
              forward. Education is the key that unlocks a world of possibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="edu-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="edu-stats-grid">
          <div className="edu-stat">
            <span className="edu-stat-number">500+</span>
            <span className="edu-stat-label">Children Educated</span>
          </div>
          <div className="edu-stat">
            <span className="edu-stat-number">200+</span>
            <span className="edu-stat-label">Women Empowered</span>
          </div>
          <div className="edu-stat">
            <span className="edu-stat-number">50+</span>
            <span className="edu-stat-label">Communities Reached</span>
          </div>
          <div className="edu-stat">
            <span className="edu-stat-number">100%</span>
            <span className="edu-stat-label">Dedicated to Change</span>
          </div>
        </div>
      </section>

      <section className="edu-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Learning</h2>
          <p className="section-subtitle">Every picture tells a story of hope and transformation</p>
          <div className="edu-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="edu-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="edu-gallery-overlay">
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

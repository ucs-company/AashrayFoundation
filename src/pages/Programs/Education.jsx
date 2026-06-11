import { useEffect, useRef } from "react";
import "./Education.css";

const galleryImages = [
  {
    id: 1,
    src: "/images/education/Education2.jpg",
    alt: "Education Support"
  },
  {
    id: 2,
    src: "/images/education/Education3.jpg",
    alt: "Children Learning"
  },
  {
    id: 3,
    src: "/images/education/Education4.jpg",
    alt: "School Activities"
  },
  {
    id: 4,
    src: "/images/education/Education5.jpg",
    alt: "Educational Materials"
  },
  {
    id: 5,
    src: "/images/education/Education6.jpg",
    alt: "Classroom Support"
  },
  {
    id: 6,
    src: "/images/education/Education1.jpg",
    alt: "Students Learning"
  },
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
                src="/images/education/Education1.jpg"
                alt=""
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

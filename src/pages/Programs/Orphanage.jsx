import { useEffect, useRef } from "react";
import "./Orphanage.css";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=600&h=400&fit=crop", alt: "Children studying" },
  { id: 2, src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop", alt: "School supplies" },
  { id: 3, src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop", alt: "Happy children" },
  { id: 4, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", alt: "Classroom learning" },
  { id: 5, src: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop", alt: "Students with books" },
  { id: 6, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop", alt: "Education for all" },
];

const commitments = [
  {
    title: "Free Education",
    desc: "We offer free education to all children in the Ashra shelter, ensuring that financial constraints do not hinder their access to quality learning.",
  },
  {
    title: "School Supplies",
    desc: "We provide school bags and stationery to all the children, equipping them with the tools they need to excel in their studies.",
  },
  {
    title: "Nurturing Environment",
    desc: "Our dedicated team comes together to address the needs of these children, ensuring they receive the care, support, and love they deserve.",
  },
];

export default function Orphanage() {
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
    <div className="orphanage-page">
      <section className="orphanage-hero">
        <div className="orphanage-overlay">
          <div className="orphanage-hero-content">
            <span className="orphanage-hero-tag" ref={(el) => (sectionRefs.current[0] = el)}>PROJECT ASHRA</span>
            <h1 ref={(el) => (sectionRefs.current[1] = el)}>Empowering Futures,<br />One Child at a Time</h1>
            <p ref={(el) => (sectionRefs.current[2] = el)}>
              A haven of free education for underprivileged children — providing shelter,
              learning, and hope for a brighter tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="orphanage-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="orphanage-intro-grid">
            <div className="orphanage-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Ashra</h2>
              <p>
                The <strong>AFLF (Ashray for Life Foundation)</strong>, also recognized as
                <strong> "Ashray Ka Aashra from Malad,"</strong> serves as a haven of free
                education for underprivileged children. With a dedicated team, the foundation
                comes together to address the needs of these children, ensuring they receive
                the support they require.
              </p>
              <p>
                As a part of their mission, the foundation distributes education kits to these
                young minds, paving the way for a promising and luminous future. We believe in
                the transformative power of education — every child deserves the opportunity to
                learn, grow, and build a brighter future.
              </p>
              <p className="orphanage-quote">
                "We envision a world where every child has the chance to break free from the
                cycle of poverty through education."
              </p>
            </div>
            <div className="orphanage-intro-image">
              <img
                src="https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=600&h=500&fit=crop"
                alt="Children at shelter"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="orphanage-commitment" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Commitment</h2>
          <p className="section-subtitle">
            Through Project Ashra, we are dedicated to creating lasting change for every child
          </p>
          <div className="orphanage-commitment-grid">
            {commitments.map((m, i) => (
              <div key={i} className="orphanage-commitment-card">
                <div className="orphanage-commitment-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="orphanage-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="orphanage-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Shaping Brighter Tomorrows</h2>
            <p>
              Through Project Ashra, we have witnessed the transformation of young lives.
              Children who once had no access to education now dream of becoming doctors,
              teachers, and engineers. The shelter provides not just education but a nurturing
              home where every child feels valued and loved.
            </p>
            <p>
              Every child who steps into our shelter, every education kit we distribute, every
              life we touch — these are the milestones that drive us forward. Together, we are
              sowing the seeds for a more equitable and hopeful future.
            </p>
          </div>
        </div>
      </section>

      <section className="orphanage-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="orphanage-stats-grid">
          <div className="orphanage-stat">
            <span className="orphanage-stat-number">200+</span>
            <span className="orphanage-stat-label">Children Supported</span>
          </div>
          <div className="orphanage-stat">
            <span className="orphanage-stat-number">1000+</span>
            <span className="orphanage-stat-label">Education Kits Distributed</span>
          </div>
          <div className="orphanage-stat">
            <span className="orphanage-stat-number">10+</span>
            <span className="orphanage-stat-label">Years of Service</span>
          </div>
          <div className="orphanage-stat">
            <span className="orphanage-stat-number">24/7</span>
            <span className="orphanage-stat-label">Shelter & Care</span>
          </div>
        </div>
      </section>

      <section className="orphanage-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Joy</h2>
          <p className="section-subtitle">Every smile tells a story of hope and transformation</p>
          <div className="orphanage-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="orphanage-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="orphanage-gallery-overlay">
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

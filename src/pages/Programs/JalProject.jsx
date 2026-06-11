import { useEffect, useRef } from "react";
import "./JalProject.css";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop", alt: "Clean drinking water" },
  { id: 2, src: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&h=400&fit=crop", alt: "Water purification" },
  { id: 3, src: "https://images.unsplash.com/photo-1534928140790-3e4f6140e29a?w=600&h=400&fit=crop", alt: "Community water access" },
  { id: 4, src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop", alt: "Water facility installation" },
  { id: 5, src: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=600&h=400&fit=crop", alt: "Clean water distribution" },
  { id: 6, src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop", alt: "Children drinking clean water" },
];

const missions = [
  {
    title: "Clean Water Facilities",
    desc: "Installing clean water facilities, purifiers, and distribution points in areas where the need is most acute across Mumbai, New Mumbai, and Thane.",
  },
  {
    title: "Reaching the Needy",
    desc: "Focusing on underprivileged communities who face the daily struggle of accessing safe and clean water sources, affecting their health and well-being.",
  },
  {
    title: "Sustainable Impact",
    desc: "Working tirelessly to ensure that no one in our community has to go without clean, fresh drinking water — because clean water is the foundation of life.",
  },
];

export default function JalProject() {
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
    <div className="jal-page">
      <section className="jal-hero">
        <div className="jal-overlay">
          <div className="jal-hero-content">
            <span className="jal-hero-tag" ref={(el) => (sectionRefs.current[0] = el)}>PROJECT JAL</span>
            <h1 ref={(el) => (sectionRefs.current[1] = el)}>Ensuring Access to<br />Clean Drinking Water</h1>
            <p ref={(el) => (sectionRefs.current[2] = el)}>
              Dedicated to providing clean drinking water to underprivileged communities across
              Mumbai, New Mumbai, and Thane — because clean water is a fundamental human right.
            </p>
          </div>
        </div>
      </section>

      <section className="jal-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="jal-intro-grid">
            <div className="jal-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Jal</h2>
              <p>
                In a world where clean drinking water is a basic necessity, the{" "}
                <strong>AFLF (Ashray for Life Foundation)</strong> is committed to making a
                difference through our dedicated project, <strong>"Jal."</strong>
              </p>
              <p>
                Clean drinking water is not a luxury; it's a fundamental human right. Yet, many
                underprivileged communities in Mumbai, New Mumbai, and Thane face the daily struggle
                of accessing safe and clean water sources. This challenge not only affects their
                health but also their overall well-being.
              </p>
              <p>
                Through <strong>AFLF Project Jal</strong>, we are committed to installing clean water
                facilities, purifiers, and distribution points in areas where the need is most acute.
                We work tirelessly to ensure that no one in our community has to go without clean,
                fresh drinking water.
              </p>
              <p className="jal-quote">
                "Clean water is the foundation of life, and together, we can make a significant impact."
              </p>
            </div>
            <div className="jal-intro-image">
              <img
                src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&h=500&fit=crop"
                alt="Clean water"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="jal-mission" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            Through Project Jal, we are fighting to ensure clean water access for all
          </p>
          <div className="jal-mission-grid">
            {missions.map((m, i) => (
              <div key={i} className="jal-mission-card">
                <div className="jal-mission-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jal-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="jal-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Bringing Clean Water, Restoring Hope</h2>
            <p>
              Through Project Jal, we have witnessed the transformation of communities. Families who
              once struggled to access clean drinking water now have reliable sources of safe water.
              Children who fell ill from waterborne diseases now have the foundation for good health.
            </p>
            <p>
              Every water facility installed, every purifier distributed, every life touched — these
              are the milestones that drive us forward. Together, we are building communities where
              clean water flows freely to every corner.
            </p>
          </div>
        </div>
      </section>

      <section className="jal-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="jal-stats-grid">
          <div className="jal-stat">
            <span className="jal-stat-number">50+</span>
            <span className="jal-stat-label">Water Facilities Installed</span>
          </div>
          <div className="jal-stat">
            <span className="jal-stat-number">10,000+</span>
            <span className="jal-stat-label">People Served</span>
          </div>
          <div className="jal-stat">
            <span className="jal-stat-number">25+</span>
            <span className="jal-stat-label">Communities Reached</span>
          </div>
          <div className="jal-stat">
            <span className="jal-stat-number">24/7</span>
            <span className="jal-stat-label">Community Service</span>
          </div>
        </div>
      </section>

      <section className="jal-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Impact</h2>
          <p className="section-subtitle">Every drop of clean water brings hope and health</p>
          <div className="jal-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="jal-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="jal-gallery-overlay">
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

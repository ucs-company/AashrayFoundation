import { useEffect, useRef } from "react";
import "./WomenEmpowerment.css";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop", alt: "Women empowerment" },
  { id: 2, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=600&h=400&fit=crop", alt: "Vocational training" },
  { id: 3, src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop", alt: "Skill development" },
  { id: 4, src: "https://images.unsplash.com/photo-1526676037777-05a921554f77?w=600&h=400&fit=crop", alt: "Women entrepreneurs" },
  { id: 5, src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop", alt: "Community support" },
  { id: 6, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop", alt: "Education for girls" },
];

const focusAreas = [
  {
    title: "Education for Girls",
    desc: "We believe education is the key to empowerment. Through our initiatives, we provide girls with access to quality education, opening doors to a world of opportunities and knowledge.",
  },
  {
    title: "Self-Defense Training",
    desc: "Safety is paramount. We equip girls and women with self-defense techniques, ensuring they can protect themselves and stand up against any form of threat.",
  },
  {
    title: "Vocational Training",
    desc: "We offer training programs in sewing, beauty, candle making, and small business management. These skills boost self-confidence and create pathways to financial independence.",
  },
  {
    title: "Entrepreneurship",
    desc: "Our training nurtures the entrepreneurial spirit. We provide women with the tools and knowledge to start and manage their small businesses, fostering economic self-sufficiency.",
  },
  {
    title: "Health & Well-being",
    desc: "Empowerment also involves taking care of physical and mental well-being. We raise awareness about women's health issues and provide resources for overall wellness.",
  },
  {
    title: "Join Our Movement",
    desc: "Women's empowerment is a collective effort. You can support AFLF's mission by contributing, volunteering, or spreading awareness. Together, we can light the path to independence.",
  },
];

export default function WomenEmpowerment() {
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
    <div className="womens-page">
      <section className="womens-hero">
        <div className="womens-overlay">
          <div className="womens-hero-content">
           
          </div>
        </div>
      </section>

      <section className="womens-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="womens-intro-grid">
            <div className="womens-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Nari Tarang</h2>
              <p>
                At <strong>AFLF (Ashray for Life Foundation)</strong>, we are dedicated to the cause
                of women's empowerment through Project <strong>"Nari Tarang"</strong> — striving to
                enable women to take charge of their lives, make independent choices, and lead
                healthier, more fulfilling lives.
              </p>
              <p>
                Empowering women is not just a choice; it's a necessity. We believe that empowered
                women are the cornerstone of a stronger, more equitable society. Through our
                comprehensive initiatives, we light the path to independence and brighter futures
                for women and girls.
              </p>
              <p className="womens-quote">
                "Empower women, empower the world. At AFLF, we believe that every woman has the
                power to shape her destiny."
              </p>
            </div>
            <div className="womens-intro-image">
              <img
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=600&h=500&fit=crop"
                alt="Women empowerment"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="womens-focus" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Focus Areas</h2>
          <p className="section-subtitle">
            Through Project Nari Tarang, we create lasting change for women and girls
          </p>
          <div className="womens-focus-grid">
            {focusAreas.map((m, i) => (
              <div key={i} className="womens-focus-card">
                <div className="womens-focus-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="womens-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="womens-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Transforming Lives, Building Futures</h2>
            <p>
              Through Project Nari Tarang, we have witnessed the transformation of countless women.
              Girls who once had no access to education now dream of careers. Women who depended on
              others now run their own businesses. Communities once held back by inequality now
              thrive with empowered women leading the way.
            </p>
            <p>
              Every girl educated, every woman trained, every life empowered — these are the
              milestones that drive us forward. Together, we are building a world where every
              woman has the power to shape her own destiny.
            </p>
          </div>
        </div>
      </section>

      <section className="womens-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="womens-stats-grid">
          <div className="womens-stat">
            <span className="womens-stat-number">500+</span>
            <span className="womens-stat-label">Women Empowered</span>
          </div>
          <div className="womens-stat">
            <span className="womens-stat-number">200+</span>
            <span className="womens-stat-label">Girls Educated</span>
          </div>
          <div className="womens-stat">
            <span className="womens-stat-number">100+</span>
            <span className="womens-stat-label">Businesses Started</span>
          </div>
          <div className="womens-stat">
            <span className="womens-stat-number">24/7</span>
            <span className="womens-stat-label">Community Support</span>
          </div>
        </div>
      </section>

      <section className="womens-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Empowerment</h2>
          <p className="section-subtitle">Every story of empowerment inspires a brighter tomorrow</p>
          <div className="womens-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="womens-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="womens-gallery-overlay">
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

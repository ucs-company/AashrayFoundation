import { useEffect, useRef } from "react";
import "./PashuPremi.css";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop", alt: "Stray animal care" },
  { id: 2, src: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=400&fit=crop", alt: "Animal rescue" },
  { id: 3, src: "https://images.unsplash.com/photo-1604848698039-c6c6c2d588ca?w=600&h=400&fit=crop", alt: "Veterinary care" },
  { id: 4, src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop", alt: "Animal compassion" },
  { id: 5, src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&h=400&fit=crop", alt: "Pet care" },
  { id: 6, src: "https://images.unsplash.com/photo-1479065476818-4242acb0ac3f?w=600&h=400&fit=crop", alt: "Shelter support" },
];

const missions = [
  {
    title: "Caring for Stray Animals",
    desc: "Thousands of stray animals struggle daily for food, shelter, and survival. AFLF provides nutritious food, clean drinking water, and essential care to help them live healthier and safer lives.",
  },
  {
    title: "Promoting Animal Health & Welfare",
    desc: "We support the well-being of animals through medical assistance, vaccination drives, rescue efforts, and treatment for injured or sick animals, ensuring they receive the care they deserve.",
  },
  {
    title: "Creating Safe Spaces",
    desc: "Our goal is to help provide safe environments and temporary shelters for abandoned and vulnerable animals, protecting them from harsh weather conditions and other dangers.",
  },
  {
    title: "Spreading Awareness & Compassion",
    desc: "Through community engagement and awareness campaigns, we encourage people to treat animals with empathy, promote responsible pet care, and support animal welfare initiatives.",
  },
  {
    title: "Building a Humane Society",
    desc: "We believe that kindness towards animals reflects the values of a compassionate community. By fostering respect for all living beings, we aim to create lasting positive change.",
  },
];

export default function PashuPremi() {
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
    <div className="pashu-page">
      <section className="pashu-hero">
        <div className="pashu-overlay">
          <div className="pashu-hero-content">
            <span className="pashu-hero-tag" ref={(el) => (sectionRefs.current[0] = el)}>PROJECT PASHU PREMI</span>
            <h1 ref={(el) => (sectionRefs.current[1] = el)}>Empowering Compassion<br />for Every Living Being</h1>
            <p ref={(el) => (sectionRefs.current[2] = el)}>
              We believe that every animal deserves love, safety, nourishment, and compassionate care.
              Through this project, we strive to create a more humane society where animals are
              treated with kindness and respect.
            </p>
          </div>
        </div>
      </section>

      <section className="pashu-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="pashu-intro-grid">
            <div className="pashu-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Pashu Premi</h2>
              <p>
                At <strong>AFLF (Ashray for Life Foundation)</strong>, we are dedicated to
                protecting, caring for, and improving the lives of stray and vulnerable animals.
                Project Pashu Premi is our heartfelt initiative to ensure every living being
                receives the love, safety, and compassion they deserve.
              </p>
              <p>
                Thousands of stray animals struggle daily for food, shelter, and survival.
                Through this initiative, AFLF provides nutritious food, clean drinking water,
                medical assistance, and essential care to help animals live healthier and
                safer lives.
              </p>
              <p className="pashu-quote">
                "Kindness towards animals reflects the values of a compassionate community.
                Together, let's protect, nurture, and celebrate every life."
              </p>
            </div>
            <div className="pashu-intro-image">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop"
                alt="Stray animal care"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pashu-mission" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            Dedicated to creating a safer and more compassionate world for animals
          </p>
          <div className="pashu-mission-grid">
            {missions.map((m, i) => (
              <div key={i} className="pashu-mission-card">
                <div className="pashu-mission-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pashu-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="pashu-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Building a More Humane World</h2>
            <p>
              Every animal rescued, fed, and cared for is a victory for compassion. Through
              Project Pashu Premi, we have brought hope to countless stray and vulnerable
              animals, providing them with nourishment, medical care, and a safe haven.
            </p>
            <p>
              Each life saved, each injury treated, each full belly — these are the milestones
              that drive us forward. Your support helps us create a world where no animal is
              left behind or forgotten.
            </p>
          </div>
        </div>
      </section>

      <section className="pashu-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="pashu-stats-grid">
          <div className="pashu-stat">
            <span className="pashu-stat-number">2000+</span>
            <span className="pashu-stat-label">Animals Fed</span>
          </div>
          <div className="pashu-stat">
            <span className="pashu-stat-number">500+</span>
            <span className="pashu-stat-label">Rescues</span>
          </div>
          <div className="pashu-stat">
            <span className="pashu-stat-number">50+</span>
            <span className="pashu-stat-label">Vaccination Drives</span>
          </div>
          <div className="pashu-stat">
            <span className="pashu-stat-number">1000+</span>
            <span className="pashu-stat-label">Medical Treatments</span>
          </div>
        </div>
      </section>

      <section className="pashu-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Compassion</h2>
          <p className="section-subtitle">Every life matters — celebrating the animals we've helped together</p>
          <div className="pashu-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="pashu-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="pashu-gallery-overlay">
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

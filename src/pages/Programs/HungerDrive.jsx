import { useEffect, useRef } from "react";
import "./HungerDrive.css";

const galleryImages = [
  { id: 1, src: "/images/ZeroHunger/img2.jpg", alt: "Food Distribution" },
  { id: 2, src: "/images/ZeroHunger/img3.jpg", alt: "Meal Preparation" },
  { id: 3, src: "/images/ZeroHunger/img4.jpg", alt: "Community Kitchen" },
  { id: 4, src: "/images/ZeroHunger/img5.jpg", alt: "Food Packets" },
  { id: 5, src: "/images/ZeroHunger/img6.jpg", alt: "Volunteers Serving" },
  { id: 6, src: "/images/ZeroHunger/img1.jpg", alt: "Happy Children Eating" },
];

const missions = [
  {
    title: "Monthly Food Kits",
    desc: "We distribute essential food kits containing rice, wheat flour, rava, poha, oil, masala, and more to BPL families and individuals in need across Mumbai's slums.",
  },
  {
    title: "Reaching the Most Vulnerable",
    desc: "Our focus is on senior citizens, Divyang members, visually impaired individuals, homeless people, and those who struggle daily to find a single meal.",
  },
  {
    title: "Ending Hunger Together",
    desc: "Through community support and collective action, we aim to eliminate hunger-related deaths and ensure no one sleeps hungry in Mumbai.",
  },
];

export default function HungerDrive() {
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
    <div className="hunger-page">
      <section className="hunger-hero">
        <div className="hunger-overlay">
          <div className="hunger-hero-content">
            {/* <span className="hunger-hero-tag" ref={(el) => (sectionRefs.current[0] = el)}>PROJECT ZERO HUNGER DRIVE</span> */}
            {/* <h1 ref={(el) => (sectionRefs.current[1] = el)}>Ending Hunger,<br />One Meal at a Time</h1> */}
            <p ref={(el) => (sectionRefs.current[2] = el)}>
              {/* Dedicated to providing essential food to those in dire need — because no one should
              go to bed hungry in Mumbai's slums or anywhere in India. */}
            </p>
          </div>
        </div>
      </section>

      <section className="hunger-intro" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="hunger-intro-grid">
            <div className="hunger-intro-text">
              <span className="section-tag">WELCOME TO</span>
              <h2>Project Zero Hunger Drive</h2>
              <p>
                At <strong>AFLF (Ashray for Life Foundation)</strong>, Project "Zero Hunger Drive" is dedicated to
                providing essential food to those who are in dire need, as countless individuals in Mumbai's slums and
                across India go without food, resulting in tragic hunger-related deaths.
              </p>
              <p>
                Our mission is to combat this issue through monthly food kit distributions. These kits contain items
                such as rice, wheat flour, rava, poha, oil, masala, and more, which are distributed to Below Poverty
                Line (BPL) families, senior citizens, Divyang members, visually impaired individuals, as well as
                those who are homeless and in need in Mumbai.
              </p>
              <p className="hunger-quote">
                "There are miles to go before we AFLF sleep — because in Mumbai's slums, many people are left hungry.
                We are hungry for change, and together, we can feed the hungry."
              </p>
            </div>
            <div className="hunger-intro-image">
              <img
                src="/images/ZeroHunger/img1.jpg"
                alt="Food distribution"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hunger-mission" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            Through Project Zero Hunger Drive, we are fighting to end hunger and malnutrition
          </p>
          <div className="hunger-mission-grid">
            {missions.map((m, i) => (
              <div key={i} className="hunger-mission-card">
                <div className="hunger-mission-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hunger-impact" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="hunger-impact-content">
            <span className="section-tag">OUR IMPACT</span>
            <h2>Fighting Hunger, Restoring Hope</h2>
            <p>
              Through Project Zero Hunger Drive, we have witnessed the transformation of lives. Families who once
              struggled to find a single meal now receive consistent support. Children who went to school hungry
              now have the nutrition they need to learn and grow.
            </p>
            <p>
              Every food kit distributed, every family supported, every life touched — these are the milestones
              that drive us forward. Together, we are building a community where no one has to suffer from hunger.
            </p>
          </div>
        </div>
      </section>

      <section className="hunger-stats" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="hunger-stats-grid">
          <div className="hunger-stat">
            <span className="hunger-stat-number">10,000+</span>
            <span className="hunger-stat-label">Food Kits Distributed</span>
          </div>
          <div className="hunger-stat">
            <span className="hunger-stat-number">5,000+</span>
            <span className="hunger-stat-label">Families Supported</span>
          </div>
          <div className="hunger-stat">
            <span className="hunger-stat-number">50+</span>
            <span className="hunger-stat-label">Slums Reached</span>
          </div>
          <div className="hunger-stat">
            <span className="hunger-stat-number">24/7</span>
            <span className="hunger-stat-label">Community Service</span>
          </div>
        </div>
      </section>

      <section className="hunger-gallery" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container">
          <h2>Moments of Hope</h2>
          <p className="section-subtitle">Every meal shared is a step toward a hunger-free world</p>
          <div className="hunger-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="hunger-gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="hunger-gallery-overlay">
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

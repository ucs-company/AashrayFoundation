import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/Gallery/Gallery";
import Button from "../../components/Common/Button";
import galleryData from "../../data/galleryData";
import programsData from "../../data/programsData";
import PlanCanadaSection from "../../components/Common/PlanCanadaSection ";
import "./Home.css";

const stories = [
  {
    id: 1,
    tag: "Health & Education",
    title: "Girls in Football: A Referee's Story",
    image:
      "https://plca-p-001.sitecorecontenthub.cloud/api/public/content/81e0a760d0d94ed1b7a46d76ec529131?v=510cce9c",
    description:
      "What does it take to become a female referee in a male-dominated field?",
  },
  {
    id: 2,
    tag: "Crisis Response & Climate",
    title: "Sudan: What's Happening Now?",
    image:
      "https://plca-p-001.sitecorecontenthub.cloud/api/public/content/4fba3ac4e269428e9a7bbbe12f3b50bf?v=3981497d",
    description: "A look at the ongoing crisis and response efforts.",
  },
];

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    document
      .querySelectorAll(".spotlight-card, .involve-card, .story-card")
      .forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(card);
      });

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const btn = e.target.querySelector("button");

    if (input.value.trim()) {
      btn.textContent = "Subscribed!";
      btn.style.background = "#2e7d32";
      input.value = "";

      setTimeout(() => {
        btn.textContent = "Sign Up";
        btn.style.background = "";
      }, 3000);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-slider">
        <div className="hero-slide">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1>Creating A Better Future Together</h1>
            <p>
              Supporting education, healthcare and social welfare initiatives.
            </p>

            <div className="hero-buttons">
              <a href="#" className="btn-primary">Donate Now</a>
              {/* <a href="#" className="btn-secondary">Learn More</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="spotlight-wrapper">
        <div className="spotlight-header">
          <h2 className="title-badge">Our Projects</h2>
        </div>

        <div className="spotlight-content">
          <Gallery items={galleryData} type="spotlight" />
        </div>
      </section>

      <PlanCanadaSection />

      {/* GET INVOLVED
      <section className="get-involved">
        <div className="container">
          <h2>Get Involved</h2>
          <p className="section-sub">
            See how you can get involved with us today.
          </p>

          <div className="involve-grid">
            {programsData.map((program) => (
              <div key={program.id} className="involve-card">
                <img src={program.image} alt={program.title} />
                <h4>{program.title}</h4>
                <p>{program.description}</p>
                <Button variant="outline">
                  {program.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* STORIES */}
      <section className="stories">
        <div className="container">
          <h2>Our Stories</h2>

          <div className="stories-grid">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                <img src={story.image} alt={story.title} />
                <div className="story-body">
                  <span className="story-tag">{story.tag}</span>
                  <h4>{story.title}</h4>
                  <p>{story.description}</p>
                  <a href="#">Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="donate-cta">
        <div className="container">
          <h2>Donate today</h2>
          <p>Help advance children's rights and equality for girls today.</p>
          <Button variant="donate-lg">Donate now</Button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="container">
          <h3>Sign up for newsletter</h3>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
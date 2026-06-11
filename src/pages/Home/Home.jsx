import { useEffect} from "react";
import Hero from "../../components/Hero/Hero";
import Button from "../../components/Common/Button";
import galleryData from "../../data/galleryData";
import programsData from "../../data/programsData";
import PlanCanadaSection from "../../components/Common/PlanCanadaSection ";
import Partners from "../../components/Partners/Partners";
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


{/* about */}

<section className="about-home-section">
  <div className="container">

    <div className="about-home-header">
      <span className="about-badge">About Us</span>

      <h2>
        Building Hope, Transforming Lives
      </h2>

      <p>
        Ashray for Life Foundation (AFLF) is dedicated to supporting
        underprivileged children, orphans, daily wage workers’ families,
        senior citizens, women, Divyang individuals, and the visually
        impaired. Through education, healthcare, awareness programs,
        and community development initiatives, we strive to create
        opportunities that empower lives and strengthen communities.
      </p>
    </div>

    <div className="about-home-grid">

      <div className="about-content-card">
        <h3>Who We Are</h3>

        <p>
          AFLF works tirelessly to improve the lives of vulnerable
          communities by providing access to education, healthcare,
          nutrition, clean drinking water, and social support.
        </p>

        <p>
          We also create awareness about road safety, health,
          hygiene, and important social issues, helping citizens
          make informed decisions for a better future.
        </p>

        <div className="about-highlight">
          Together, we can create a world where every child has
          the opportunity to learn, grow, and thrive.
        </div>
      </div>

      <div className="mission-vision-wrapper">

        <div className="mv-card mission-card">
          

          <h3>Our Mission</h3>

          <p>
            To empower underprivileged children, orphans, and families
            through education, health awareness, community support,
            and access to clean drinking water while creating pathways
            toward a brighter future.
          </p>
        </div>

        <div className="mv-card vision-card">
         

          <h3>Our Vision</h3>

          <p>
            A world where every child receives quality education,
            lives a healthy life, and has the opportunity to break
            free from poverty, creating stronger and more vibrant
            communities.
          </p>
        </div>
        
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
          <div className="spotlight-track-wrapper">
            <div className="spotlight-track">
              <div className="spotlight-track-inner">
                {galleryData.map((item) => (
                  <div key={item.id} className="spotlight-card">
                    <img src={item.image} alt={item.title} />
                    <div className="spotlight-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Button variant="link">Learn more &rarr;</Button>
                    </div>
                  </div>
                ))}
                {galleryData.map((item) => (
                  <div key={`dup-${item.id}`} className="spotlight-card">
                    <img src={item.image} alt={item.title} />
                    <div className="spotlight-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Button variant="link">Learn more &rarr;</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlanCanadaSection />

      <Partners />

      {/* STORIES
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
 */}

            






      {/* DONATE
      <section className="donate-cta">
        <div className="container">
          <h2>Donate today</h2>
          <p>Help advance children's rights and equality for girls today.</p>
          <Button variant="donate-lg">Donate now</Button>
        </div>
      </section> */}

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
import { useState } from "react";
import "./About.css";

const teamMembers = [
  { id: 1, name: "Mr. Naresh Bhanushali", role: "President", photo: "/images/team/naresh-bhanushali.jpg" },
  { id: 2, name: "Mr. Mihir Shah", role: "Secretary", photo: "/images/team/mihir-shah.jpg" },
  { id: 3, name: "Mr. Jatin Nirmal", role: "Project Coordinator", photo: "/images/team/jatin-nirmal.jpg" },
  { id: 4, name: "Mrs. Prachi Dhanawade", role: "Accounts Executive", photo: "/images/team/prachi-dhanawade.jpg" },
  { id: 5, name: "Mr. Deepak Karkera", role: "Fundraising Head", photo: "/images/team/deepak-karkera.jpg" },
  { id: 6, name: "Ms. Deepa Gupta", role: "Core Team Member", photo: "/images/team/deepa-gupta.jpg" },
  { id: 7, name: "Mrs. Kshitija Jadhav", role: "Core Team Member", photo: "/images/team/kshitija-jadhav.jpg" },
  { id: 8, name: "Mrs. Varsha Sakhariya", role: "Project Head", photo: "/images/team/varsha-sakhariya.jpg" },
  { id: 9, name: "Mrs. Pooja Pal", role: "Core Team Member", photo: "/images/team/pooja-pal.jpg" },
  { id: 10, name: "Miss. Hiral Waghela", role: "Core Team Member", photo: "/images/team/hiral-waghela.jpg" },
];

const initials = (name) => {
  const parts = name.replace(/^(Mr|Mrs|Ms|Miss)\.\s*/, "").split(" ");
  return parts.map((p) => p[0]).join("").slice(0, 2);
};

const stripPrefix = (name) => name.replace(/^(Mr|Mrs|Ms|Miss)\.\s*/, "");

function ManagementTeam() {
  const [imgError, setImgError] = useState({});

  return (
    <main className="page-about">
      <section className="page-hero page-hero--team">
        <div className="container">
          <span className="hero-badge-pill">Board of Trustees</span>
          <h1>Management Team</h1>
          <p>Meet the dedicated individuals steering Ashray for Life Foundation toward a brighter future.</p>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-heading">
            <h2>Board of Trustees / Executive Committee</h2>
            <p>The following individuals constitute the Board of Trustees and Executive Committee, entrusted with the governance, administration, strategic planning, and smooth functioning of the Trust.</p>
          </div>
          <div className="team-members-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="team-member-photo">
                  {imgError[member.id] ? (
                    <div className="team-member-initials">{initials(member.name)}</div>
                  ) : (
                    <img
                      src={member.photo}
                      alt={stripPrefix(member.name)}
                      onError={() => setImgError((prev) => ({ ...prev, [member.id]: true }))}
                    />
                  )}
                </div>
                <div className="team-member-info">
                  <h3>{stripPrefix(member.name)}</h3>
                  <span className="team-member-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ManagementTeam;

import { Link } from 'react-router-dom';
import './Footer.css';

const footerSections = [
  {
    title: 'About us',
    links: [
      { label: 'Our mission', path: '/about' },
      { label: 'Our people', path: '/about' },
      { label: 'Our partnerships', path: '/about' },
      { label: 'Financial accountability', path: '/about' },
    ],
  },
  {
    title: 'Ways to Give',
    links: [
      { label: 'Donate', path: '/donate' },
      { label: 'Give a gift of hope', path: '/donate' },
      { label: 'Emergency appeals', path: '/donate' },
      { label: 'Legacy Gifts in Your Will', path: '/donate' },
    ],
  },
  {
    title: 'Get involved',
    links: [
      { label: 'Youth Programs', path: '/volunteer' },
      { label: 'Girls Belong Here', path: '/volunteer' },
      { label: 'Corporate Partnerships', path: '/volunteer' },
      { label: 'Fundraising', path: '/volunteer' },
    ],
  },
  {
    title: 'Sponsor a child',
    links: [
      { label: 'Find a child', path: '#' },
      { label: 'Sponsorship FAQ', path: '#' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'FAQs', path: '#' },
      { label: 'Contact us', path: '/contact' },
      { label: 'Live chat', path: '#' },
      { label: 'Media & press releases', path: '#' },
    ],
  },
];

const socialLinks = ['Instagram', 'Twitter / X', 'Facebook', 'YouTube', 'LinkedIn'];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {footerSections.map((section) => (
          <div key={section.title} className="footer-col">
            <h5>{section.title}</h5>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-social">
        {socialLinks.map((platform) => (
          <Link key={platform} to="#">{platform}</Link>
        ))}
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Plan International Canada Inc. Because I am a Girl, and Spread the Net names and associated logos are trademarks of Plan International Canada Inc.</p>
        <p>CRA Charity Registration Number: 11892 8993 RR0001</p>
        <div className="footer-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms &amp; Conditions</Link>
          <Link to="#">Safeguarding policy</Link>
          <Link to="#">Donor rights</Link>
          <Link to="#">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

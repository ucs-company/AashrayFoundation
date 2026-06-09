import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';
import './Navbar.css';

// const navLinks = [
//   { label: 'About us', path: '/about' },
//   { label: 'Our programs', path: '/programs' },
//   { label: 'Stories', path: '/gallery' },
//   { label: 'Get involved', path: '/volunteer' },
//   { label: 'Ways to Give', path: '/donate' },
// ];
const navLinks = [
  { label: 'About Us', path: '/about' },
  {
    label: 'Our Programs',
    path: '/programs',
    dropdown: [
      { label: 'Education', path: '/programs/education' },
      { label: 'Women Empowerment', path: '/programs/women-empowerment' },
      { label: 'Zero Hunger Drive', path: '/programs/zero-hunger-drive' },
      { label: 'JAL Project', path: '/programs/jal-project' },
      { label: 'Orphanage', path: '/programs/orphanage' },
      { label: 'Medical (Life-Line)', path: '/programs/medical' },
      { label: 'Old Age Home (Sahara)', path: '/programs/old-age-home' },
    ],
  },
  { label: 'Stories', path: '/gallery' },
  { label: 'Get Involved', path: '/volunteer' },
  { label: 'Ways to Give', path: '/donate' },
];




function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span><Link to="#">FR</Link></span>
          <span><Link to="/contact">Contact us</Link></span>
          <span><Link to="#">Support</Link></span>
          <span><Link to="#" className="btn-hope">Shop Gifts of Hope</Link></span>
        </div>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <img
                src="/images/Ashray Foundation logo.png"
                alt="Ashray Foundation"
              />
            </Link>
          </div>
          {/* <nav className="nav">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>{link.label}</Link>
            ))}
          </nav> */}
          <nav className="nav">
  {navLinks.map((link) => (
    <div className="nav-item" key={link.path}>
      <Link to={link.path}>{link.label}</Link>

      {link.dropdown && (
        <div className="dropdown-menu">
          {link.dropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="dropdown-link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>

          <div className="header-ctas">
            <Button variant="sponsor">Sponsor a Child</Button>
            <Button variant="donate">Donate</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

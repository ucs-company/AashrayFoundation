import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Programs from '../pages/Programs/Programs';
import GalleryPage from '../pages/Gallery/GalleryPage';
import Donate from '../pages/Donate/Donate';
import Volunteer from '../pages/Volunteer/Volunteer';
import Contact from '../pages/Contact/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;

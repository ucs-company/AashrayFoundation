import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Programs from '../pages/Programs/Programs';
import GalleryPage from '../pages/Gallery/GalleryPage';
import Donate from '../pages/Donate/Donate';
import Volunteer from '../pages/Volunteer/Volunteer';
import Contact from '../pages/Contact/Contact';
import Medical from '../pages/Programs/Medical';
import Education from '../pages/Programs/Education';
import HungerDrive from '../pages/Programs/HungerDrive';
import JalProject from '../pages/Programs/JalProject';
import WomenEmpowerment from '../pages/Programs/WomenEmpowerment';
import MedicalSupport from '../pages/Appeals/AppealsMedical';
// import Appealsfoodgrains from '../pages/Appeals/Appealsfoodgrains';
// import Appealseducation from '../pages/Appeals/Appealseducation';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/medical" element={<Medical />} />
      <Route path="/programs/education" element={<Education />} />
      <Route path="/programs/women-empowerment" element={<WomenEmpowerment />} />
      <Route path="/programs/zero-hunger-drive" element={<HungerDrive />} />
      <Route path="/programs/jal-project" element={<JalProject />} />
      <Route path="/programs/orphanage" element={<Programs />} />
      <Route path="/programs/old-age-home" element={<Programs />} />

      {/* APPEALS */}
      <Route path="/Appeals/Medical" element={<MedicalSupport />} />
      {/* <Route path="/appeals/foodgrains" element={<Appealsfoodgrains />} /> */}
      {/* <Route path="/appeals/education" element={<Appealseducation />} /> */}

      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
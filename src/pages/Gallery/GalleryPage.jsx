import galleryData from '../../data/galleryData';
import Gallery from '../../components/Gallery/Gallery';
import './GalleryPage.css';

function GalleryPage() {
  return (
    <main className="page-gallery">
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our stories and see the impact of your support around the world.</p>
        </div>
      </section>

      <section className="container gallery-content">
        <h2>Spotlight Stories</h2>
        <Gallery items={galleryData} type="spotlight" />
      </section>
    </main>
  );
}

export default GalleryPage;

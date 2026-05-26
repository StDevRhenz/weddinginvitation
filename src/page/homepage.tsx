// import heroImage from '../assets/hero.png'
import girlsImage from '../assets/images/girls.png'
import boysImage from '../assets/images/boys.png'
import '../App.css'

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Wedding Invitation</p>
          <h1>Two hearts, one beautiful beginning.</h1>
          <p className="lead">
            Welcome to our home page. This invitation layout is set up as a clean
            starting point for the wedding site, with the main story, event
            details, and featured photos all in one place.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#details">
              View details
            </a>
            <a className="secondary-button" href="#story">
              Read the story
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-accent hero-card-left">
            <img src={girlsImage} alt="Bride portrait" />
          </div>
          <div className="hero-card hero-card-accent hero-card-right">
            <img src={boysImage} alt="Groom portrait" />
          </div>
        </div>
      </section>

      <section className="info-grid" id="details">
        <article className="info-card">
          <p className="card-label">Date</p>
          <h2>Saturday, June 20, 2026</h2>
          <p>Ceremony and celebration to follow in the evening.</p>
        </article>
        <article className="info-card">
          <p className="card-label">Venue</p>
          <h2>Garden Hall</h2>
          <p>A warm, elegant setting for family and close friends.</p>
        </article>
        <article className="info-card">
          <p className="card-label">Dress code</p>
          <h2>Formal garden attire</h2>
          <p>Soft colors, polished details, and comfortable shoes.</p>
        </article>
      </section>

      <section className="story-section" id="story">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2>A simple page structure that is ready for your invitation content.</h2>
        </div>
        <p>
          This homepage is intentionally lightweight so it can be expanded with
          names, countdowns, RSVP links, and ceremony information without
          reworking the app shell later.
        </p>
      </section>
    </main>
  )
}

export default HomePage
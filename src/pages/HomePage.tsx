import { CONTENT } from '../constants/content';
import { useBooking } from '../context/BookingContext';

const HomePage = () => {
  const { openBooking } = useBooking();

  return (
    <div className="home-content">
      {/* 1. Hero Section */}
      <section className="hero reveal">
        <span className="badge">Ingeniería de Libertad</span>
        <h1 className="hero-title">{CONTENT.hero.title}</h1>
        <p className="hero-subtitle">{CONTENT.hero.subtitle}</p>
        <button className="cta-button" onClick={openBooking}>
          {CONTENT.hero.cta}
        </button>
      </section>

      {/* 2. Plan Maestro (The Funnel Entry) */}
      <section className="plan-maestro-funnel reveal">
        <div className="funnel-card">
          <span className="featured-tag">{CONTENT.planMaestro.badge}</span>
          <h2 className="funnel-title">{CONTENT.planMaestro.title}</h2>
          <p className="funnel-highlight">{CONTENT.planMaestro.highlight}</p>
          <p className="funnel-desc">{CONTENT.planMaestro.description}</p>
          <button className="funnel-cta" onClick={openBooking}>
            {CONTENT.planMaestro.cta}
          </button>
        </div>
      </section>

      {/* 3. Partner Stack (The Dimensions) */}
      <section className="dimensions-section reveal">
        <h2 className="section-title">Partner Stack</h2>
        <div className="dimensions-grid">
          {CONTENT.dimensions.map((dim) => (
            <div key={dim.id} className="dimension-card">
              <span className="dim-tag">{dim.tag}</span>
              <h3>{dim.title}</h3>
              <p>{dim.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Final Goal (Founder/Investor Frame) */}
      <section className="final-goal-section reveal">
        <div className="final-goal-card">
          <span className="dim-tag">{CONTENT.finalGoal.tag}</span>
          <h2 className="final-goal-title">{CONTENT.finalGoal.title}</h2>
          <p className="final-goal-text">{CONTENT.finalGoal.description}</p>
          <button className="cta-button outline" onClick={openBooking}>
            {CONTENT.finalGoal.cta}
          </button>
        </div>
      </section>

      <style>{`
        .home-content {
          max-width: var(--max-width-content);
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero {
          text-align: center;
          padding: var(--section-padding) 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }

        .badge {
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: 2.5rem;
          color: var(--text-primary);
          opacity: 0.8;
          border-bottom: 2px solid var(--text-primary);
          padding-bottom: 0.5rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          margin-bottom: 2rem;
          line-height: 1;
          max-width: 950px;
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.6rem);
          color: var(--text-secondary);
          margin-bottom: 4rem;
          max-width: var(--max-width-text);
          line-height: 1.6;
        }

        .cta-button {
          padding: 1.25rem 4rem;
          font-family: 'Oswald', sans-serif;
          font-size: 1.2rem;
          background: var(--text-primary);
          color: var(--bg-color);
          border: none;
          cursor: pointer;
          transition: var(--transition-fast);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }

        .cta-button.outline {
          background: transparent;
          border: 1.5px solid var(--text-primary);
          color: var(--text-primary);
          box-shadow: none;
        }

        .cta-button.outline:hover {
          background: var(--text-primary);
          color: var(--bg-color);
        }

        .plan-maestro-funnel {
          padding: var(--section-padding) 0;
        }

        .funnel-card {
          padding: clamp(3rem, 10vw, 6rem) clamp(1.5rem, 5vw, 4rem);
          background: var(--text-primary);
          color: var(--bg-color);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .featured-tag {
          font-family: 'Oswald', sans-serif;
          font-size: 0.75rem;
          background: #e63946;
          color: white;
          padding: 0.4rem 1.5rem;
          margin-bottom: 2.5rem;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .funnel-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          margin-bottom: 1rem;
        }

        .funnel-highlight {
          font-size: clamp(1.2rem, 4vw, 2rem);
          margin: 1.5rem 0 2rem;
          font-family: 'Oswald', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.9;
        }

        .funnel-desc {
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          line-height: 1.7;
          max-width: 800px;
          margin-bottom: 4rem;
          opacity: 0.85;
        }

        .funnel-cta {
          padding: 1.25rem 3.5rem;
          font-family: 'Oswald', sans-serif;
          border: 2px solid var(--bg-color);
          background: transparent;
          color: var(--bg-color);
          cursor: pointer;
          font-size: 1.1rem;
          text-transform: uppercase;
          transition: var(--transition-fast);
          letter-spacing: 0.1em;
        }

        .funnel-cta:hover {
          background: var(--bg-color);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 5rem;
          text-align: center;
          font-weight: 600;
        }

        .dimensions-section {
          padding: var(--section-padding) 0;
        }

        .dimensions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .dimension-card {
          padding: clamp(2rem, 5vw, 4rem);
          border: 1px solid var(--text-primary);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: var(--transition-smooth);
          height: 100%;
        }

        .dimension-card:hover {
          transform: translateY(-12px);
          background: var(--text-primary);
          color: var(--bg-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: transparent;
        }

        .dim-tag {
          font-family: 'Oswald', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          opacity: 0.6;
          letter-spacing: 0.15em;
        }

        .dimension-card h3 {
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          line-height: 1.1;
        }

        .dimension-card p {
          font-size: 1.1rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .final-goal-section {
          padding: var(--section-padding) 0;
          border-top: 1px solid rgba(128, 128, 128, 0.2);
          margin-top: 4rem;
        }

        .final-goal-card {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .final-goal-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
        }

        .final-goal-text {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: var(--max-width-text);
        }

        @media (max-width: 768px) {
          .home-content { padding: 0 1.5rem; }
          .hero { min-height: 70vh; }
          .hero-title { line-height: 1.1; }
          .dimensions-grid { gap: 1.5rem; }
          .dimension-card { padding: 2.5rem 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

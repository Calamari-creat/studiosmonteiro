import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Home.css'

const specialties = [
  { title: 'Blackwork', desc: 'Tatuagens em preto denso com traços marcantes e sombreamento preciso.' },
  { title: 'Realismo', desc: 'Retratos e artes realistas em preto e cinza ou colorido com detalhes impressionantes.' },
  { title: 'Animes', desc: 'Personagens e cenas de animes com fidelidade ao estilo original.' },
  { title: 'Florais', desc: 'Composições florais delicadas e elegantes para todos os gostos.' },
]

const highlights = [
  { number: '8+', label: 'Anos de Experiência' },
  { number: '500+', label: 'Tatuagens Realizadas' },
  { number: '98%', label: 'Clientes Satisfeitos' },
  { number: '1', label: 'Artista Especializado' },
]

export default function Home() {
  useScrollReveal()
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Arte na Pele<br />
            <span className="hero-accent">Studios Monteiro</span>
          </h1>
            <p className="hero-subtitle">
            Especialista em blackwork, realismo, animes e florais.
            Transformando idéias em obras de arte na pele.
          </p>
          <div className="hero-actions">
            <Link to="/galeria" className="btn btn-primary">Ver Portfólio</Link>
            <Link to="/contato" className="btn">Agende seu Orçamento</Link>
          </div>
        </div>
      </section>

      <section className="section specialties">
        <div className="container">
          <h2 className="section-title reveal">Especialidades</h2>
          <div className="divider reveal"></div>
          <p className="section-subtitle reveal">Do blackwork aos florais, a arte certa para você</p>
          <div className="specialties-grid">
            {specialties.map((s, i) => (
              <div key={s.title} className={`specialty-card reveal reveal-delay-${i + 1}`}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section highlights">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div key={h.label} className={`highlight-item reveal reveal-delay-${i + 1}`}>
                <span className="highlight-number">{h.number}</span>
                <span className="highlight-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-content">
          <h2 className="cta-title reveal">Pronto para fazer sua tatuagem?</h2>
          <p className="cta-text reveal">Entre em contato e agende uma visita. Vamos criar algo incrível juntos.</p>
          <Link to="/contato" className="btn btn-primary reveal">Entre em Contato</Link>
        </div>
      </section>
    </>
  )
}

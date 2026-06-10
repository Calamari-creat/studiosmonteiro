import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Studios<span className="logo-accent">Monteiro</span></h3>
            <p className="footer-desc">
              Tatuagem de alta qualidade em Nova Iguaçu, RJ. Especialista em blackwork, realismo, animes e florais.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <Link to="/">Home</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/artistas">Artistas</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/contato">Contato</Link>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>Estr. da Gama, 410 - Oliveira, Nova Iguaçu - RJ</p>
            <p>(21) 98216-3922</p>
            <p>contato@studiosmonteiro.com</p>
            <div className="social-links">
              <a href="https://instagram.com/studiosmonteiro" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://wa.me/5521982163922" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Calamari.dev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

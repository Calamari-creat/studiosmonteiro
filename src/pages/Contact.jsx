import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  useScrollReveal()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const message = formData.get('message')
    const phone = formData.get('phone')
    const text = encodeURIComponent(`Olá! Me chamo ${name}. WhatsApp: ${phone}. ${message}`)
    window.open(`https://wa.me/5521982163922?text=${text}`, '_blank', 'noopener')
  }

  return (
    <section className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title reveal">Contato</h1>
          <div className="divider reveal"></div>
          <p className="section-subtitle reveal">Vamos criar algo incrível juntos</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item reveal">
              <h4>Endereço</h4>
              <p>Estr. da Gama, 410 - Oliveira, Nova Iguaçu - RJ</p>
            </div>
            <div className="contact-item reveal">
              <h4>Telefone</h4>
              <p>(21) 98216-3922</p>
            </div>
            <div className="contact-item reveal">
              <h4>Email</h4>
              <p>contato@studiosmonteiro.com</p>
            </div>
            <div className="contact-item reveal">
              <h4>Horários</h4>
              <p>Seg - Sáb: 10h - 20h</p>
              <p>Dom: Fechado</p>
            </div>
            <div className="contact-item reveal">
              <h4>Redes Sociais</h4>
              <div className="contact-social">
                <a href="https://instagram.com/studiosmonteiro" target="_blank" rel="noopener noreferrer" className="btn-social btn-instagram">Instagram</a>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <h3>Solicite seu Orçamento</h3>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required maxLength="100" placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">WhatsApp</label>
              <input type="tel" id="phone" name="phone" required maxLength="20" pattern="[\s()\d\-]{8,20}" placeholder="(31) 99999-9999" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="4" required maxLength="500" placeholder="Conte sobre sua idéia: estilo, tamanho, local do corpo..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

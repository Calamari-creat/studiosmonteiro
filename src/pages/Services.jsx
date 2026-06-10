import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Services.css'

const services = [
  {
    title: 'Tatuagem Personalizada',
    desc: 'Criação exclusiva do zero baseada na sua idéia. Inclui consultoria de design e adaptação para o melhor resultado.',
    price: 'Consultar',
    features: ['Design exclusivo', 'Adaptação anatômica', 'Sessão de desenho inclusa', 'Retoque gratuito em 30 dias'],
  },
  {
    title: 'Cover Up',
    desc: 'Cobertura de tatuagens antigas ou indesejadas. Transformamos seu antigo desenho em uma nova obra de arte.',
    price: 'Consultar',
    features: ['Avaliação gratuita', 'Design especializado', 'Cobertura total ou parcial', 'Resultado garantido'],
  },
  {
    title: 'Retoques e Finalizações',
    desc: 'Serviço de retoque para tatuagens que precisam de revitalização ou finalização de trabalhos incompletos.',
    price: 'A partir de R$ 150',
    features: ['Retoque de cores', 'Reforço de traços', 'Finalização de projetos', 'Avaliação sem compromisso'],
  },
]

const pricing = [
  { size: 'Pequena (até 5cm)', time: '1-2 horas', from: 'R$ 200' },
  { size: 'Média (5-15cm)', time: '2-4 horas', from: 'R$ 400' },
  { size: 'Grande (15-30cm)', time: '4-8 horas', from: 'R$ 800' },
  { size: 'Fechamento/mangá', time: 'Múltiplas sessões', from: 'Consultar' },
]

export default function Services() {
  useScrollReveal()
  return (
    <section className="services-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title reveal">Serviços & Preços</h1>
          <div className="divider reveal"></div>
          <p className="section-subtitle reveal">Transparência e qualidade em cada serviço</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={service.title} className={`service-card reveal reveal-delay-${i + 1}`}>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.desc}</p>
              <p className="service-price">{service.price}</p>
              <ul className="service-features">
                {service.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-section">
          <h2 className="section-title reveal">Tabela de Preços</h2>
          <div className="divider reveal"></div>
          <p className="section-subtitle reveal">Baseado no tamanho e complexidade</p>

          <div className="pricing-table">
            {pricing.map((p, i) => (
              <div key={p.size} className={`pricing-row reveal reveal-delay-${i + 1}`}>
                <div className="pricing-info">
                  <h4>{p.size}</h4>
                  <span className="pricing-time">{p.time}</span>
                </div>
                <span className="pricing-value">{p.from}</span>
              </div>
            ))}
          </div>

          <p className="pricing-note reveal">
            * Preços podem variar conforme complexidade do desenho e quantidade de detalhes.
            Entre em contato para um orçamento personalizado.
          </p>

          <div className="services-cta reveal">
            <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

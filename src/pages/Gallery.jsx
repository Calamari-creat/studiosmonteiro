import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Gallery.css'

const categories = ['Todas', 'Blackwork', 'Realismo', 'Animes', 'Florais']

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80', alt: 'Tatuagem blackwork', category: 'Blackwork' },
  { id: 2, src: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80', alt: 'Tatuagem realista', category: 'Realismo' },
  { id: 3, src: 'https://images.unsplash.com/photo-1590247813693-5541d1c73fd6?w=600&q=80', alt: 'Tatuagem floral', category: 'Florais' },
  { id: 4, src: 'https://images.unsplash.com/photo-1564557053-46c6822fbcf3?w=600&q=80', alt: 'Tatuagem preto e cinza', category: 'Blackwork' },
  { id: 5, src: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=600&q=80', alt: 'Tatuagem colorida realista', category: 'Realismo' },
  { id: 6, src: 'https://images.unsplash.com/photo-1611211238613-f09f7a85ae6e?w=600&q=80', alt: 'Tatuagem floral delicada', category: 'Florais' },
  { id: 7, src: 'https://images.unsplash.com/photo-1612450632006-510342759e45?w=600&q=80', alt: 'Tatuagem blackwork braço', category: 'Blackwork' },
  { id: 8, src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80', alt: 'Tatuagem de dragão', category: 'Animes' },
  { id: 9, src: 'https://images.unsplash.com/photo-1607602750534-4cd395fde73d?w=600&q=80', alt: 'Tatuagem de flor de lótus', category: 'Florais' },
  { id: 10, src: 'https://images.unsplash.com/photo-1612966872491-3aa66b7dd081?w=600&q=80', alt: 'Tatuagem realista retrato', category: 'Realismo' },
  { id: 11, src: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=600&q=80', alt: 'Tatuagem anime personagem', category: 'Animes' },
  { id: 12, src: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80', alt: 'Tatuagem mandala blackwork', category: 'Blackwork' },
]

export default function Gallery() {
  useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filtered = activeCategory === 'Todas'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section className="gallery-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title reveal">Galeria</h1>
          <div className="divider reveal"></div>
          <p className="section-subtitle reveal">Conheça nosso portfólio de trabalhos</p>
        </div>

        <div className="gallery-filters reveal">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

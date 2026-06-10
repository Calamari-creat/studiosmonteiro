import useScrollReveal from '../hooks/useScrollReveal'
import './Artists.css'

const base = import.meta.env.BASE_URL

const artists = [
  {
    name: 'Leonardo Monteiro',
    role: 'Tatuador & Artista',
    specialties: ['Blackwork', 'Realismo', 'Animes', 'Florais'],
    bio: 'Artista versátil especializado em blackwork, realismo, animes e florais. Cada traço é pensado para transformar idéias em arte única na pele.',
    image: `${base}images/leonardo.jpg`,
  },
]

export default function Artists() {
  useScrollReveal()
  return (
    <section className="artists-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title reveal">Nossos Artistas</h1>
          <div className="divider reveal"></div>
          <p className="section-subtitle reveal">Conheça a equipe por trás das obras</p>
        </div>

        <div className="artists-grid">
          {artists.map(artist => (
            <div key={artist.name} className="artist-card reveal">
              <div className="artist-image">
                <img src={artist.image} alt={artist.name} loading="lazy" />
              </div>
              <div className="artist-info">
                <h2 className="artist-name">{artist.name}</h2>
                <p className="artist-role">{artist.role}</p>
                <div className="artist-specialties">
                  {artist.specialties.map(s => (
                    <span key={s} className="artist-tag">{s}</span>
                  ))}
                </div>
                <p className="artist-bio">{artist.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

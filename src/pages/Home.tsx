import { useEffect, useState } from 'react'
import { BookingCard } from '../components/BookingCard'
import { Gallery } from '../components/Gallery'
import { images, site } from '../data'

export function Home() {
  const [embedded, setEmbedded] = useState(false)

  useEffect(() => {
    try {
      setEmbedded(window.self !== window.top)
    } catch {
      setEmbedded(true)
    }
  }, [])

  return (
    <section className={embedded ? 'hero is-embed' : 'hero'}>
      <img className="hero-photo" src={images.hero} alt="The unsleptov dining room" />
      <div className="hero-copy">
        {site.notices.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {embedded ? null : <BookingCard />}
      <Gallery />
    </section>
  )
}

import { useEffect } from 'react'

export default function useScrollReveal(threshold = 0.15) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])
}

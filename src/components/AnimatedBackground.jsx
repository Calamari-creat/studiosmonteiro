import { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 4 + 1
        this.speedX = (Math.random() - 0.5) * 0.6
        this.speedY = (Math.random() - 0.5) * 0.6
        this.opacity = Math.random() * 0.6 + 0.3
        this.pulse = Math.random() * Math.PI * 2
      }
      update() {
        this.pulse += 0.01
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        const o = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse))
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 168, 76, ${o})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 150; i++) particles.push(new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="animated-bg">
      <div className="overlay-layer" />
      <canvas ref={canvasRef} className="particle-layer" />
    </div>
  )
}

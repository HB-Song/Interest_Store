import { Particle } from './Particle'

export class Effect {
  width: number
  height: number
  centerX: number
  centerY: number
  particlesArray: Array<Particle>

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.centerX = this.width * 0.5
    this.centerY = this.height * 0.5
    this.particlesArray = []
  }

  init = (count: number) => {
    for (let i = 0; i < count; i += 1) {
      this.particlesArray.push(
        new Particle(Math.random() * this.width, Math.random() * this.height),
      )
    }
  }

  draw = (context: CanvasRenderingContext2D, image: HTMLImageElement) => {
    this.particlesArray.forEach((particle) => particle.draw(context))
    context.drawImage(
      image,
      this.centerX - image.width * 0.5,
      this.centerY - image.height * 0.5,
    )
  }

  update = () => {
    this.particlesArray.forEach((particle) => particle.update())
  }
}

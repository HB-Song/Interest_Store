import { Effect } from './Effect'

export class ParticleImage {
  canvas: HTMLCanvasElement
  image: HTMLImageElement
  context: CanvasRenderingContext2D
  effect: Effect

  constructor(canvas: HTMLCanvasElement, image: HTMLImageElement) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    this.canvas = canvas
    this.image = image
    this.context = this.canvas.getContext('2d')!!
    this.effect = new Effect(this.canvas.width, this.canvas.height)
    this.effect.init(100)
  }

  draw = () => {
    this.effect.draw(this.context, this.image)
  }

  animate = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.effect.draw(this.context, this.image)
    this.effect.update()
    window.requestAnimationFrame(this.animate)
  }
}

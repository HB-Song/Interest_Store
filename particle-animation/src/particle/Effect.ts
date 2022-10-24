import { MousePosition } from './Mouse'
import { Particle } from './Particle'

export class Effect {
  width: number
  height: number
  centerX: number
  centerY: number
  imageX: number
  imageY: number
  gap: number
  image: HTMLImageElement
  context: CanvasRenderingContext2D
  particlesArray: Array<Particle>
  mouse: MousePosition

  constructor(
    context: CanvasRenderingContext2D,
    image: HTMLImageElement,
    width: number,
    height: number,
  ) {
    this.width = width
    this.height = height
    this.centerX = this.width * 0.5
    this.centerY = this.height * 0.5
    this.imageX = this.centerX - image.width * 0.5
    this.imageY = this.centerY - image.height * 0.5
    this.image = image
    this.context = context
    this.particlesArray = []
    this.gap = 3
    this.mouse = {
      radius: 3000,
      xPosition: -1,
      yPosition: -1,
    }
  }

  init = () => {
    this.context.drawImage(this.image, this.imageX, this.imageY)
    const pixels = this.context.getImageData(0, 0, this.width, this.height).data
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4
        const red = pixels[index]
        const green = pixels[index + 1]
        const blue = pixels[index + 2]
        const alpha = pixels[index + 3]
        const color = `rgb(${red},${green},${blue})`

        if (alpha > 0) {
          this.particlesArray.push(
            new Particle(
              x,
              y,
              this.width,
              this.height,
              color,
              this.gap,
              this.mouse,
            ),
          )
        }
      }
    }

    window.addEventListener('mousemove', (event) => {
      this.mouse.xPosition = event.x
      this.mouse.yPosition = event.y
    })
  }

  draw = () => {
    this.particlesArray.forEach((particle) => particle.draw(this.context))
  }

  update = () => {
    this.particlesArray.forEach((particle) => particle.update())
  }

  wrap = () => {
    this.particlesArray.forEach((particle) => particle.wrap())
  }
}

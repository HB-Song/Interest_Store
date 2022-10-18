export class Particle {
  x: number
  y: number
  size: number
  vx: number
  vy: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.size = 10
    this.vx = Math.random() * 2 - 1
    this.vy = Math.random() * 2 - 1
  }

  draw = (context: CanvasRenderingContext2D) => {
    context.fillRect(this.x, this.y, this.size, this.size)
  }

  update = () => {
    this.x += this.vx
    this.y += this.vy
  }
}

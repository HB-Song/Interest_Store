import { MousePosition } from './Mouse'
export class Particle {
  x: number
  y: number
  originX: number
  originY: number
  size: number
  vx: number
  vy: number
  dx: number
  dy: number
  distance: number
  ease: number
  width: number
  height: number
  color: string
  mouse: MousePosition
  force: number
  angle: number
  friction: number

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    size: number,
    mouse: MousePosition,
  ) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.originX = Math.floor(x)
    this.originY = Math.floor(y)
    this.color = color
    this.size = size
    this.vx = 0
    this.vy = 0
    this.ease = 0.1
    this.width = width
    this.height = height
    this.mouse = mouse
    this.dx = x
    this.dy = y
    this.distance = 0
    this.force = 0
    this.angle = 0
    this.friction = 0.8
  }

  draw = (context: CanvasRenderingContext2D) => {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.size, this.size)
  }

  update = () => {
    this.dx = this.mouse.xPosition - this.x
    this.dy = this.mouse.yPosition - this.y
    this.distance = this.dx * this.dx + this.dy * this.dy
    this.force = -this.mouse.radius / this.distance

    if (this.distance < this.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx)
      this.vx += this.force * Math.cos(this.angle)
      this.vy += this.force * Math.sin(this.angle)
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease
  }

  wrap = () => {
    this.x = Math.random() * this.width
    this.y = Math.random() * this.width
  }
}

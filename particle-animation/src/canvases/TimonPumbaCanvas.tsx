import React, { RefObject } from 'react'

const TimonPumbaCanvas = (props: TimonPumbaCanvasProps) => {
  const { canvasReference } = props
  return <canvas className="canvas" ref={canvasReference} />
}

export type TimonPumbaCanvasProps = {
  canvasReference: RefObject<HTMLCanvasElement>
}

export default TimonPumbaCanvas

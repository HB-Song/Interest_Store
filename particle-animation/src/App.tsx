import React, { RefObject, useRef, useEffect } from 'react'

import TimonPumbaCanvas from './canvases/TimonPumbaCanvas'
import { timonPumba } from './constant/imageBase64'
import './App.css'
import { ParticleImage } from './particle/ParticleImage'

const App = () => {
  const canvasReference: RefObject<HTMLCanvasElement> = useRef(null)
  const imageReference: RefObject<HTMLImageElement> = useRef(null)
  useEffect(() => {
    const canvas = canvasReference.current
    if (canvas) {
      const targetImage = imageReference.current!!
      const particleImage = new ParticleImage(canvas, targetImage)
      particleImage.draw()
      particleImage.animate()
      // context.drawImage(targetImage, 100, 100)
    }
  }, [canvasReference])
  return (
    <>
      <TimonPumbaCanvas canvasReference={canvasReference} />

      <img id="image1" src={timonPumba} alt="baseImage" ref={imageReference} />

      <div className="controls">
        <button id="wrapButton">Wrap</button>
      </div>
    </>
  )
}

export default App

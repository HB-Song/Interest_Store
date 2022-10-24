import React, { RefObject, useRef, useEffect, useState } from 'react'

import TimonPumbaCanvas from './canvases/TimonPumbaCanvas'
import { timonPumba } from './constant/imageBase64'
import './App.css'
import { ParticleImage } from './particle/ParticleImage'

const App = () => {
  const [particleImage, setParticleImage] = useState<ParticleImage | null>(null)
  const canvasReference: RefObject<HTMLCanvasElement> = useRef(null)
  const imageReference: RefObject<HTMLImageElement> = useRef(null)

  useEffect(() => {
    const canvas = canvasReference.current
    if (canvas) {
      const targetImage = imageReference.current!!
      const particleImage = new ParticleImage(canvas, targetImage)
      particleImage.animate()
      setParticleImage(particleImage)
    }
  }, [canvasReference])

  const onClickWrapButton = () => {
    if (particleImage) {
      particleImage.wrap()
    }
  }

  return (
    <>
      <TimonPumbaCanvas canvasReference={canvasReference} />

      <img id="image1" src={timonPumba} alt="baseImage" ref={imageReference} />

      <div className="controls">
        <button
          id="wrapButton"
          onClick={onClickWrapButton}
          className="wrapButton"
        >
          Wrap
        </button>
      </div>
    </>
  )
}

export default App

import React, { RefObject, useRef, useEffect } from 'react'

import TimonPumbaCanvas from './canvases/TimonPumbaCanvas'
import { timonPumba } from './constant/imageBase64'
import './App.css'

const App = () => {
  const canvasReference: RefObject<HTMLCanvasElement> = useRef(null)
  useEffect(() => {
    const canvas = canvasReference.current
    if (canvas) {
      const context = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  }, [canvasReference])
  return (
    <>
      <TimonPumbaCanvas canvasReference={canvasReference} />

      <img id="image1" src={timonPumba} alt="baseImage" />

      <div className="controls">
        <button id="wrapButton">Wrap</button>
      </div>
    </>
  )
}

export default App

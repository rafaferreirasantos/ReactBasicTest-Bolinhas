import { useState } from 'react'
import './App.css'

interface pointProps {
  x: number,
  y: number
}


function App() {
  const [points, setPoints] = useState<pointProps[]>([])
  const [redoList, setRedoList] = useState<pointProps[]>([])

  function handleClick(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }])

    setRedoList([]);
  }

  function handleUndo() {
    const resultPoints = [...points]
    const removedPoint = resultPoints.pop()
    setPoints(resultPoints)

    const resultRedoList = [...redoList]
    resultRedoList.push(removedPoint!)
    setRedoList(resultRedoList)
  }

  function handleRedo() {
    const resultRedoList = [...redoList]
    const redoPoint = resultRedoList.pop()
    setRedoList(resultRedoList)

    const resultPoints = [...points]
    resultPoints.push(redoPoint!)
    setPoints(resultPoints)
  }

  return (
    <>
      <div className="buttons">
        <button id="Undo" disabled={points.length === 0} onClick={handleUndo}>Undo</button>
        <button id="Redo" disabled={redoList.length === 0} onClick={handleRedo}>Redo</button>
      </div>
      <div className="App" onClick={handleClick}>
        {points.map((point: pointProps, index) => {
          return <div
            className="point"
            key={index}
            style={{
              left: point.x,
              top: point.y,
              position: 'absolute'
            }}></div>
        })}
      </div>
    </>
  )
}

export default App

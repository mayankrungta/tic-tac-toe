import { useState } from 'react'

const Square = () => {
  const [label, setLabel] = useState(null)
  const handleClick = () => {
    setLabel('X')
  }

  return (
    <>
      <button className="square" onClick={handleClick}>{label}</button>
    </>
  )
}

const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default Board

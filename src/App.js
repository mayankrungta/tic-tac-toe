import { useState } from 'react'

const Square = ({ value }) => {
  const [label, setLabel] = useState(value)
  const handleClick = (e) => {
    console.log(e.target.textContent)
    setLabel(label => label === 'X' ? value : 'X')
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
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  )
}

export default Board


const Square = ({ id }) => {
  return (
    <>
      <button className="square">{id}</button>
    </>
  )
}

const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square id="1" />
        <Square id="2" />
        <Square id="3" />
      </div>
      <div className="board-row">
        <Square id="4" />
        <Square id="5" />
        <Square id="6" />
      </div>
      <div className="board-row">
        <Square id="7" />
        <Square id="8" />
        <Square id="9" />
      </div>
    </>
  )
}

export default Board

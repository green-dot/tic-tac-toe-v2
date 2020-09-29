import React from 'react';

type BoardProps = {
  length: number,
  onSquareClick: any,
}

const Board: React.FC<BoardProps> = ({length, onSquareClick}) => {

  const rows = Array(length).fill(0).map((row, rowInd) => {
    console.log(row, rowInd)
    return <div>
            { Array(length).fill(rowInd).map((rowInd, colInd) => {
                return <div>{rowInd*length + colInd}</div>
              })
            }
          </div>
  })

  console.log('board')

  return (
    <>
      <h2>Game Board</h2>
      <div>
        {rows}
      </div>
    </>
  )
}

export default Board;
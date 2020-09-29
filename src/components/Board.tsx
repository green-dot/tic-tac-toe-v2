import React from 'react';
//styles
import { BoardWrapper, RowWrapper, CellWrapper } from './Board.styles'
import { on } from 'cluster';

type BoardProps = {
  boardState: string[][],
  onSquareClick: any,
}

const Board: React.FC<BoardProps> = ({boardState, onSquareClick}) => {

  const board = boardState.map((row, rowInd) => (
    <RowWrapper
      key={rowInd}
    >
      {row.map((cell, cellInd) => (
        <CellWrapper
          key={cellInd}
          defaultValue={`${rowInd},${cellInd}`}
          onClick={() => onSquareClick(rowInd, cellInd)}
        >
          {cell}
        </CellWrapper>
      ))}
    </RowWrapper>
  ))

  // const board = Array(length).fill(0).map((row, rowInd) => {
  //   return <RowWrapper key={rowInd}>
  //           { Array(length).fill(rowInd).map((rowInd, colInd) => {
  //               return (
  //                 <CellWrapper
  //                   key={rowInd*length + colInd}
  //                   onClick={() => onSquareClick((rowInd*length + colInd).toString())}
  //                 >
  //                   {rowInd*length + colInd}
  //                 </CellWrapper>
  //               )
  //             })
  //           }
  //         </RowWrapper>
  // })

  console.log('board')

  return (
    <>
      <BoardWrapper>
        {board}
      </BoardWrapper>
    </>
  )
}

export default Board;
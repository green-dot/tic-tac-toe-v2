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

  return (
    <>
      <BoardWrapper>
        {board}
      </BoardWrapper>
    </>
  )
}

export default Board;
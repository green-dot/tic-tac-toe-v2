import React from 'react';
//styles
import { BoardWrapper, RowWrapper, CellWrapper, WinningCellWrapper } from './Board.styles'

interface BoardProps {
  boardState: string[][];
  boardClasses: string[][];
  onSquareClick: any;
}

const Board: React.FC<BoardProps> = ({boardState, onSquareClick, boardClasses}) => {

  const board = boardState.map((row, rowInd) => (
    <RowWrapper
      key={rowInd}
    >
      {row.map((cell, cellInd) => (
        boardClasses[rowInd][cellInd] === 'winner'
        ? (
          <WinningCellWrapper
            key={cellInd}
            onClick={() => onSquareClick(rowInd, cellInd)}
          >
            {cell}
          </WinningCellWrapper>
          )
        : (
          <CellWrapper
            key={cellInd}
            onClick={() => onSquareClick(rowInd, cellInd)}
          >
            {cell}
          </CellWrapper>
          )
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
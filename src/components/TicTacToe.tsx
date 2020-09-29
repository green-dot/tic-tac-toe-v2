import React, { useState } from 'react'
// import components
import Board from './Board';
// styles
import {TicTacToeWrapper} from './TicTacToe.styles';
import { BoardWrapper } from './Board.styles';

const BOARD_LENGTH = 3;

function initializeBoardState (boardLength: number): string[][] {
  const boardState = Array(boardLength).fill(0).map(_ => (
    Array(boardLength).fill(0).map(()=>(Math.random()*20).toFixed(0).toString())
  ))
  return boardState
}

const TicTacToe = () => {

  const [boardState, setBoardState] = useState<string[][]>(()=>initializeBoardState(BOARD_LENGTH))

  return (
    <TicTacToeWrapper>
      <h2>Tic-Tac-Toe</h2>
      <Board 
        onSquareClick={(rowInd:number, cellInd:number) => console.log(rowInd, cellInd)}
        boardState={boardState}
        />
    </TicTacToeWrapper>
    )
};

export default TicTacToe;
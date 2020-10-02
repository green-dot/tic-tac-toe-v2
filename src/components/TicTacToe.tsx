import React, { useState, useEffect } from 'react'
// import components
import Board from './Board';
import ScoreBoard from './ScoreBoard';
// styles
import {TicTacToeWrapper} from './TicTacToe.styles';
import { BoardWrapper } from './Board.styles';

const BOARD_LENGTH = 3;

const Markers = ['X', 'O']

function initializeBoardState (boardLength: number): string[][] {
  const boardState = Array(boardLength).fill(0).map( _ => (
    Array(boardLength).fill('')
  ))
  return boardState
}

const TicTacToe = () => {

  const [boardState, setBoardState] = useState<string[][]>(() => initializeBoardState(BOARD_LENGTH))
  const [boardClasses, setBoardClasses] = useState<string[][]>(() => initializeBoardState(BOARD_LENGTH))
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [playerOneScore, setPlayerOneScore] = useState<number>(0)
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0)
  const [numberOfTies, setNumberOfTies] = useState<number>(0)

  function cellClicked (row: number, col: number): void {

    if (boardState[row][col] === '' && !gameOver){
      const tempBoard = JSON.parse(JSON.stringify(boardState));
      tempBoard[row][col] = Markers[currentPlayer];
      setBoardState(tempBoard)
      setCurrentPlayer(prev => (prev+1)%2)
    }
  }

  function restartGame(): void {
    const newGameState = initializeBoardState(BOARD_LENGTH)
    setBoardState(newGameState);
    setGameOver(false);
  }

  function checkRowWinner( sym: string): boolean{
    return boardState.reduce((winnerFound: boolean, row) => {
            return winnerFound || row.reduce((match: boolean, cell) => match && cell === sym, true)
          }, false)
  }

  function checkColumnWinner(sym: string){
    let colWinner = false;
    for(let i=0; i<boardState[0].length; i++){
      colWinner = colWinner || boardState.reduce((matched: boolean, row) => (
        matched && row[i] === sym
      ), true)
    }
    return colWinner
  }

  function checkBackSlashWinner(sym: string): boolean {
    return boardState.reduce((accMatched: boolean, row, rowInd)=> {
      return accMatched && row[rowInd] === sym
    }, true)
  }

  function checkForwardSlashWinner(sym: string): boolean {
    return boardState.reduce((accMatched: boolean, row, rowInd)=> {
      return accMatched && row[row.length - 1 - rowInd] === sym
    }, true)
  }

  function playerWins(sym: string): boolean{
    const rowWinner = checkRowWinner(sym);
    const colWinner = checkColumnWinner(sym);
    const backSlashWinner = checkBackSlashWinner(sym)
    const forwardSlashWinner = checkForwardSlashWinner(sym)

    return rowWinner || colWinner || backSlashWinner || forwardSlashWinner
  }

  function isBoardFilled (): boolean{
    return boardState.reduce((prevFilled: boolean, row) => {
      return prevFilled && row.reduce((prevCell: boolean, cell: string): boolean => (prevCell && cell !== ''), true)
    }, true)

  }

  function findAndUpdateWinningSquareClasses(): void {

  }

  useEffect(()=>{
    // check for winners 
    const playerOneWins: boolean = playerWins(Markers[0]);
    const playerTwoWins: boolean = playerWins(Markers[1]);

    if(playerOneWins){
      setGameOver(true);
      setPlayerOneScore(prev => prev + 1);
      findAndUpdateWinningSquareClasses()
    } 
    else if (playerTwoWins){
      setGameOver(true);
      setPlayerTwoScore(prev => prev + 1);
      findAndUpdateWinningSquareClasses()
    } 
    else if(isBoardFilled()) {
      setGameOver(true)
      setNumberOfTies(prev => prev + 1)
    }
  },[boardState])

  return (
    <TicTacToeWrapper>
      <h2>Tic-Tac-Toe</h2>
      <ScoreBoard 
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        numOfTies={numberOfTies}
        playersTurn={currentPlayer}
      />
      <Board 
        onSquareClick={cellClicked}
        boardState={boardState}
        boardClasses={boardClasses}
      />
      {gameOver &&
        <button onClick={restartGame}>
          Play Again!
        </button>
      }
    </TicTacToeWrapper>
    )
};

export default TicTacToe;
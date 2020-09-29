import React from 'react'
// import components
import Board from './Board';

const TicTacToe = () => {
  return (
      <Board 
        length={3}
        onSquareClick={() => console.log('clicked')}
      />
    )
};

export default TicTacToe;
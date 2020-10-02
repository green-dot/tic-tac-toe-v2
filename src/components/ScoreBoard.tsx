import React from 'react';
// styles
import { ScoreBoardWrapper, DataWrapper } from './ScoreBoard.styles';

interface ScoreBoardProps {
  playerOneScore: number;
  playerTwoScore: number;
  numOfTies: number;
  playersTurn: number;
}

const ScoreBoard = (props: ScoreBoardProps) => {
  return (
    <ScoreBoardWrapper>
      <DataWrapper>
        <div className={props.playersTurn === 0 ? 'active' : ''}>
          Player One (X): <span className='score'>{props.playerOneScore}</span>
        </div>
      </DataWrapper>
      <DataWrapper>
        Ties: <span className='score'>{props.numOfTies}</span>
      </DataWrapper>
      <DataWrapper>
        <div className={props.playersTurn === 1 ? 'active' : ''}>
          Player Two (O): <span className='score'>{props.playerTwoScore}</span>
        </div>
      </DataWrapper>
    </ScoreBoardWrapper>
  )
}

export default ScoreBoard
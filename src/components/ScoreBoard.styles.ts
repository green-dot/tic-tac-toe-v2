import styled from 'styled-components';

export const ScoreBoardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 24px;
`;

export const DataWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;

  .score {
  }

  div {
    padding: 12px;
  }

  .active {
    background-color: green;
    color: white;
    border-radius: 8px;
  }
`;
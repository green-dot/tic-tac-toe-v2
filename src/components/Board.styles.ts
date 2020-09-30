import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  box-sizing: border-box;
  min-width: 450px;
  min-height: 450px;
`;

export const RowWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
`;

export const CellWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  min-width: 100px;
  min-height: 100px;
  width: 0;
  font-size: 64px;

  :hover {
    background-color: lightgreen;
    cursor: pointer;
  }
`;
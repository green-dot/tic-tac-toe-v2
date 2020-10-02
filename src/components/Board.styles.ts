import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  box-sizing: border-box;
  min-width: 400px;
  min-height: 400px;
`;

export const RowWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
`;

const BaseCellWrapper = styled.div`

  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  min-width: 100px;
  min-height: 100px;
  width: 0;
  font-size: 64px;
`;


export const CellWrapper = styled(BaseCellWrapper)`
  :hover {
    background-color: lightgreen;
    cursor: pointer;
  }
`

export const WinningCellWrapper = styled(BaseCellWrapper)`
  background-color: goldenrod;
`;
import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OriginalRoom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #000;
`;

export const AcomodatedRoom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyCell = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  border: 1px solid #000;
`;

export const WallCell = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #000;
  border: 1px solid #000;
`;

export const LightCell = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #ffa600;
  border: 1px solid #000;
`;

export const LightedCell = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #feffaf;
  border: 1px solid #000;
`;

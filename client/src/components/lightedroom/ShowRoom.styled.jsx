import styled from 'styled-components';

export const Content = styled.div`
   flex:1;
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

import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    min-height: 14rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.5rem;
`;

export const File = styled.input`
    padding: 12px 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #8ebf42;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 0.5rem;
`;

export const Submit = styled.button`
    padding: 12px 18px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #8ebf42;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    &:hover {
        background-color: #7aa02c;
        color: #000;
    }
`;

export const FileManager = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #000;
    }
`;

export const ResponseManager = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ResponseStatus = styled.h2`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.5rem;
`;

export const RoomSize = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.5rem;
`;

export const RoomLigths = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: red;
    margin-bottom: 0.5rem;
`;

export const RoomLightsLabel = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.5rem;
`;

import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1392px;
    padding: 1.25rem;
    width: 100%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
`;

export const Backdrop = styled.div`
    background: rgba(64, 81, 91, 0.8);
    bottom: 0;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
`;

export const Dialog = styled.div`
    background-color: white;
    max-width: 100%;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const Title = styled.h4`
    color: black;
    font-size: 24px;
    font-weight: 3400;
    line-height: 24px;
    margin: 0 0 16px;
`;

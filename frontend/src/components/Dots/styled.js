import styled from 'styled-components';

import { mainBackgroundColor } from '../../constants/variables';

export const SpanOnHover = styled.span`
    /* display: none; */
`;

export const Dot = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 1px solid black;
    background-color: ${mainBackgroundColor};
`;

export const NavItem = styled.li`
    margin: 0;
    padding: 20px;
    text-transform: uppercase;
`;

export const NavUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    ${NavItem} {
        display: block;
    }
`;

export const Container = styled.div`
    position: fixed;
    top: 30vh;
    right: 20px;
`;

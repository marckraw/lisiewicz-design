import styled from 'styled-components';

import { mainBackgroundColor } from '../../constants/variables';

export const Img = styled.img`
    height: 100px;
`;

export const NavItem = styled.li`
    margin: 0;
    padding: 20px;
    color: red;
    text-transform: uppercase;
`;

export const NavUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    ${NavItem} {
        display: inline-block;
    }
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    color: blue;
    background-color: ${mainBackgroundColor};
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;

    ${NavItem} {
    }
`;

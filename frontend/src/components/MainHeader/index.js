import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import logo from '../../assets/logo.jpeg';
import { navigationItems } from './navigationItems';

import * as S from './styled';

const MainHeader = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <S.Container>
            <S.Img src={logo} alt="Logo" onClick={scrollToTop} />
            <nav>
                <S.NavUl>
                    {navigationItems.map(item => (
                        <S.NavItem key={item.id}>
                            <Link to={item.url}>{item.value}</Link>
                        </S.NavItem>
                    ))}
                </S.NavUl>
            </nav>
        </S.Container>
    );
};

export default MainHeader;

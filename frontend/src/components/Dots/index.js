import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { sections } from './sections';
import * as S from './styled';

const Dots = () => {
    return (
        <S.Container>
            <nav>
                <S.NavUl>
                    {sections.map(item => (
                        <S.NavItem key={item.id}>
                            <Link
                                activeClass="active"
                                to={item.section}
                                spy={true}
                                smooth={true}
                                // offset={-70}
                                duration={500}
                            >
                                <S.Dot />
                            </Link>
                        </S.NavItem>
                    ))}
                </S.NavUl>
            </nav>
        </S.Container>
    );
};

export default Dots;

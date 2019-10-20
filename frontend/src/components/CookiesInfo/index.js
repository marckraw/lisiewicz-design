import React, { useEffect, useState, Fragment } from 'react';
import { Portal } from 'react-portal';

import * as S from './styled';

const CookiesInfo = () => {
    const [agreement, setAgreement] = useState(null);
    useEffect(() => {
        const serializedData = localStorage.getItem('cookies-agreement') || false;
        setAgreement(serializedData);
    });

    const save = () => {
        window.localStorage.setItem('cookies-agreement', true);
        setAgreement(true);
    };

    return (
        <Fragment>
            {!agreement && (
                <Portal closeOnEsc={false} isOpen={!agreement}>
                    <S.Backdrop>
                        <S.Dialog>
                            <S.Container>
                                <S.Title>INFORMACJA O COOKIES</S.Title>
                                TA STRONA UŻYWA COOKIE. Korzystając ze strony wyrażasz zgodę na
                                używanie cookie, zgodnie z aktualnymi ustawieniami przeglądarki.
                                <S.ButtonWrapper>
                                    <button onClick={save}>Rozumiem</button>
                                </S.ButtonWrapper>
                            </S.Container>
                        </S.Dialog>
                    </S.Backdrop>
                </Portal>
            )}
        </Fragment>
    );
};

export default CookiesInfo;

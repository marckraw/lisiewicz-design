import React from 'react';

import * as S from './styled';

export default function Section({ title, subtitle, dark, id }) {
    return (
        <S.Container id={id}>
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div>Lorems asdasda dvfsd vdf dfsg fdsgdfs g fdsgdfs</div>
            </div>
        </S.Container>
    );
}

import React, { useState, useMemo } from 'react';

// Wood
import beech1 from './static/wood/beech1.jpg';
import beech2 from './static/wood/beech2.jpg';
import oak1 from './static/wood/oak1.jpg';
import oak2 from './static/wood/oak2.jpg';

// Oil
import oil1_beech1 from './static/oil/oil1_beech1.jpg';
import oil2_beech1 from './static/oil/oil2_beech1.jpg';
import oil3_beech1 from './static/oil/oil3_beech1.jpg';

import oil1_beech2 from './static/oil/oil1_beech2.jpg';
import oil2_beech2 from './static/oil/oil2_beech2.jpg';
import oil3_beech2 from './static/oil/oil3_beech2.jpg';

import oil1_oak1 from './static/oil/oil1_oak1.jpg';
import oil2_oak1 from './static/oil/oil2_oak1.jpg';
import oil3_oak1 from './static/oil/oil3_oak1.jpg';
import oil4_oak1 from './static/oil/oil4_oak1.jpg';
import oil5_oak1 from './static/oil/oil5_oak1.jpg';

import oil1_oak2 from './static/oil/oil1_oak2.jpg';
import oil2_oak2 from './static/oil/oil2_oak2.jpg';
import oil3_oak2 from './static/oil/oil3_oak2.jpg';
import oil4_oak2 from './static/oil/oil4_oak2.jpg';
import oil5_oak2 from './static/oil/oil5_oak2.jpg';

import * as S from './styled';

import { ResourcesMemo } from './Resources';

const woodResources = [
    { id: 1, name: 'BUK CZYSTY, ŁĄCZONY', img: beech1, alt: 'Buk' },
    { id: 2, name: 'BUK DZIKI, LITY', img: beech2, alt: 'Buk' },
    { id: 3, name: 'DĄB CZYSTY, ŁĄCZONY', img: oak1, alt: 'Dąb' },
    { id: 4, name: 'DĄB DZIKI, LITY', img: oak2, alt: 'Dąb' },
];

const oilResources = [
    { id: 1, name: 'LAKIER BEZBARWNY', img: oil1_beech1, alt: 'Olej', parent: 1 },
    { id: 2, name: 'LAKIER ORZECH', img: oil2_beech1, alt: 'Olej', parent: 1 },
    { id: 3, name: 'LAKIER WENGE', img: oil3_beech1, alt: 'Olej', parent: 1 },

    { id: 4, name: 'LAKIER BEZBARWNY', img: oil1_beech2, alt: 'Olej', parent: 2 },
    { id: 5, name: 'LAKIER ORZECH', img: oil2_beech2, alt: 'Olej', parent: 2 },
    { id: 6, name: 'LAKIER WENGE', img: oil3_beech2, alt: 'Olej', parent: 2 },

    { id: 7, name: 'LAKIER BEZBARWNY', img: oil1_oak1, alt: 'Olej', parent: 3 },
    { id: 8, name: 'LAKIER ORZECH', img: oil2_oak1, alt: 'Olej', parent: 3 },
    { id: 9, name: 'LAKIER WENGE', img: oil3_oak1, alt: 'Olej', parent: 3 },
    { id: 10, name: 'OLEJ BIELONY', img: oil4_oak1, alt: 'Olej', parent: 3 },
    { id: 11, name: 'OLEJ POPIEL', img: oil5_oak1, alt: 'Olej', parent: 3 },

    { id: 12, name: 'LAKIER BEZBARWNY', img: oil1_oak2, alt: 'Olej', parent: 4 },
    { id: 13, name: 'LAKIER ORZECH', img: oil2_oak2, alt: 'Olej', parent: 4 },
    { id: 14, name: 'LAKIER WENGE', img: oil3_oak2, alt: 'Olej', parent: 4 },
    { id: 15, name: 'OLEJ BIELONY', img: oil4_oak2, alt: 'Olej', parent: 4 },
    { id: 16, name: 'OLEJ POPIEL', img: oil5_oak2, alt: 'Olej', parent: 4 },
];

const filterResources = (resources, parent) =>
    resources.filter(resource => resource.parent === parent);

export default function Configure(props) {
    const [wood, setWood] = useState(null);
    const oilResourcesFiltered = useMemo(() => filterResources(oilResources, wood), [wood]);

    return (
        <S.PageWrapper>
            <S.PageTitle>Kreator zamówienia</S.PageTitle>
            <ResourcesMemo setResource={setWood} resources={woodResources} resourceType="drewno" />
            {wood && <ResourcesMemo resources={oilResourcesFiltered} resourceType="olej" />}
        </S.PageWrapper>
    );
}

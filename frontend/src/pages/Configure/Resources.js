import React from 'react';

import * as S from './styled';

function Resources(props) {
    return (
        <div>
            <S.ResourcesTypeName>Wybierz {props.resourceType}</S.ResourcesTypeName>
            <S.ResourcesWrapper>
                {props.resources.map(resource => (
                    <S.SingleResource
                        key={resource.id}
                        onClick={() => (props.setResource ? props.setResource(resource.id) : null)}
                    >
                        <S.ResourceName>{resource.name}</S.ResourceName>
                        <S.ResourceImg src={resource.img} alt={resource.alt} />
                    </S.SingleResource>
                ))}
            </S.ResourcesWrapper>
        </div>
    );
}

export const ResourcesMemo = React.memo(Resources);

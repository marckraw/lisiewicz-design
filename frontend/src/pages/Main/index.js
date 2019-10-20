import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Gallery from '../Gallery';
import Home from '../Home';
import Configure from '../Configure';
import Company from '../Company';
import Contact from '../Contact';
import Realization from '../Realization';
import IndyvidualOrders from '../IndyvidualOrders';
import CookiesInfo from '../../components/CookiesInfo';

import MainHeader from '../../components/MainHeader';

import * as S from './styled';

export const Main = ({ match, ...props }) => {
    return (
        <S.Container>
            <MainHeader />
            <CookiesInfo />
            <Switch>
                <Route exact path={`${match.path}/home`} component={Home} />
                <Route exact path={`${match.path}/configure`} component={Configure} />
                <Route exact path={`${match.path}/company`} component={Company} />
                <Route exact path={`${match.path}/contact`} component={Contact} />
                <Route exact path={`${match.path}/gallery`} component={Gallery} />
                <Route exact path={`${match.path}/realization`} component={Realization} />
                <Route
                    exact
                    path={`${match.path}/indyvidual-orders`}
                    component={IndyvidualOrders}
                />
                <Redirect to={`${match.path}/home`} />
            </Switch>
        </S.Container>
    );
};

export default Main;

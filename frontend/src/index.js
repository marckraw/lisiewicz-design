import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AuthenticatedRoutes from './auth/AuthenticatedRoutes';
import NonAuthenticatedRoutes from './auth/NonAuthenticatedRoutes';

import Main from './pages/Main';
import NotFound from './pages/404';

import GlobalStyle from './styled';

const target = document.querySelector('#root');

export const history = createHistory();

render(
    <Fragment>
        <Router history={history}>
            <Switch>
                <AuthenticatedRoutes path="/main" component={Main} />
                <NonAuthenticatedRoutes path="/" />
                <Route component={NotFound} />
            </Switch>
        </Router>
        <GlobalStyle />
    </Fragment>,
    target,
);

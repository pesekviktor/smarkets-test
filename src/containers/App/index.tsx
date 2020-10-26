/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import styled from 'styled-components';
import {Helmet} from 'react-helmet-async';

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Smarkets events"
        defaultTitle="Smarkets events"
      >
        <meta
          name="description"
          content="An applications showing smarkets events"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <GlobalStyle/>
    </AppWrapper>
  );
}

export default hot(App);

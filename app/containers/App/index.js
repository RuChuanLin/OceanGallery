/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import WorkPage from 'containers/WorkPage/Loadable';
import InfoPage from 'containers/InfoPage/Loadable';
import StorePage from 'containers/StorePage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Aside from 'components/Aside';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={WorkPage} />
        <Route path="/store" component={StorePage} />
        <Route path="/info" component={InfoPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Aside />
      <Footer />
    </AppWrapper>
  );
}

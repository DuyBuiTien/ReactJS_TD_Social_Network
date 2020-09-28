/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {useEffect, Component} from 'react';
import {Redirect, Switch, Route, HashRouter} from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import {Layout} from '../_metronic/layout';
import BasePage from './BasePage';
import {Logout, AuthPage} from './modules/Auth';
import ErrorsPage from './modules/ErrorsExamples/ErrorsPage';

import {configSocket} from '../redux/rootSocket';

export default class Routes extends Component {
  componentWillMount = () => {
    configSocket()
  }
  render() {
    return (
      <Switch>
        {/* {!isAuthorized ? (
          <Route>
            <AuthPage />
          </Route>
        ) : (
          <Redirect from="/auth" to="/" />
        )} */}

        <Route path="/error" component={ErrorsPage} />
        <Route path="/logout" component={Logout} />

          <Layout>
            <BasePage />
          </Layout>

      </Switch>
    );
  }
}

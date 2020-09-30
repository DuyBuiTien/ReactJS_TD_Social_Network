/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {useEffect} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Layout} from '../_metronic/layout';
import BasePage from './BasePage';
import {Logout, AuthPage} from './modules/Auth';
import ErrorsPage from './modules/ErrorsExamples/ErrorsPage';

import {actions} from '../app/modules/Auth/_redux/authRedux';
import {configSocket} from '../redux/rootSocket';

export function Routes() {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(actions.requestUser());
  }, []);

  if (!user) return <></>;

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

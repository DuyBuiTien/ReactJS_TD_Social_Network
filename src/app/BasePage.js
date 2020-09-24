import React, {Suspense, lazy} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import {LayoutSplashScreen, ContentRoute} from '../_metronic/layout';
import {BuilderPage} from './pages/BuilderPage';
import {MyPage} from './pages/MyPage';
import {DashboardPage} from './pages/DashboardPage';

const GoogleMaterialPage = lazy(() => import('./modules/GoogleMaterialExamples/GoogleMaterialPage'));
const ReactBootstrapPage = lazy(() => import('./modules/ReactBootstrapExamples/ReactBootstrapPage'));
const ECommercePage = lazy(() => import('./modules/ECommerce/pages/eCommercePage'));

const NewfeedPage = lazy(() => import('./modules/Newsfeed/pages/NewsfeedPage'));
const FriendsPage = lazy(() => import('./modules/Friends/pages/friendsPage'));
const ChatsPage = lazy(() => import('./modules/Chats/pages/chatPage'));
const GroupPage = lazy(() => import('./modules/Group/pages/GroupPage'));
const ProfilePage = lazy(() => import('./modules/Profile/pages/ProfilePage'));

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/newsfeed" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />

        <Route path="/newsfeed" component={NewfeedPage} />
        <Route path="/friends" component={FriendsPage} />
        <Route path="/chat" component={ChatsPage} />
        <Route path="/groups" component={GroupPage}/>
        <Route path="/profile" component={ProfilePage}/>

        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}

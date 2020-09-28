import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import MainChatPage from './MainChatPage';

import {LayoutSplashScreen, ContentRoute} from '../../../../_metronic/layout';

export default function friendsPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute path="/chat/:id" component={MainChatPage} />
        <ContentRoute path="/chat" component={MainChatPage} />
      </Switch>
    </Suspense>
  );
}

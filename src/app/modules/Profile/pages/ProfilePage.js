import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { LayoutSplashScreen, ContentRoute } from '../../../../_metronic/layout';
import ProfilePageDetail from './ProfilePageDetail'

export default function ProfilePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {/* <ContentRoute exact path="/profile" component={ProfilePageDetail} /> */}
        <ContentRoute path="/profile/:username" component={ProfilePageDetail} />
      </Switch>
    </Suspense>
  )
}
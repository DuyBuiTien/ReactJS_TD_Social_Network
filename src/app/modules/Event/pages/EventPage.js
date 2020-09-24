import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';

import { LayoutSplashScreen, ContentRoute } from '../../../../_metronic/layout';
import EventList from './EventList'

export default function groupPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute exact path="/events" component={EventList}/>
      </Switch>
    </Suspense>
  )
}
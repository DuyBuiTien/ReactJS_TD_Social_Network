import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';

import { LayoutSplashScreen, ContentRoute } from '../../../../_metronic/layout';
import groupPageList from './GroupPageList'

export default function groupPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute path="/groups" component={groupPageList} />
      </Switch>
    </Suspense>
  )
}
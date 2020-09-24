import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';

import { LayoutSplashScreen, ContentRoute } from '../../../../_metronic/layout';
import GroupPageList from './GroupPageList'
import GroupPageDetail from './GroupPageDetail';

export default function groupPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute exact path="/groups" component={GroupPageList}/>
        <ContentRoute path="/groups/:id" component={GroupPageDetail}/>
      </Switch>
    </Suspense>
  )
}
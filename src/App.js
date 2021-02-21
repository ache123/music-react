import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import { HashRouter } from 'react-router-dom'

import store from './store'
import { Provider } from 'react-redux'

import { BackTop } from 'antd';
import CHAppHeader from '@/components/app-header';
import CHAppFooter from '@/components/app-footer';
import {TopButton} from './style'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <CHAppHeader />
        <Suspense fallback={<div>page loading</div>} >
          {renderRoutes(routes)}
        </Suspense>
        <CHAppFooter />
      </HashRouter>
      <BackTop>
        <TopButton/>
      </BackTop>
    </Provider>

  )
})


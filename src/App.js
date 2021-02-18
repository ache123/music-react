import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import { HashRouter } from 'react-router-dom'

import store from './store'
import { Provider } from 'react-redux'

import CHAppHeader from '@/components/app-header';
import CHAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <CHAppHeader />
        {renderRoutes(routes)}
        <CHAppFooter />
      </HashRouter>
    </Provider>

  )
})


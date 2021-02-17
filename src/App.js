import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import { HashRouter } from 'react-router-dom'



import CHAppHeader from '@/components/app-header';
import CHAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <HashRouter>
      <CHAppHeader/>
      {renderRoutes(routes)}
      <CHAppFooter/>
    </HashRouter>
  )
})


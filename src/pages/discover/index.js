import React, { memo } from 'react';

import { dicoverMenu } from '@/common/local-data'
import {
  DiscoverWrapped,
  TopMenu
} from './style'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


export default memo(function CHDiscover(props) {
  const {route} = props;
  return (
    <DiscoverWrapped>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
        
      </div>
      {renderRoutes(route.routes)}

    </DiscoverWrapped>
  )
})

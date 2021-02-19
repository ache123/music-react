import React, { memo } from 'react';

import {
  MineWrapped,
} from './style'

export default memo(function CHMine() {
  return (
    <MineWrapped className="wrap-v2">
      <div className="content">
        <a href="/#">立即登录</a>
      </div>
    </MineWrapped>
  )
})

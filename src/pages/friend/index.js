import React, { memo } from 'react';

import {
  FriendWrapped
} from './style'

export default memo(function CHFriend() {
  return (
    <FriendWrapped className="wrap-v2">
      <div className="content">
        <p>你可以关注明星和好友品味他们的私房歌单通过他们的动态发现更多精彩音乐</p>
        <a href="/#">立即登录</a>
      </div>
    </FriendWrapped>
  )
})

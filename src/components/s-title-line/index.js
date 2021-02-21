import React, { memo } from 'react'

import { STitleLineWrapped } from './style'

export default memo(function CHSTitleLine(props) {
  const { title, more } = props;
  return (
    <STitleLineWrapped>
        <span>{title}</span>
        {more && (
          <a href="todo">查看全部 &gt;</a>
        )}
    </STitleLineWrapped>
  )
})

import React, { memo } from 'react'

import { UniversalLineWrapped } from './style'

export default memo(function CHUniversalLine(props) {
  const { title, keyword = [], more = false } = props;
  return (
    <UniversalLineWrapped>
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {
            keyword.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      { more &&
        (<div className="right">
          <a href="todo">更多 &gt;</a>
        </div>)
      }
    </UniversalLineWrapped>
  )
})

import React, { memo } from 'react'
import classNames from 'classnames';

import { getSizeImage, getCount } from '@/utils/format-utils.js'
import {
  SongsCoverWrapped
} from './style'

export default memo(function SongsCover(props) {
  const { info, writer } = props;
  return (
    <SongsCoverWrapped>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon music"></i>
              {getCount(info.playCount)}
            </span>
            <a href="todo"  className="sprite_icon play"> </a>
          </div>
        </div>
      </div>
      <div className={classNames(["cover-bottom", {"text-nowrap": writer}])}>
        <a href="todo">{info.name}</a>
      </div>
      {
        writer && (
          <div className="cover-source">
            <p>by</p>
            <a href="todo" className="text-nowrap">{info.copywriter}</a>
          </div>
        )
      }

    </SongsCoverWrapped>
  )
})

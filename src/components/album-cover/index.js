import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils.js'

import {
  AlbumCoverWrapped,
} from './style'

export default memo(function AlbumCover(props) {
  const { info, width, height, bgp, titleSize="12px" } = props;
  return (
    <AlbumCoverWrapped info={info} width={width} height={height} bgp={bgp} titleSize={titleSize}>
      <div className="album-content">
        <img src={getSizeImage(info.picUrl, height)} alt=""></img>
        <a href="todo" className="cover image_cover"> </a>
      </div>
      <a className="name text-nowrap" href="todo">{info.name}</a>
      <a className="artist text-nowrap" href="todo">{info.artist.name}</a>

    </AlbumCoverWrapped>
  )
})

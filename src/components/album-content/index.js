import React, { memo } from 'react'

import AlbumCover from '@/components/album-cover'
import { AlbumContentWrapped } from './style'

export default memo(function CHAlbumContent(props) {
  const {info} = props;
  return (
    <AlbumContentWrapped>
      {
        info.map((item, index) => {
          return (
            <div className="content-item" >
              <AlbumCover info={item}
                width={153}
                height={130}
                bgp={"-845px"}
                titleSize={"14px"} />
            </div>
          )

        })
      }
    </AlbumContentWrapped>
  )
})

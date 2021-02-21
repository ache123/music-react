import React, { memo } from 'react'

import CHHotAlbum from './c-cpns/hot-album'
import CHAllAlbum from './c-cpns/all-album'
import { AlbumWrapped} from './style'

export default memo(function CHAlbum() {
  return (
    <AlbumWrapped>
      <CHHotAlbum/>
      <CHAllAlbum/>
    </AlbumWrapped>
  )
})

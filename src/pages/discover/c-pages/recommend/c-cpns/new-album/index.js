import React, { memo } from 'react'

import ThemeHeaderRec from '@/components/theme-header-recommend'
import {
  NewAlbumWrapped
} from './style'

export default memo(function NewAlbum() {
  return (
    <NewAlbumWrapped>
      <ThemeHeaderRec title="新碟上架"></ThemeHeaderRec>
    </NewAlbumWrapped>
  )
})

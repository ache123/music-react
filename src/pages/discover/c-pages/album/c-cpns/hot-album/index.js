import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getAlbumAction } from '../../store/actionCreators'

import CHUniversalLine from '@/components/universal-title-line'
import CHAlbumContent from '@/components/album-content'
import { HotALbumWrapped } from './style'


export default memo(function CHHotAlbum() {
  const { hotAlbums } = useSelector((state) => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumAction("hot", 10, 0, "ALL"));
  }, [dispatch])

  return (
    <HotALbumWrapped>
      <CHUniversalLine title={"热门新碟"}/>
      <CHAlbumContent info={hotAlbums}/>
    </HotALbumWrapped>
  )
})

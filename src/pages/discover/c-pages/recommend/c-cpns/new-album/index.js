import React, { memo, useEffect, useRef  } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreators'
import {NEW_ALBUM_LIMIT} from '@/common/contant.js'

import { Carousel } from 'antd';
import ThemeHeaderRec from '@/components/theme-header-recommend'
import AlbumCover from '@/components/album-cover'
import {
  NewAlbumWrapped
} from './style'

export default memo(function NewAlbum() {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);

  const albumRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUM_LIMIT))
  }, [dispatch])

  return (
    <NewAlbumWrapped>
      <ThemeHeaderRec title="新碟上架"></ThemeHeaderRec>
      <div className="content">
        <button className="left-btn sprite_02" onClick={e => albumRef.current.prev()}></button>
        <div className="album">
          <Carousel ref={albumRef} dots={false}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="album-page">
                    {
                      newAlbums.slice(item*5, (item+1)*5).map(iten => {
                        return (
                          <AlbumCover info={iten} width={118} height={100} bgp={"-570px"} key={iten.id}/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="right-btn sprite_02" onClick={e => albumRef.current.next()}></button>
        
      </div>
    </NewAlbumWrapped>
  )
})

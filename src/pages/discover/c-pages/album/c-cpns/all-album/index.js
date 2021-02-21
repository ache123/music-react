import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getAlbumAction } from '../../store/actionCreators'

import { Pagination } from 'antd';
import CHUniversalLine from '@/components/universal-title-line'
import CHAlbumContent from '@/components/album-content'
import { AllAlbumWrapped} from './style'

export default memo(function CHAllAlbum() {
  const { allAlbums } = useSelector((state) => ({
    allAlbums: state.getIn(["album", "allAlbums"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumAction("new", 35, 0, "ALL"));
  }, [dispatch])

  return (
    <AllAlbumWrapped>
      <CHUniversalLine title={"全部新碟"} keyword={["全部", "华语", "欧美", "韩国", "日本"]} />
      <CHAlbumContent info={allAlbums}/>
      <Pagination className="page-style"
                  defaultCurrent={1} 
                  pageSize={35} 
                  total={525} 
                  showSizeChanger={false}/>
    </AllAlbumWrapped>
  )
})

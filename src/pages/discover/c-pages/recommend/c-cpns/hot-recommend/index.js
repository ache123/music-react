import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendsAction } from '../../store/actionCreators'

import { HOT_RECOMMENDS_LIMIT} from '@/common/contant'
import ThemeHeaderRec from '@/components/theme-header-recommend'
import {
  HotRecommendWrapped
} from './style'
import SongsCover from '@/components/songs-cover'

export default memo(function CHHotRecommend() {
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend","hotRecommends"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMENDS_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapped>
      <ThemeHeaderRec title="热门推荐" keyword={["华语","流行","摇滚","民谣","电子"]}></ThemeHeaderRec>
      <div className="recommends">
        {
          hotRecommends.map((item, index) => {
            return (
              <SongsCover info={item} writer={false} className="songsCover"/>
            )
          })
        }
      </div>
    </HotRecommendWrapped>
  )
})

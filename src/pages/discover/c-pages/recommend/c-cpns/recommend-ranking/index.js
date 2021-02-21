import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'

import TopRanking from '@/components/top-ranking'
import ThemeHeaderRec from '@/components/theme-header-recommend'
import {
  RecommendRankingWrapped
} from './style'


export default memo(function RecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RecommendRankingWrapped>
      <ThemeHeaderRec title="榜单"></ThemeHeaderRec>
      <div className="ranking-content">
        <TopRanking info={upRanking}/>
        <TopRanking info={newRanking}/>
        <TopRanking info={originRanking}/>
      </div>
    </RecommendRankingWrapped>
  )
})

import React, { memo } from 'react'

import ThemeHeaderRec from '@/components/theme-header-recommend'
import {
  RecommendRankingWrapped
} from './style'

export default memo(function RecommendRanking() {
  return (
    <RecommendRankingWrapped>
      <ThemeHeaderRec title="榜单"></ThemeHeaderRec>
    </RecommendRankingWrapped>
  )
})

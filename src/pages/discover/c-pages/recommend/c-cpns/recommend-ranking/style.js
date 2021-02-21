import styled from 'styled-components'

import recommendImages from '@/assets/img/recommend-top-bg.png'

export const RecommendRankingWrapped = styled.div`
  margin-top: 30px;

  .ranking-content {
    height: 472px;
    margin-top: 20px;
    background-image: url(${recommendImages});
    display: flex;
  }
  
`
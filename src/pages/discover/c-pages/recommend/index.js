import React, { memo } from 'react'
import { 
  RecommendWrapped,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import CHTopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'


function CHRecommend(props) {

  return (
    <RecommendWrapped>
      <CHTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapped>
  )
}




export default memo(CHRecommend);



// function CHRecommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners])
//   return (
//     <div>
//       <h2>CHRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispachToProp = dispatch => ({
//   getBanners() {
//     dispatch(getTopBannerAction);
//   }
// });


// export default connect(mapStateToProps, mapDispachToProp)(memo(CHRecommend))

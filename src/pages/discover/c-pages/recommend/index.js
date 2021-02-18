import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function CHRecommend(props) {

  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual);
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction);
  }, [dispatch]);


  return (
    <div>
      <h2>CHRecommend: {topBanners.length}</h2>
    </div>
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

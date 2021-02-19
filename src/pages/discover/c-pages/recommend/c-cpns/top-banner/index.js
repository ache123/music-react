import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
  BannerWrapped,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function CHTopBanner() {
  // state, 记录img切换位置
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联：获取数据和进行操作,第二个参数用来浅层比较
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  const dispatch = useDispatch();

  const bannerRef = useRef();


  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);


  // 最外层需要拿到里面的数据，通过Carousel组件的回调事件实现
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, [])

  // 其他业务逻辑，获取背景的高斯模糊图片
  // 如果直接使用后面的地址，当topBanners为空时会报错，所以通过&&确保能取到值
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
  


  return (
    <BannerWrapped bgImage={bgImage}>
      <div className="content wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href="https://music.163.com/#/download">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>

    </BannerWrapped>
  )
})

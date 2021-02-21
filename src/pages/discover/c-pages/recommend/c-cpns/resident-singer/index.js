import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getResidentSinger } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import CHSTitleLine from '@/components/s-title-line'
import { ResidentSingerWrapped, SingerItem } from './style'

export default memo(function CHResidentSinger() {
  const { residentSinger = [] } = useSelector(state => ({
    residentSinger: state.getIn(["recommend", "residentSinger"])
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResidentSinger(-1, -1, 5));
  }, [dispatch])
  return (
    <ResidentSingerWrapped>
      <CHSTitleLine title={"入驻歌手"} more={true} />
      <div className="resident-singer-content">
        {
          residentSinger.map((item, index) => {
            return (
              <SingerItem key={item.id}>
                <a href="todo" className="singer-item">
                  <img src={getSizeImage(item.img1v1Url, 62)} alt=""></img>
                  <div className="info">
                    <div className="info-name">{item.name}</div>
                  </div>
                </a>
              </SingerItem>
            )
          })
        }
      </div>
      <div className="apply-singer sprite_button">
        <div className="sprite_button btn-2">
          <i>申请成为网易音乐人</i>
        </div>
      </div>

    </ResidentSingerWrapped>
  )
})

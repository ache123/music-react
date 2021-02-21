import React, { memo, useEffect } from 'react'

import { getDJList } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import CHSTitleLine from '@/components/s-title-line'
import { TopDJWrapped, TopDJItem} from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function CHTopDJ() {

  const { topDJList } = useSelector(state => ({
    topDJList: state.getIn(["recommend", "topDJList"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDJList(5));
  }, [dispatch]);

  return (
    <TopDJWrapped>
      <CHSTitleLine title={"热门主播"} more={false} />
      <div className="dj-list">
        {
          topDJList.map((item, index) => {
            return (
              <TopDJItem key={item.id}>
                <img src={getSizeImage(item.avatarUrl, 40)} alt=""></img>
                <div className="info">
                  <a href="todo">{item.nickName}</a>
                </div>
              </TopDJItem>
            )
          })
        }
      </div>
    </TopDJWrapped>
  )
})




import { Map } from 'immutable'

import * as actionTypes from './constants';

const initialState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  residentSinger: [],
  topDJList: []
  
})

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    case actionTypes.CHANGE_RESIDENT_SINGER:
      return state.set("residentSinger", action.residentSinger);
    case actionTypes.CHANGE_TOPDJ_LIST:
      return state.set("topDJList", action.topDJList)
    default:
      return state;
  }
}

export default reducer;
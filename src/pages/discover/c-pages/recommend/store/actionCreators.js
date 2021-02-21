import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getSingerList,
  getTopListDJ
} from '@/services/recommend'

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

const changeUpRanking = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRanking = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRanking = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

const changeResidentSingAction = (res) => ({
  type: actionTypes.CHANGE_RESIDENT_SINGER,
  residentSinger: res.artists
})


const changeTopDJListAction = (res) => ({
  type: actionTypes.CHANGE_TOPDJ_LIST,
  topDJList: res.data.list
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannersAction(res));
    })
  }
}

export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res));
    })
  }
}

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res));
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRanking(res));
          break;
        case 2:
          dispatch(changeNewRanking(res));
          break;
        case 3:
          dispatch(changeOriginRanking(res));
          break;
        default:          
      }
    })
  }
}

export const getResidentSinger = (type, area, limit) => {
  return dispatch => {
    getSingerList(type, area, limit).then(res => {
      dispatch(changeResidentSingAction(res));
    })
  }
}

export const getDJList = (limit) => {
  return dispatch => {
    getTopListDJ(limit).then(res => {
      dispatch(changeTopDJListAction(res));
    })
  }
}
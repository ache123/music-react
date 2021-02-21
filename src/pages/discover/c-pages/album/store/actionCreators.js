import * as actionTypes from './constants'

import {
  getAlbum
} from '@/services/album.js'

const changeHotAlbumAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ALBUM,
  hotAlbums: res.albums
})

const changeAllAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_ALL_ALBUM,
  allAlbums: res.albums
})

export const getAlbumAction = (type, limit, offset, area) => {
  return dispatch => {
    getAlbum(type, limit, offset, area).then(res => {
      switch (type) {
        case "hot":
          dispatch(changeHotAlbumAction(res));
          break;
        case "new":
          dispatch(changeAllAlbumsAction(res));
          break;
        default:
      }
    })
  }
}
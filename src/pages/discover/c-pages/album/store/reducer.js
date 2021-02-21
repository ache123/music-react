import { Map } from 'immutable'

import * as actionTypes from './constants';

const initialState = Map({
  hotAlbums : [],
  allAlbums: []
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM:
      return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_ALL_ALBUM:
      return state.set("allAlbums", action.allAlbums);
    default:
      return state;
  }
}

export default reducer;
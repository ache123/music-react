
import { combineReducers } from 'redux'

import {reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'

// reducer是一个function类型，纯函数
const reducer = combineReducers({
  recommend: recommendReducer,
});

export default reducer;
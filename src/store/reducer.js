
// 合并时该库帮我们优化
import { combineReducers } from 'redux-immutable';


import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as albumReducer } from '@/pages/discover/c-pages/album/store'

// reducer是一个function类型，纯函数
const reducer = combineReducers({
  recommend: recommendReducer,
  album :albumReducer
});

export default reducer;
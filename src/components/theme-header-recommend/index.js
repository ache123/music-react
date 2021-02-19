import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { ThemeHeaderRecWrapped } from './style'


// 使用props校验的方法
const ThemeHeaderRec = memo(function(props) {

  const { title, keyword = [] } = props;
  return (
    <ThemeHeaderRecWrapped className="sprite_02">
      <div className="left">
        <a className="title" href="todo">{title}</a>
        <div className="keyword">
          {
            keyword.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="sprite_02"/>
      </div>
    </ThemeHeaderRecWrapped>
  )
})

ThemeHeaderRec.PropTypes = {
  title: PropTypes.string.isRequired,
  keyword: PropTypes.array
}

ThemeHeaderRec.defaultProps = {
  keyword: []
}


export default ThemeHeaderRec;

// export default memo(function ThemeHeaderRec(props) {
//   // 有的title没有keyword，在解构的时候给一个默认值，避免undefined
//   const { title, keyword = [] } = props;
//   return (
//     <ThemeHeaderRecWrapped className="sprite_02">
//       <div className="left">
//         <a className="title" href="todo">{title}</a>
//         <div className="keyword">
//           {
//             keyword.map((item, index) => {
//               return (
//                 <div className="item" key={item}>
//                   <a href="todo">{item}</a>
//                   <span>|</span>
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//       <div className="right">
//         <a href="todo">更多</a>
//         <i className="sprite_02" />
//       </div>
//     </ThemeHeaderRecWrapped>
//   )
// })

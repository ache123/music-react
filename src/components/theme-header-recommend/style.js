import styled from 'styled-components'

export const ThemeHeaderRecWrapped = styled.div`
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;

  .left {
    float: left;
    display: flex;

    .title {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      color: #333;
      
      :hover {
        text-decoration: none;
      }
    }

    .keyword {
      display: flex;
      margin: 7px 0 0 20px;

      .item {
        span {
          margin: 0 15px;
          color: #ccc;
        }
      }
      .item:last-child span {
        display: none;
      }

      
    }
          
  }

  .right {
    float: right;
    margin-top: 9px;
    
    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
    
  }
`
import styled from 'styled-components'

export const UniversalLineWrapped = styled.div`
  height: 42px;
  border-bottom: 2px solid #c20c0c;
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    .title {
      font-size: 24px;
      font-weight: normal;
    }

    .keyword {
      display: flex;
      margin: 12px 0 0 20px;

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
    margin-top: 14px;
  }
`
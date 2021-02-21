import styled from 'styled-components'

export const ResidentSingerWrapped = styled.div`
  margin-top: 15px;

  .resident-singer-content {
    margin: 6px 0 14px 20px;
  }

  .apply-singer {
    background-position: 0 -59px;
    width: 203px;
    margin-left: 20px;
    height: 31px;
    border-radius: 4px;
    text-align: center;
    line-height: 31px;
    overflow: hidden;

    :hover {
      background-position: 0 -141px;
    }

    .btn-2 {
      background-position: right -100px;
      cursor: pointer;

      i {
        width: 170px;
        font-weight: bold;
        color: #333;
        background-position: 0 -59px;
      }

      :hover {
        background-position: right -182px;
      }
    }
  }
  

`

export const SingerItem = styled.div`
  margin-top: 14px;
  width: 210px;
  height: 62px;
  background: #fafafa;

  .singer-item {
    display: flex;
    width: 210px;
    height: 62px;
    text-decoration: none;

    img {
      width: 62px;
      height: 62px;
    }

    .info {
      padding-left: 14px;
      border: 1px solid #e9e9e9;
      border-left: none;
      height: 60px;
      flex: 1;

      .info-name {
        margin-top: 8px;
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }
    }
  }
`
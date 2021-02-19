import styled from 'styled-components'
import notlogin from '@/assets/img/notlogin.jpg'

export const FriendWrapped = styled.div`
  min-height: 700px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  padding-top: 70px;

  .content {
    width: 902px;
    height: 414px;
    margin: 0 auto;
    background-position: 0 0;
    background-image: url(${notlogin});

    p {
      position:absolute;
      font-size: 14px;
      line-height: 23px;
      width: 270px;
      margin: 178px 0 0 535px;
    }
    

    a {
      display: block;
      position:absolute;
      width: 157px;
      height: 48px;
      margin: 260px 0 0 535px;
      text-indent: -9999px;
      background: url(${notlogin}) no-repeat 0 9999px;
      background-position: 0 9999px;
    }
    a:hover{
      background-position: 0 -430px;
    }
  }
`
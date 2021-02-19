import styled from 'styled-components'
import mymusic from '@/assets/img/mymusic.png'

export const MineWrapped = styled.div`
  min-height: 700px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  padding-top: 104px;

  .content {
    width: 807px;
    height: 268px;
    margin: 0 auto;
    background-position: 0 0;
    background-image: url(${mymusic});
    

    a {
      display: block;
      position:absolute;
      width: 167px;
      height: 45px;
      margin: 202px 0 0 482px;
      text-indent: -9999px;
      background: url(${mymusic}) no-repeat 0 9999px;
      background-position: 0 9999px;
    }
    a:hover{
      background-position: 0 -278px;
    }

  }
`


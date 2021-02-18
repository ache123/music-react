import styled from "styled-components";

import sprite_footer_02 from '@/assets/img/sprite_footer_02.png'
import sprite_footer_01 from '@/assets/img/sprite_footer_01.png'

export const FooterWrapper = styled.div`
  /* display: flex; */
  height: 172px;
  background: #f2f2f2;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`

  /* width: 520px; */
  padding-top: 15px;
  line-height: 24px;

  .link-list {
    display: flex;

    .link-item {
      color: #999; 
    }

    .line {
      margin: 0 10px;
      color: #C2C2C2;
    }
  }

  .list {

    a {
      color: #666;
    }

    span {
      margin-right: 14px;
    }
    

  }
  
  
`

export const FooterRight = styled.ul`
  display: flex;
  margin-top: 33px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${sprite_footer_02});
      background-size: 110px 552px;
    }

    :nth-child(1) .link {
      background-position: -60px -456.5px;
    }
    :nth-child(2) .link {
      background-position: -60px -101px;
    }
    :nth-child(3) .link {
      background-position: 0 0;
    }
    :nth-child(4) .link {
      background-position: -60px -50px;
    }
    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 14px;
      background-image: url(${sprite_footer_01});
      background-size: 180px 139px;
    }

    :nth-child(1) .title {
      width: 72px;
      background-position: 0 -108px;
    }
    :nth-child(2) .title {
      background-position: -1px -91px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
    }
    :nth-child(4) .title {
      background-position: 0 -54px;
    }
    :nth-child(5) .title {
      background-position: -1px -72px;
    }

  }


`
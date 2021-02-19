import styled from 'styled-components'

import download from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

export const BannerWrapped = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .content {
    height: 285px;
    display: flex;
    background-color: red;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    height: 285px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  height: 285px;
  background-image: url(${download});

  a {
    display: block;
    text-indent: -9999px;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background: url(${download}) no-repeat 0 0;
    background-position: 0 9999px;
  }

  a:hover {
    background-position: 0 -290px;
  }

  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
`
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;
  }

  .left {
    left: -68px;
    background-position: 0 -360px;

    :hover {
      background-position: 0 -430px;
    }
  }

  .right {
    right: -68px;
    background-position: 0 -508px;

    :hover {
      background-position: 0 -578px;
    }
  }

`
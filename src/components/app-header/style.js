import styled from "styled-components";

import sprite_01 from '@/assets/img/sprite_01.png'


export const HeaderWrapper = styled.div`
  min-width: 980px;
  height: 75px;
  color: #fff;
  font-size: 14px;
  background-color: #242424;
  

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width:176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        color: #ccc;
        text-decoration: none;
      }

      &:hover a, a.active {
          background-color: #000;
          color: #fff;
          text-decoration: none;
        }

      .active .icon {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background-image: url(${sprite_01});
          background-position: -190px 0;
        }
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 32px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    margin: 0 12px;
    line-height: 32px;
    color: #ccc;
    border-radius: 20px;
    border: 1px solid #4F4F4F;
    background-color: transparent;
  }

  .login{
    color: #787878;
  }

`

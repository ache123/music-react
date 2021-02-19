import styled from 'styled-components'
import sprite_cover from '@/assets/img/sprite_cover.png'

export const SongsCoverWrapped = styled.div`
  width: 140px;
  height: 204px;
  

  .cover-top {
    position:relative;
    width: 140px;
    height: 140px;
    

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;
        padding: 0 10px;
        align-items: center;

        .music {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          background-position: 0 0;
          right: 10px;
          bottom: 5px;
          width: 16px;
          height: 17px;

          :hover {
            background-position: 0 -60px;
          }
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    margin: 8px 0 3px;
    a {
      color: #000;
    }  
  }

  .cover-source {
    display: flex;
    color: #999;

    p {
      margin-right: 3px;
    }

    a {
      color: #666;
    }
  }
`


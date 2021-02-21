import styled from 'styled-components'

export const NewAlbumWrapped = styled.div`
  margin-top: 30px;

  .content {
    height: 186px;
    margin: 20px 0 ;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    display: flex;

    button {
      position: relative;
      top: 71px;
      width: 25px;
      height: 17px;
      cursor: pointer;
    }

    .left-btn {
      background-position: -260px -75px;
    }

    .right-btn {
      float: right;
      background-position: -300px -75px;
    }

    .album {
      width: 645px;
      height: 180px;

      .album-page {
        display: flex !important;
      }
    }


    
  }
`
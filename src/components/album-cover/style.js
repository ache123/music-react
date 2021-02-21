import styled from 'styled-components'

export const AlbumCoverWrapped = styled.div`
  width: ${props => props.width + "px"};
  margin-left: 10px;
  margin-top: 6px;

  .album-content {
    position: relative;
    width: ${props => props.width + "px"};
    height:  ${props => props.height + "px"};
    margin: 20px 0 3px;

    img {
      width: ${props => props.height + "px"};
      height:  ${props => props.height + "px"};
    }

    .cover {
      height:  ${props => props.height + "px"};
      background-position: 0 ${props => props.bgp}
    }
  }

  .name, .artist {
    font-size: 12px;
    display: block;
    width: 90%;
    line-height: 18px;
    color: #000;
  }

  .name {
    font-size: ${props => props.titleSize};
    margin: 8px 0px 3px;
  }

  .artist {
    color: #666;
  }
`
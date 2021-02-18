import styled from 'styled-components'

export const DiscoverWrapped = styled.div`
  .top {
    height:30px;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }
`

export const TopMenu = styled.div`
  display: flex;
  line-height: 35px;
  padding-left: 180px;


  .item {
    height: 20px;
    margin: -5px 17px 0;
    border-radius: 20px;

    a {
      display: inline-block;
      padding: 0 13px;
      
      line-height: 20px;
      color: #fff;

      &:hover, &.active  {
        background: #9B0909;
        text-decoration: none;
        border-radius: 20px;
      }
    }

    
  }
`

export const Content = styled.div`
  
`
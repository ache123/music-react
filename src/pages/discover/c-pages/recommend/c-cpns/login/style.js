import styled from 'styled-components'

export const LoginWrapped = styled.div`
  height: 126px;
  background-position: 0 0;

  p {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }

  a {
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    margin: 0 auto;
    background-position: 0 -195px;

    :hover {
      background-position: -110px -195px;
      text-decoration: none;
    }
  }
`
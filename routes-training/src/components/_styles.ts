import styled from 'styled-components'

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: brown;
  }

  & > a.active {
    text-decoration: none;
    color: cornflowerblue;
  }

  & > a.hover {
    color: steelblue;
  }
`

export const S = {
    NavWrapper
}
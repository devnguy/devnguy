import * as React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
`

const FooterLinksStyles = styled.footer`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
  }
`

const FooterLinks = () => (
  <FooterLinksStyles>
    <ul>
      <li>
        <a href="#">in</a>
      </li>
      <li>
        <a href="#">git</a>
      </li>
      <li>
        <a href="#">mail</a>
      </li>
    </ul>
  </FooterLinksStyles>
)

const Footer = () => (
  <FooterContainer>
    <FooterLinks />
  </FooterContainer>
)

export default Footer

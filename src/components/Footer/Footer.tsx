import * as React from 'react'
import styled from 'styled-components'
import FooterLinks from './FooterLinks'

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
`

const Footer = () => (
  <FooterContainer>
    <FooterLinks />
  </FooterContainer>
)

export default Footer

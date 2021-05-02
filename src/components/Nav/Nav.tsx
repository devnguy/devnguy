import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`

const NavLinksStyles = styled.div``

const NavLogoStyles = styled.div``

const NavLogo = () => <Link to="/">dn</Link>

const NavLinks = () => (
  <NavLinksStyles>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/uses">Uses</Link>
    <Link to="/blog">Blog</Link>
  </NavLinksStyles>
)

const Nav = () => (
  <NavContainer>
    <NavLogo />
    <NavLinks />
  </NavContainer>
)

export default Nav

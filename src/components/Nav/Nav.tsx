import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`

const NavLinksStyles = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    padding-left: 1rem;
  }
`

const NavLogoStyles = styled.div``

const NavLogo = () => <Link to="/">devnguy</Link>

interface NavItemProps {
  to: string
  linkName: string
}

const NavItem = ({ to, linkName }: NavItemProps) => (
  <li>
    <Link to={to}>{linkName}</Link>
  </li>
)

const NavLinks = () => (
  <NavLinksStyles>
    <ul>
      <NavItem to="/about" linkName="about" />
      <NavItem to="/projects" linkName="projects" />
      <NavItem to="/uses" linkName="uses" />
      <NavItem to="/blog" linkName="blog" />
    </ul>
  </NavLinksStyles>
)

const Nav = () => (
  <NavContainer>
    <NavLogo />
    <NavLinks />
  </NavContainer>
)

export default Nav

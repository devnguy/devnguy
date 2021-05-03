import * as React from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyles from '../styles/GlobalStyles'
import Fonts from '../styles/Fonts'
import styled from 'styled-components'
import Nav from '../Nav'
import Footer from '../Footer'

const Styles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 100vh;
`

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyles />
    <Fonts />
    <Helmet>
      <title>devnguy</title>
    </Helmet>
    <Styles>
      <Nav />
      {children}
      <Footer />
    </Styles>
  </>
)

export default Layout

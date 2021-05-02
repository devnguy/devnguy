import * as React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Fonts from '../components/styles/Fonts'
import GlobalStyles from '../components/styles/GlobalStyles'

const Home = () => (
  <>
    <GlobalStyles />
    <Fonts />
    <Header headerText="Home" />
    <Nav />
    <div style={{ fontStyle: 'italic' }}>welcome to gatsby</div>
  </>
)

export default Home

import * as React from 'react'
import { Link } from 'gatsby'

const Nav: React.FC = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
)

export default Nav

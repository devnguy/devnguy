import React from "react"

interface HeaderProps {
  headerText: string
}

const Header: React.FC<HeaderProps> = ({ headerText }) => (
  <div>
    <h1>Hello Gatsby</h1>
    <h2>{headerText}</h2>
  </div>
)

export default Header

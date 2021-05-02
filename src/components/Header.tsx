import * as React from "react"

interface HeaderProps {
  headerText: string
  // children: React.ReactNode
}

const Header = ({ headerText }: HeaderProps) => (
  <div>
    <h1>Hello Gatsby</h1>
    <h2>{headerText}</h2>
    {/* {children} */}
  </div>
)

export default Header

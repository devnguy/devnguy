import * as React from 'react'

interface Props {
  title: string
}

const Header = ({ title }: Props) => (
  <div>
    <h1 style={{ fontStyle: 'italic', fontWeight: 400 }}>{title}</h1>
  </div>
)

export default Header

import * as React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  h1 {
    font-style: italic;
    color: var(--blue);
    font-weight: 400;
  }
`

interface Props {
  title: string
}

const Header = ({ title }: Props) => (
  <HeaderStyles>
    <h1>{title}</h1>
  </HeaderStyles>
)

export default Header

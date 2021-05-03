import * as React from 'react'
import styled from 'styled-components'
import Header from '../Header'

const MainStyles = styled.main``

interface Props {
  title?: string
  children: React.ReactNode
}

const Main = ({ title, children }: Props) => (
  <>
    {title && <Header title={title} />}
    <MainStyles>{children}</MainStyles>
  </>
)

export default Main

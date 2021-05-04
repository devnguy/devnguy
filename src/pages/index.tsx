import * as React from 'react'
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import materialPalenight from '../utils/material-palenight'
import Main from '../components/Main'

const codeString = `
const devnguy = {
  name: 'Devin Nguyen',
  occupation: 'Full Stack Developer',
  isCool: true
}
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`

const Code = () => (
  <SyntaxHighlighter language="javascript" style={materialPalenight}>
    {codeString}
  </SyntaxHighlighter>
)

export default () => (
  <>
    <Main>
      <Container>
        <Code />
      </Container>
    </Main>
  </>
)

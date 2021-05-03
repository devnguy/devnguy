import * as React from 'react'
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import materialPalenight from '../utils/material-palenight'

import Layout from '../components/Layout'
import Main from '../components/Main'

const codeString = `
const devnguy = {
  name: 'Devin Nguyen',
  occupation: 'Full Stack Developer',
  isCool: true
}
`

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  font-size: 1.5rem;
`

const Code = () => (
  <SyntaxHighlighter language="javascript" style={materialPalenight}>
    {codeString}
  </SyntaxHighlighter>
)

export default () => (
  <>
    <Layout>
      <Main>
        <Container>
          <Code />
        </Container>
      </Main>
    </Layout>
  </>
)

import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import materialPalenight from '../utils/material-palenight'

import Layout from '../components/Layout'

const codeString = `
const devnguy = {
  name: 'Devin Nguyen',
  occupation: 'Full Stack Developer',
  isCool: true
}
`

const Code = () => (
  <SyntaxHighlighter language="javascript" style={materialPalenight}>
    {codeString}
  </SyntaxHighlighter>
)

export default () => (
  <>
    <Layout>
      <main>
        <Code />
      </main>
    </Layout>
  </>
)

import * as React from 'react'
import Header from '../components/Header'

import Layout from '../components/Layout'

const content = `
const devnguy = {
  name: 'Devin Nguyen',
  occupation: 'Full Stack Developer',
  isCool: true
}
`

export default () => (
  <>
    <Layout>
      <main>
        <code>{content}</code>
      </main>
    </Layout>
  </>
)

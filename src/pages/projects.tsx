import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Layout from '../components/Layout'

const ProjectSectionStyles = styled.section`
  h2 {
    margin: 0;
    color: var(--green);
    font-weight: 400;
  }
  p {
    margin: 0;
  }
  margin-bottom: 2rem;
`

export default () => (
  <>
    <Layout>
      <Header title="projects by devin nguyen" />
      <main>
        <ProjectSectionStyles>
          <h2>'devnguy'</h2>
          <p>Gatsby, React, Typescript</p>
        </ProjectSectionStyles>
        <ProjectSectionStyles>
          <h2>'Adept'</h2>
          <p>NextJS, React, GraphQL, Prisma, Apollo Client/Server, MySQL</p>
        </ProjectSectionStyles>
        <ProjectSectionStyles>
          <h2>'Hawkins Library'</h2>
          <p>NextJS, React, MySQL</p>
        </ProjectSectionStyles>
      </main>
    </Layout>
  </>
)

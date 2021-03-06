import * as React from 'react'
import styled from 'styled-components'
import Main from '../components/Main'

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
  <Main title="projects by devin nguyen">
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
  </Main>
)

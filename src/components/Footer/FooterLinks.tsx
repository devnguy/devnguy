import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)

const FooterLinksStyles = styled.footer`
  padding: 1rem;
  margin: 1rem;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    padding: 1rem;
  }
  a {
    :hover {
      background-color: transparent;
      color: var(--accent);
    }
  }
`

const FooterLinks = () => (
  <FooterLinksStyles>
    <ul>
      <li>
        <a href="https://github.com/devnguy" target="blank">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/devin-nguyen-b1536b5b/"
          target="blank"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
        </a>
      </li>
    </ul>
  </FooterLinksStyles>
)

export default FooterLinks

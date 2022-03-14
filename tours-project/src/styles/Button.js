import styled, { css } from 'styled-components'

const Button = styled.button`
  background: ${(p) => (p.primary || p.small ? 'lightblue' : 'red')};
  ${(p) =>
    p.small
      ? css`
          padding: 0px;
          letter-spacing: 0;
          display: inline;
          margin: 0 2px;
          font-weight: 100;
        `
      : css`
          padding: 10px 20px;
          letter-spacing: 5px;
          display: block;
          margin: 0 auto;
          font-weight: 800;
        `}
  border: transparent;
  text-transform: uppercase;
  color: white;
`

export default Button

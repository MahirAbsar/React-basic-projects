import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

 body
 {
  background-color: grey;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  display: grid;
  place-items: center;
 }

 h1,h2,h3,h4,h5,h6
 {
  text-transform: capitalize;
  text-align: center;
 }
 .underline
 {
  margin:0 auto;
  width:200px;
  height:8px;
  background: teal;
 }
 img
 {
  display: block;
  width:100%;
  object-fit: cover;
 }
p
{
 line-height: 1.5rem;
 margin-top: 0;
 font-size:20px;
}

.loading
{
 margin-top:20px;
}
 
`

export default GlobalStyles

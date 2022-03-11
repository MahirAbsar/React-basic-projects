import React from 'react'
// hooks
import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import data from './assets/data'
import List from './components/List'
const GlobalStyle = createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body
  {
    min-height:100vh;
    display: grid;
    place-items: center;
    background: lightpink;   

  
  }


`
function App() {
  const [people, setPeople] = useState(data)
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          {people.length} Birthdays Today
        </h2>
        <List people={people} />
        {people.length !== 0 ? (
          <Button onClick={() => setPeople([])}> Delete All </Button>
        ) : (
          <Button onClick={() => setPeople(data)}> Show All </Button>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  background: white;
  border-radius: 10px;
  min-width: 1170px;
  padding: 20px 20px;
`
const Button = styled.button`
  background-color: lightblue;
  color: white;
  border-radius: 50px;
  padding: 10px;
  border: none;
  display: block;
  margin: 0 auto;
`

export default App

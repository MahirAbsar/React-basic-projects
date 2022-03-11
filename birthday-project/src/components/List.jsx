import React from 'react'
import styled from 'styled-components'
function List({ people }) {
  return (
    <div>
      {people.map((singlePeople) => {
        const { name, age, image } = singlePeople
        return (
          <PersonWrapper key={singlePeople.id}>
            <img src={image} alt={name} />
            <div className='person_info'>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </PersonWrapper>
        )
      })}
    </div>
  )
}

const PersonWrapper = styled.article`
  display: flex;
  justify-content: space-between;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    object-fit: cover;
  }
  .person_info {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`

export default List

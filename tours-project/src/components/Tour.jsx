import React from 'react'
import Button from '../styles/Button'
import { TourWrapper, TourInfoWrapper } from '../styles/Tour'
function Tour({ id, name, info, image, price, filterTours }) {
  const [isReadMore, setIsReadMore] = React.useState(false)
  return (
    <TourWrapper>
      <img src={image} alt={name} />
      <TourInfoWrapper>
        <h2>{name}</h2>
        <h2>{price}</h2>
      </TourInfoWrapper>
      {!isReadMore ? (
        <p>
          {info.substring(0, 200)}...
          <Button small onClick={() => setIsReadMore(true)}>
            read more
          </Button>
        </p>
      ) : (
        <p>
          {info}...
          <Button small onClick={() => setIsReadMore(false)}>
            hide info
          </Button>
        </p>
      )}

      <Button
        onClick={() => {
          filterTours(id)
        }}
      >
        not interested
      </Button>
    </TourWrapper>
  )
}

export default Tour

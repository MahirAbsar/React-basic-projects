import React from 'react'
import Tour from './Tour'
function Tours({ data, filterTours }) {
  return (
    <section>
      {data.map((singleTour) => {
        return (
          <Tour key={singleTour.id} filterTours={filterTours} {...singleTour} />
        )
      })}
    </section>
  )
}

export default Tours

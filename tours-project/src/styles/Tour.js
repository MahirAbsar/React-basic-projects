import styled from 'styled-components'
const TourWrapper = styled.article`
  padding: 10px;
  background: white;
  margin-top: 20px;
  text-align: justify;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`

const TourInfoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export { TourWrapper, TourInfoWrapper }

import styled from 'styled-components';

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewWrapper = styled.article`
  background: whitesmoke;
  width: 90vw;
  max-width: 95vw;
  text-align: center;
  margin-top: 20px;
  padding-top: 10px;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  background: pink;
  .quote_icon {
    color: red;
    font-size: 3rem;
    position: absolute;
    left: -0.5rem;
    top: 0.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  justify-content: center;
  gap: 0px 20px;
`;

const Button = styled.button`
  text-transform: capitalize;
  font-size: 0.8rem;
  padding: 0.15rem;
`;

const Name = styled.h2`
  text-transform: uppercase;
`;
const Job = styled.h4`
  text-transform: uppercase;
`;
const Text = styled.p`
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;
const Title = styled(Name)``;
const UnderLine = styled.div`
  height: 0.25rem;
  width: 5rem;
  margin: 0 auto;
  margin-top: 10px;
  background: red;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: -0.5rem;
`;
export {
  MainWrapper,
  ReviewWrapper,
  ImgContainer,
  ButtonContainer,
  Button,
  Name,
  Job,
  Text,
  Title,
  UnderLine,
  Img,
};

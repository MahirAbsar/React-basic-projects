import React from 'react';
import reviews from './data';
import {
  ReviewWrapper,
  ImgContainer,
  ButtonContainer,
  Button,
  Name,
  Job,
  Text,
  Img,
} from './styles/style';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
function Review() {
  const [index, setIndex] = React.useState(0);
  const { name, job, image, text } = reviews[index];
  const checkIndex = (index) => {
    if (index > reviews.length - 1) {
      return 0;
    }
    if (index < 0) {
      return reviews.length - 1;
    }
    return index;
  };
  const prevReview = () => {
    let newIndex = checkIndex(index - 1);
    setIndex((prev) => newIndex);
  };
  const nextReview = () => {
    let newIndex = checkIndex(index + 1);
    setIndex((prev) => newIndex);
  };
  const randomReview = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === index) {
      newIndex += 1;
    }
    setIndex(checkIndex(newIndex));
  };
  return (
    <ReviewWrapper>
      <ImgContainer>
        <Img src={image} alt={name} />
        <RiDoubleQuotesR className='quote_icon' />
      </ImgContainer>
      <Name>{name}</Name>
      <Job>{job}</Job>
      <Text>{text}</Text>
      <ButtonContainer>
        <Button className='prev_btn' onClick={prevReview}>
          <AiOutlineLeft />
        </Button>
        <Button className='next_btn' onClick={nextReview}>
          <AiOutlineRight />
        </Button>
      </ButtonContainer>
      <Button onClick={randomReview}>surprise me</Button>
    </ReviewWrapper>
  );
}

export default Review;

import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
function SingleAccordion({ id, title, info }) {
  const [isShowAccordion, setIsShowAccordion] = React.useState(false);
  return (
    <article key={id}>
      <div className='top'>
        <h2>{title}</h2>
        {!isShowAccordion && (
          <AiFillPlusCircle
            className='icon'
            onClick={() => setIsShowAccordion(true)}
          />
        )}
        {isShowAccordion && (
          <AiFillMinusCircle
            className='icon'
            onClick={() => setIsShowAccordion(false)}
          />
        )}
      </div>
      {isShowAccordion && <p>{info}</p>}
    </article>
  );
}

export default SingleAccordion;

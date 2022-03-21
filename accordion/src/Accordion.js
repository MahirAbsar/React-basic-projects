import React from 'react';
import SingleAccordion from './SingleAccordion';

function Accordion({ accordions }) {
  return (
    <>
      {accordions.map((accordion) => {
        return <SingleAccordion {...accordion} />;
      })}
    </>
  );
}

export default Accordion;

import React from 'react';
import Accordion from './Accordion';
import data from './data';
function App() {
  const [accordions, setAccordions] = React.useState(data);
  return (
    <main>
      <h1>questions and answers about login</h1>
      <Accordion accordions={accordions} />
    </main>
  );
}

export default App;

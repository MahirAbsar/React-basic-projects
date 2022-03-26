import React, { useState } from 'react';
import data from './data';

function App() {
  const [paragraphs, setParagraphs] = useState(0);
  const [texts, setTexts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(paragraphs);
    if (amount < 0) {
      amount = 1;
    }
    if (amount > 10) {
      amount = 10;
    }
    setTexts(data.slice(0, amount));
  };
  return (
    <section className='section_center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='paragraph'>paragraphs: </label>
        <input
          type='number'
          id='paragraph'
          value={paragraphs}
          onChange={(e) => setParagraphs(e.target.value)}
        />
        <button type='submit'>generate</button>
      </form>
      <article className='lorem_text'>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </article>
    </section>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const URL = 'https://course-api.com/react-tabs-project';
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  const { id, order, title, dates, duties, company } = jobs[value];
  return (
    <main>
      <section className='job'>
        <div className='btn_container'>
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`${value === index && 'active'}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <h5>{dates}</h5>
          {duties.map((duty, index) => {
            return <p key={index}>{duty}</p>;
          })}
        </article>
      </section>
    </main>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

const Currency = () => {
  const [currs, setCurrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    fetch('https://latest.currency-api.pages.dev/v1/currencies/eur.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((currs) => {
        setCurrs(currs);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      
      <ul>
        <p>Date: {currs.date}</p>
        <p>1 euro = {currs.eur.sek} sek</p>

      </ul>
    </div>
  );
};

export default Currency;

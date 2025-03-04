import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
        // Insert web api url
          const response = await axios.get('https://kyhn24.azurewebsites.net/api/testimonials');
          setData(response.data);
        } catch (error) {
          setError('Error fetching data');
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
      <div>

        <h1>Data from API:</h1>
        {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}

        <ul>
        {data.map((d, index) => (
          <li key={index}>
            <h2>{d.author}</h2>
            <p>Jobrole: {d.jobRole}</p>
            <p>Starrating: {d.starRating}</p>
            <img src={d.avatarUrl} alt="Description of the image" />
            <p>Comment: {d.comment}</p>
          </li>
        ))}
      </ul>

      </div>
    );
  };

export default Testimonials;

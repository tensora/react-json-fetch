import React, { useEffect, useState } from 'react';

const BooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/books.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data.books);
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
      <h1>Books List:</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Year Published: {book.year_published}</p>
            <p>Genres: {book.genres.join(', ')}</p>
            <p>Rating: {book.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksComponent;

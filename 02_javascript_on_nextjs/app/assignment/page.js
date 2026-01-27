import React from "react";

export default function page() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
    },
    {
      id: 2,
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
    },
    {
      id: 4,
      title: "Parasite",
      year: 2019,
      rating: 8.5,
    },
    {
      id: 5,
      title: "The Godfather",
      year: 1972,
      rating: 9.2,
    },
  ];

  return (
    <div>
      <h1>Movies</h1>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            Title: {movie.title} Year: {movie.age} Rating: {movie.rating}
          </li>
        ))}
      </ol>
    </div>
  );
}

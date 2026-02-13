"use client";
import Card from "@/components/Card";
import React, { useState } from "react";

export default function page() {
  const [movies, setMovies] = useState(null);

  useState(async () => {
    const res = await fetch(
      "https://api.jsonbin.io/v3/qs/698e966543b1c97be97af944",
    );
    const movies = await res.json();
    setMovies(movies.record);
  }, []);
  console.log(movies);

  return (
    <main>
      <header>Sai Lin Hte ID-6807665</header>
      <div className="cards-container">
        {movies?.map((movie) => (
          <Card {...movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}

import { useState } from "react";

const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div>
      <h1>Movie Filter</h1>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Tutti</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

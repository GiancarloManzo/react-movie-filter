const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {
  return (
    <div>
      <h1>Movie Filter</h1>

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

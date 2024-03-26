import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={movies.background_image} />
          <h1>{movies.title}</h1>
          <h2>Rating: {movies.rating}</h2>
          <h2>Runtime: {movies.runtime}</h2>
          <p> Description: {movies.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

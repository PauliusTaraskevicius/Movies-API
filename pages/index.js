import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [movieName, setMovieName] = useState(null);
  const [movieInfo, setMovieInfo] = useState([{
    id: "",
    image: "",
    title: "",
    titleType: "",
    year: "",
  }]);

  //Fetch Movie info from IMDB
  const fetchMovieInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/movie`, {
        params: { movieName },
      });
      const { data } = res;
      const { results } = data;

      const movieData = results.map((movie) => ({
        id: movie.id,
        image: movie.image.url,
        title: movie.title,
        titleType: movie.titleType,
        year: movie.year,
      }));
      setMovieInfo(movieData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(movieInfo);

  return (
    <div>
      <h1>Movies_API</h1>
      <input
        type="text"
        placeholder="Search for any movie..."
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button onClick={fetchMovieInfo}>Search</button>

      {/* const data = posts.map(post => ({name: 'post.firstname', dateregistered: 'post.date', department: 'post.department'}))  */}

      <div>
        {movieInfo.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
      {/* {movieInfo && (
        <div>
          <Image
            src={movieInfo.image.url}
            width={220}
            height={300}
            alt={movieInfo.title}
          />
          <div>
            <h2>
              <span>Title: </span> {movieInfo.title}
            </h2>
            <h2>
              <span>Year: </span> {movieInfo.year}
            </h2>
            <h2>
              <span>Run Time: </span> {movieInfo.runningTimeInMinutes}
            </h2>
            <Link href={`https://www.imdb.com${movieInfo.id}`}>
              <button>Visit on IMDB</button>
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
}

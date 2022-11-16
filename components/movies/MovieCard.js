import Link from "next/link";
import Image from "next/image";

import Meta from "../Meta";


function MovieCard(props) {
  const {
    id,
    title,
    overview,
    popularity,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = props.movie;


  return (
    <div>
      <Meta title="Most popular movies" description="Most popular movies" />
      <div>
        <Link href={`/search/${id}`}>
          <h1>{title}</h1>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width={300}
            height={300}
            alt={overview}
          />
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;

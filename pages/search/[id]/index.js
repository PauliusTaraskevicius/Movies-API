import Image from "next/image";

import { server } from "../../../config";

import Meta from "../../../components/Meta";

function MovieDetails({ post }) {
  const { title, backdrop_path, overview, release_date } = post;

  return (
    <div>
      <Meta title={title} description={overview} />
      <h1>{title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        width={600}
        height={600}
        alt={title}
      />
      <p>{overview}</p>

      <p>
        Realease date: <span>{release_date}</span>
      </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${server}/${context.params?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  let post;
  try {
    post = await res.json();
  } catch (e) {
    console.log("Error", e);
  }

  if (!post) {
    return {
      notFound: true,
    };
  }
  return { props: { post } };
}

// export async function getStaticPaths() {

//   const res = await axios(
//     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=squad&page-1&include_adult=false`
//   );

//   const movies = res.data.results;

//   const ids = movies.map((movie) => movie.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const res = await axios(
//     `${server}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
//   );

//   const movie = res.data;

//   return {
//     props: { movie },
//   };
// }

export default MovieDetails;

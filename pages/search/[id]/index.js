import Image from "next/image";

import { useRouter } from "next/router";

import { server } from "../../../config";

import Meta from "../../../components/Meta";

function MovieDetails({ post }) {
  const { title, backdrop_path, overview, release_date } = post;
  console.log(post)
  const router = useRouter();

  return (
    <div>
      <Meta title={title} description={overview} />

      <button className="bg-white text-black my-2 mx-2" onClick={() => router.back()}>RETURN</button>
      
      <h1>{title}</h1>

      {!backdrop_path ? 
        <Image
          src="/images/no_image.png"
          width={600}
          height={600}
          alt={title}
        /> : 
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          width={600}
          height={600}
          alt={title}
        />
      }
      

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

export default MovieDetails;

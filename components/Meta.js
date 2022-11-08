import Head from "next/head";

function Meta({ keywords, description, title }) {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "WatchMe",
  keywords: "movie app, free movies, popular movies",
  description: "watch movie for free",
};

export default Meta;

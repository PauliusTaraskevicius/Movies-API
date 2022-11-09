export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default {
  fetchPopular: {
    title: "Popular",
    url: `/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchLatest: {
    title: "Latest",
    url: `/latest?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchUpcoming: {
    title: "Upcoming",
    url: `/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  },
};

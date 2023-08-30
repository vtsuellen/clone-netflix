const API = 'b243bbe45169d0ad0909b4739d93fc52';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint: any) => {
  const result = await fetch(`${API_BASE}${endpoint}`);
  const data = await result.json();

  return data;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(
          `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213&language=pt-BR&&api_key=${API}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API}`
        ),
      },
      {
        slug: 'action',
        title: 'Acão',
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API}`
        ),
      },
      {
        slug: 'romance',
        title: 'romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API}`
        ),
      },
    ];
  },
  // pega as informaçoes de um filme especifico 
  getMovieInfo: async (movieId: string, type: string) => {
    let info = {};

    if (movieId) {
      switch (type) {

        case 'movie':
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API}`
          );
          break;

        case 'tv':
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API}`
          );
          break;
      
      }
    }
    return info;
  },
};

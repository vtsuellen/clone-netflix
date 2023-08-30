import { useEffect, useState } from 'react';
import api from '../Api/api';
import MovieRow from '../components/movieRow';
import FeaturedMovie from '../components/featuredMovie';
import Header from '../components/header';
import loading from '../img/Netflix_LoadTime (1).gif';

type IFeatured = {
  original_name: string;
  backdrop_path: string;
  vote_average: string;
  number_of_seasons: number;
  overview: string;
  first_air_date: number;
  genres: { name: string }[];
};

function HomePage() {
  const [movieList, setMovieList] = useState<
    { slug: string; title: string; items: { results: string[] } }[]
  >([]);
  const [featuredData, setFeaturedData] = useState<IFeatured>();
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista
      const list = await api.getHomeList();
      setMovieList(list);

      // pegando o o destaque
      const originals = list.filter((element) => element.slug === 'originals');

      // pegando um filme aleatorio
      const randomChose = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      // pegando filme especifico
      const chosen = originals[0].items.results[randomChose];
      // pegando as informações complementares
      const choseInfo = await api.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(choseInfo as IFeatured);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <>
      <Header black={blackHeader} />
      {movieList.length <= 0 ? (
        <div className='bg-black z-[98] h-screen '>
          <img
            src={loading}
            alt='loading'
            className='z-[99] m-auto bg-black h-2/4 fixed top-0 bottom-0 right-0 left-0'
          />
        </div>
      ) : (
        <div className='bg-[#141414] text-white font-roboto'>
          {featuredData && <FeaturedMovie items={featuredData} />}
          <div className='z-[200]'>
            <section className='-mt-52'>
              {movieList.map((item, key) => (
                <MovieRow key={key} title={item.title} items={item.items} />
              ))}
            </section>
          </div>
          <footer className='flex items-center justify-center'>
            <p>Feito por&nbsp;</p>
            <a href='https://www.linkedin.com/in/vtsuellen/'>Suellen Vitoria</a>
          </footer>
        </div>
      )}
    </>
  );
}

export default HomePage;

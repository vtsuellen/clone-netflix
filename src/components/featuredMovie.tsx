function FeaturedMovie({
  items,
}: {
  items: {
    original_name: string;
    backdrop_path: string;
    vote_average: string;
    number_of_seasons: number;
    overview: string;
    first_air_date: number;
    genres: { name: string}[];
  };
}) {
  const firstDate = new Date(items.first_air_date);

  const genres = [];
  for (const i in items.genres) {
    genres.push(items.genres[i].name);
  }

    let description = items.overview;
    if (description.length > 200) {
      description = description.substring(0, 200) + '...';
    }
   
  return (
    <>
      <section
        className='h-screen z-[100]'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${items.backdrop_path})`,
        }}
      >

        <div className='w-full h-full bg-gradient-to-t from-[#141414] via-transparent to-transparent'>
          <div className='w-full h-full bg-gradient-to-r from-[#141414] from-[30%] via-transparent to-transparent to-[70%] flex flex-col justify-center px-7 pb-40'>

            <div className='text-6xl font-bold'>{items.original_name}</div>

            <div className='mt-4 font-bold '>
              <div className='inline-block text-[#46d369] mr-[15px]'>
              {parseFloat(items.vote_average).toFixed(1)} pontos
              </div>
              <div className='inline-block mr-[15px] '>
                {firstDate.getFullYear()}
              </div>
              <div className='inline-block mr-[15px]'>
                {items.number_of_seasons} temporada
                {items.number_of_seasons !== 0 ? 's' : ''}
              </div>
            </div>

            <div className='mt-4 text-base max-w-[40%] text-[#999]'>
              {description}
            </div>

            <div className='mt-4'>
              <button className='inline-block text-sm font-bold text-black rounded-md bg-[#fff] py-[10px] px-[25px] hover:opacity-70 transition-all mr-4'>
                ▶ Assistir
              </button>
              <button className='inline-block text-sm font-bold text-[#ff] bg-[#333] py-[10px] px-[25px] rounded-md hover:opacity-70 transition-all'>
                + Minha Lista
              </button>
            </div>

            <div className='mt-4 text-[15px] text-[#999]'>
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default FeaturedMovie;

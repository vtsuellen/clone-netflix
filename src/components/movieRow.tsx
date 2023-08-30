import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';

function MovieRow({title,items,}: {title: string; items: { results: string[] }; }) 
{
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    console.log('right');
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listW = items.results.length * 176;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
    
  };

  return (
    <div className='mb-7 group'>
      <h2 className='ml-8 text-2xl font-bold'>{title}</h2>

      <div className='left-0 absolute flex items-center justify-center w-10 overflow-hidden bg-[rgba(0,0,0,0.6)] h-72 z-[99] cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 md:max-w-3xl' onClick={handleLeftArrow} >
        <NavigateBeforeIcon style={{ fontSize: 60 }} />
      </div>

      <div className='right-0 absolute flex items-center justify-center w-10 overflow-hidden bg-[rgba(0,0,0,0.6)] h-72 z-[99] cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500' onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 60 }} />
      </div>

      <div className='pl-8 overflow-x-hidden group'>
        <div className='inline-flex transition-all duration-700' style={{ marginLeft: scrollX, width: items.results.length * 176}}>
          {items.results.length > 0 &&
            items.results.map((item: any, key: any) => (
              <div key={key} className='cursor-pointer w-44 h-72'>
                <img
                  className='w-full h-full transition-all ease-linear scale-90 hover:scale-100'
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;

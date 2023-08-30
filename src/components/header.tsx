import netflix from '../img/netflixlogo.png';
import icon from '../img/Netflix-avatar.png';

function Header({black}: {black: boolean}) {
  console.log(black ? 'bg-#141414' : 'bg-transparent')
  return (
    <header className={`fixed z-[999] h-[70px] w-full flex justify-between items-center px-6  ${black ? 'bg-[#141414]' : 'bg-transparent' } transition-colors duration-500s`}>
      <div className='w-32 h-10'>
        <a href='/home' className='h-full '>
          <img
            src={netflix}
            alt='Logo Netflix'
            className='w-full h-full bg-transparent'
          />
        </a>
      </div>

      <div className='w-8 h-8'>
        <a href='/home' className='h-full'>
          <img
            src={icon}
            alt='Logo Netflix'
            className='w-full h-full bg-transparent'
          />
        </a>
      </div>
    </header>
  );
}

export default Header;

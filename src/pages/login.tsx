import { useNavigate } from 'react-router-dom';
import netflix from '../img/netflixlogo.png';

function Login() {
  const navigate = useNavigate();
  
  return (
    <div className='z-50 w-full min-h-screen'>
      <div className='absolute w-full min-h-screen bg-bg brightness-50 -z-50'></div>
      <header className='z-10 pt-3 pb-3 pl-5'>
        <img src={netflix} alt='Logo Netflix' className='w-48 h-50' />
      </header>
      <div className='w-full max-w-md px-16 m-auto text-white bg-black bg-opacity-75 rounded-md py-14 h-fit'>
        <h2 className='pb-6 font-sans text-4xl font-medium'>Entrar</h2>
        <form >
          <div className='flex flex-col'>
            <input
              className='bg-[#333333] h-12 mb-4 outline-none appearance-none pl-4 rounded-sm focus:border-b-2 border-orange-400 placeholder-[#8c8c8c]'
              required
              type='email'
              placeholder='Email ou número de telefone'
            ></input>
            <input
              className='bg-[#333333] h-12 mb-10 outline-none appearance-none pl-4 rounded-sm focus:border-b-2 border-orange-400 placeholder-[#8c8c8c]'
              required
              type='password'
              placeholder='Senha'
            ></input>
          </div>
          <button
            type='button'
            className='bg-[#e50914] h-12 w-full rounded-sm font-bold mb-2'
            onClick={() => navigate('/home')}
          >
            Entrar
          </button>
          <div className='text-[#b3b3b3] pb-20 flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                className='w-5 h-4 border-none accent-[#737373]'
              />
              <a className='ml-1 text-sm'>Lembre-se de mim</a>
            </div>
            <small className='text-sm'>Precisa de ajuda?</small>
          </div>
          <div className='flex pb-3 text-lg'>
            <p className='text-[#737373]'>Novo por aqui?</p>
            <a href='#' className='pl-2'>
              Assine agora.
            </a>
          </div>
        </form>
        <p className='text-[#737373] text-sm'>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô.
          <a href='#' className='text-[#0071eb]'>
            {' '}
            Saiba mais
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

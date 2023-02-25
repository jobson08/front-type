import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill, RiLockLine, RiMailLine } from 'react-icons/ri'

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [showPassword, setShouPassword] = useState(false)
  return (
<div className="grid grid-cols-1 bg-gray-300 lg:grid-cols-2 min-h-screen">
    <div className="flex flex-col items-center justify-center bg-[#252831] rounded-tl-lg rounded-bl-lg p-4">
      <div className="my-2 mt-0">
        <img src="financ.png" alt="JT Devs" width="100" height="100" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-100">Bem vindo</h1>
        <button className="flex items-center gap-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition-colors">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"></path>
              </g>
          </svg> 
          Iniciar com Google
        </button>
      </div>
      <div className="my-8">
        <p className="text-center ext-4xl relative text-gray-100  before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
        Inciar com email
        </p>
      </div>
      <div className="w-full mb-1">
        <form>
        <div className='p-14 pt-1'>
          <div className="relative mb-4">
          <RiMailLine  className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="email"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Emtre com Email"
            />
          </div>
          <div className="relative mb-6">
          <RiLockLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type={showPassword ? "text":"password"}
              className="py-2 px-8 w-full outline-none rounded-lg"
              placeholder="Senha"
              />             
              {showPassword ? (
                <RiEyeOffFill
                 onClick={() => setShouPassword(!showPassword)}
                 className='absolute  text-blue-500  top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
                />
              ) : (
                <RiEyeFill
                  onClick={()=> setShouPassword(!showPassword)}
                className='absolute  text-blue-500 top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
                />  
              )}
         
          </div>
          <div className="w-full max-w-md mx-auto flex items-center justify-between text-blue-500 mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar</label>
            </div>
            <div>
            <Link
           to='/forget'
            className="text-blue-500 hover:underline transition-all"
          >
            Esquceu a Senha?
          </Link>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Iniciar sessão
            </button>
          </div>
          </div>
        </form>
      </div>
      <div>
        <span className="text-gray-500">
          Criar uma conta {" "}
          <Link
           to='/register'
            className=" text-blue-500 hover:underline transition-all"
          >
            Registrar
          </Link>
        </span>
      </div>
    </div>
    <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
      <img src='login.png' className="w-full object-cover"/>
    </div>
</div>
  )
}

export default Login
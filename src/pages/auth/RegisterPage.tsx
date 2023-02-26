/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { RiEyeFill, RiEyeOffFill, RiLockFill, RiLockLine, RiMailLine, RiUserLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Register = () => {
  const [showPassword, setShouPassword] = useState(false)
  return (
    <div className="grid grid-cols-1 bg-gray-300 lg:grid-cols-2 min-h-screen">
  <div className="flex flex-col items-center justify-center bg-[#252831] rounded-tl-lg rounded-bl-lg p-2">
    <div className="my-2">
    <img src="/financ.png" alt="JT Devs" width="80" height="80" />
    </div>
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-bold text-gray-100">Bem Vindo</h1>
    </div>
    <div className="my-2">
      <p className="text-center relative text-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
       Registrar com email
      </p>
    </div>
    <div className="w-full mb-8">
      <form>
      <div className='p-10 pt-1'>
          <div className="relative mb-4">
          <RiUserLine className='absolute text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="text"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Nome completo"
            />
          </div>
          <div className="relative mb-4">
          <RiMailLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="email"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Email"
            />
          </div>

          <div className="relative mb-6">
          <RiLockFill className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type={showPassword ? "text":"password"}
              className="py-2 px-8 w-full outline-none rounded-lg"
              placeholder="Senha"
              />             
              {showPassword ? (
                <RiLockLine
                 onClick={() => setShouPassword(!showPassword)}
                 className='absolute text-blue-500 top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
                />
              ) : (
                <RiEyeFill
                  onClick={()=> setShouPassword(!showPassword)}
                className='absolute text-blue-500 top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
                />  
              )} 
          </div>
          <div className="relative mb-6">
          <RiLockFill className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type={showPassword ? "text":"password"}
              className="py-2 px-8 w-full outline-none rounded-lg"
              placeholder="Confirmar Senha"
              />             
              {showPassword ? (
                <RiEyeOffFill
                 onClick={() => setShouPassword(!showPassword)}
                 className='absolute  text-blue-500 top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
                />
              ) : (
                <RiEyeFill
                  onClick={()=> setShouPassword(!showPassword)}
                className='absolute  text-blue-500 top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
                />  
              )}
         
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Salvar registro
            </button>
          </div>
          </div>
          
      </form>
    </div>
    <div className='mt-0'>
        <span className="text-xl font-bold text-gray-300">
         Entre com sua conta {" "}
          <Link
           to="/"
            className="text-blue-500 hover:underline transition-all"
          >
            Entrar
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

export default Register
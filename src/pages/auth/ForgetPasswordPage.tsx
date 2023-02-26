/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { RiMailLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <div className="min-h-screen bg-[#252831]  flex items-center justify-center p-2">
  <div className="max-w-lg">
    <div className="flex justify-center mb-8">
      <img src="/financ.png" width="100" height="100" />
    </div>
    <div className="bg-gray-100 w-full rounded-lg p-8 mb-8 shadow-xl">
      <div className="flex flex-col items-center gap-1 mb-8">
        <h1 className="text-[30px] text-blue-500 font-bold">Benvindo</h1>
        <p className="text-gray-600 text-xl font-bold">
          Insira seu email de recuperação
        </p>
      </div>
      <form className="flex flex-col gap-4">
      <div className="relative mb-4">
          <RiMailLine  className='absolute text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="email"
              className="py-2 pl-8 pr-4 w-full  bg-whaite-400 outline-none rounded-lg"
              placeholder="Email"
            />
          </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 px-4 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
    <div className='ml-12'>
      <span className="text-xl font-bold text-gray-200">
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
</div>
  )
}

export default ForgetPassword
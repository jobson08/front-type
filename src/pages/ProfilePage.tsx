import React from 'react'
import avatar from '../data/image/avatar.jpg'
import { RiEdit2Line, RiShieldCheckLine } from 'react-icons/ri'

function ProfilePage() {
  return (
    <>
    <div className='bg-secondary2-bg p-4 rounded-xl mb-2'>
      <h1 className='text-xl text-black'>Perfil</h1>
      <hr className='my-4 border-gree1-bg' />
      <form>
        <div className='flex flex-col md:flex-row nitems-center mb-4'>
          <div className='w-1/4'>
            <p>Avatar</p>
          </div>
          <div className='flex-1'>
            <div className='relative mb-2'>
              <img src={avatar} alt="avatar" className='w-28 h-28 object-cover rounded-lg' />
              <label htmlFor="avatar"
                className='absolute bg-gray1-bg p-2 rounded-full hover:cursor-pointer-top-2 lefet-24 hover:bg-slate-400 -top-4 left-24'>
                <RiEdit2Line />
              </label>
              <input type="file" id="avatar" className='hidden' />
            </div>
            <p className='text-gray-500 text-sm'>Arquivo permitidos: png, jpg, jpeg.</p>
          </div>
        </div>
        {/*Entrada de informação */}
        <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-4'>
          <div className='w-full md:w-1/4'>
            <p>
              Nome
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1 flex items-center gap-4'>
            <div className='w-full'>
              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Nome' />
            </div>
            <div className='w-full'>
              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Apelidio' />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Empresa
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Empresa' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Telefone
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <input type="text" className='w-60 py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Telefone' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Endereço
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1 flex items-center gap-4'>
            <div className='w-full'>
              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Endereço' />
            </div>
            <div className='w-full'>
              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Numero' />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Cidade
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <select name="cidade" id="cidade" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'>
            <option value="Cabo de Santo Agostinho">Cabo de Santo Agostinho</option>
            <option value="Escada">Escada</option>
            <option value="Ipojuca">Ipojuca</option>
            <option value="Jaboatão dos Guararapes">Jaboatão dos Guararapes</option>
            <option value="Recife">Recife</option>
          </select>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Bairro
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Bairro' />
          </div>
        </div>
      </form>
      <hr className='my-4 border-gree1-bg' />
      <div className='flex justify-end'>
        <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
          Salvar
        </button>
      </div>
    </div>

    {/*Login User */}
    <div className='bg-secondary2-bg p-8 mt-10 rounded-xl'>
      <h1 className='text-xl text-black'>Login</h1>
      <hr className='my-4 border-gree1-bg' />
      <form action="">
      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Email
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <input type="Email" className='w-100 py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Email' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Senha
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <input type="password" className='w-60 py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='******' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Comfirmar Senha
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <input type="password" className='w-60 py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='******' />
          </div>
        </div>
      </form>
      <div className='grid grid-cols-1 md:grid-cols-8 items-center mt-4 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600'>
        <div className='flex justify-center'>
          <RiShieldCheckLine className='text-5xl text-green-600'/> 
        </div>
        <div className='md:col-span-6'>
            <h5 className='text-gray-900 text-xl'>Sua Senha é segura</h5>
            <p className='text-green-700'>
              sua senha é bastente segura
            </p>
          </div>
      </div>
      <hr className='my-4 border-gree1-bg' />
      <div className='flex justify-end'>
        <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
          Salvar
        </button>
      </div>
    </div>
    </>
  )
}

export default ProfilePage
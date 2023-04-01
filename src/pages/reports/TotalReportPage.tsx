import Modal from 'components/Modal'
import React, { useState } from 'react'
import { RiHashtag, RiLineChartLine } from 'react-icons/ri'
import avatar2 from '../../data/image/avatar2.jpg'
import avatar3 from '../../data/image/avatar3.png'
import avatar4 from '../../data/image/avatar4.jpg'
import { Link } from 'react-router-dom'

const TotalReportPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div>
      <div className='flex justify-end space-x-2 pt-2'>
        <button onClick={() => setShowModal(true)}
          className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors' >
          criar
        </button>
      </div>
      <Modal show={showModal} setShow={() => setShowModal(!showModal)}>
        <h1 className="pb-5 text-2xl font-medium text-blue-400">Cadastro </h1>

        <hr className='mt-5 mb-2 border-gree1-bg' />
        <div className='flex justify-end space-x-2 pt-2'>
          <button onClick={() => setShowModal(false)}
            className='bg-red-600 text-white font-bold py-2 px-4 ml-2 rounded-lg hover:bg-red-400 transition-colors'>
            Cancelar
          </button>
          <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
            Salvar
          </button>
        </div>

      </Modal>

      {/*section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-5 gap-4">
          {/* Card 1 */}
          <div className="bg-indigo-600 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Earnings</h4>
            <span className="text-5xl text-white">&euro; 8,350</span>
            <span className="py-1 px-3 bg-indigo-700/80 rounded-full">
              + 10% since last month
            </span>
          </div>
          {/* Card 2 */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-indigo-900/10 rounded-xl p-4">
              <span className="bg-indigo-700 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                98
              </span>
              <div>
                <h3 className="font-bold">Rank</h3>
                <p className="text-gray-500">In top 30%</p>
              </div>
            </div>
            <div className="bg-indigo-700/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-indigo-700 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold">Projects</h3>
                  <p className="text-gray-500">8 this month</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-indigo-500/20 py-1 px-4 rounded-full">
                  Mobile app
                </span>
                <span className="bg-indigo-500/20 py-1 px-4 rounded-full">
                  Branding
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Your projects</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                   src={avatar2} alt="user2"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Logo design for Bakery</h3>
                  <p className="text-gray-500">1 day remaining</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatar2} alt="user2"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Logo design for Bakery</h3>
                  <p className="text-gray-500">1 day remaining</p>
                </div>
              </div>
              <div className="flex justify-end">
              <Link
                  to="/"
                  className="hover:text-indigo-500 transition-colors hover:underline"
                >
                  See all projects
                </Link>
              </div>
            </div>
          </div>
        </section>

    {/*section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                   src={avatar3} alt="user3"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Alexander Williams</h3>
                    <p className="text-gray-500">JQ Holdings</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 1,200.87</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={avatar4} alt="user4"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jhon Philips</h3>
                    <p className="text-gray-500">Inchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 12,998.88</span>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-indigo-500 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Recommended project</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                   src={avatar2} alt="user2"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Thomas Martin</h3>
                    <p className="text-gray-500">Updated 10m ago</p>
                  </div>
                </div>
                <div>
                  <span className="bg-indigo-500 py-2 px-4 rounded-full text-white">
                    Design
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold">
                  Need a designer to form branding essentials for my business.
                </h5>
                <p className="text-gray-500">
                  Looking for a talented brand designer to create all the
                  branding materials my new startup.
                </p>
              </div>
              <div className="bg-indigo-300/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                  <sup className="text-sm text-gray-500">&euro;</sup>{" "}
                  <span className="text-2xl font-bold mr-2">8,700</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <div>
                  <span className="border border-indigo-500 text-indigo-500 py-2 px-4 rounded-full">
                    Full time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default TotalReportPage
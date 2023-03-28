import Modal from 'components/Modal'
import React, { useState } from 'react'


const TotalReportPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div>
      <Modal show={showModal} setShow={setShowModal}
      title={'Criar despesas'}  
      />
     <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'
     onClick={() => setShowModal(true)}>
      criar
    </button>
    </div>
  )
}

export default TotalReportPage
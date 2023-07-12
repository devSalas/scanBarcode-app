import { useContext, useEffect, useRef, useState } from 'react'
import {createPortal} from 'react-dom'

const ModalMessage = ( {showModalMessage, setShowModalMessage,setSendBarcodeData}) => {


  const modalMessageRef  = useRef("")


  const handleClickYes = ()=>{
     console.log("first")
    setShowModalMessage(! showModalMessage)
    setSendBarcodeData(true)
  }

  const  hideModal = ()=>{
    setShowModalMessage(! showModalMessage)
  }



  return (
    <div >
      {createPortal(
      <div ref={modalMessageRef} className='fixed inset-0 z-10  backdrop-blur-sm overflow-hidden flex  justify-center items-center'>
        <div  className='aspect-video text-white/70 bg-cyan-900 p-4 rounded-md flex flex-col justify-between'>
          <div className='py-8'>
            <p>¿Estas seguro de que quieres Guardar?</p>
          </div>
          <div className='flex self-end gap-4'>
            <button onClick={handleClickYes} className='bg-black text-white py-1 px-6 rounded-sm'>si</button>
            <button onClick={hideModal}  className='bg-gray-900 text-slate-500 py-1 px-6 rounded-sm'>no</button>
          </div>
        </div>
        
      </div>,
      document.body)}
    </div>
  )
}

export default ModalMessage
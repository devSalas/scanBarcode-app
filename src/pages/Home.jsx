import Barcode from '../components/Barcode'
import FormBarcode from '../components/FormBarcode'

import {useContext} from "react"
import { ScanBarcodeContext} from '../global/ScanBarcodeStateProvider'

 export default function Home  (){

  const {barcodeData, setBarcodeData} = useContext(ScanBarcodeContext)


  return (
    <div className='w-ful h-full p-4'>
      <Barcode  />
      <FormBarcode />
    </div>
  )
}


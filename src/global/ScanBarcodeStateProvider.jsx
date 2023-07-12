/* import { createContext, useState } from 'react'

const initialState = { barcode: 0, product: "", amount: 0 }

export const ScanBarcoderContext = createContext({}) 


export default function ScanBarcodeStateProvider({ children }) {
  const [barcodeDate, setBarcodeDate] = useState(initialState)

  return (
    <ScanBarcoderContext.Provider value={{ barcodeDate, setBarcodeDate }}>
      {children}
    </ScanBarcoderContext.Provider>
  )
} */

import { createContext, useState } from 'react';

const initialState = { barcode: 0, name: "", amount: 0 };

export const ScanBarcodeContext = createContext({});

export default function ScanBarcodeStateProvider({ children }) {
  const [barcodeData, setBarcodeData] = useState(initialState);

  return (
    <ScanBarcodeContext.Provider value={{ barcodeData, setBarcodeData }}>
      {children}
    </ScanBarcodeContext.Provider>
  );
}

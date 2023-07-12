import { ScanBarcodeContext } from '../global/ScanBarcodeStateProvider.jsx';
import Edit from '../icons/Edit.jsx';
import ModalMessage from './ModalMessage';
import { useState, useContext, useEffect } from 'react';

const FormBarcode = () => {
  //state global
  const { barcodeData, setBarcodeData } = useContext(ScanBarcodeContext);
  //state local
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [barcodeDataLocal, setBarcodeLocal] = useState(barcodeData);
  const [sendBarcodeData, setSendBarcodeData] = useState(false);

  useEffect(() => {
    if (!sendBarcodeData) return ;

    const sendData = async () => {

      const data =await {...barcodeData,amount:parseInt(barcodeData.amount)}

      console.log({barcodeData})
      const res = await fetch('http://localhost:3002/api/v1/scanbarcode', {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });
      const json =await res.json();
      console.log(json);

      
    };
    sendData();
    setBarcodeData(false)
  }, [sendBarcodeData]);

  const handleChangeInput = (e) => {
    setBarcodeLocal({ ...barcodeDataLocal, [e.target.name]: e.target.value });
    console.log(barcodeDataLocal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBarcodeData(barcodeDataLocal);
    setShowModalMessage(true);
    
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2>numeros del código de Barras</h2>
        <div className="flex  h-10">
          <input
            onChange={handleChangeInput}
            type="text"
            name="barcode"
            
            className="block w-full bg-cyan-400 rounded-md grow"
            value={barcodeDataLocal.barcode}
          />
          <Edit />
        </div>
        <label htmlFor="product" className="my-8">
          Nombre del Producto
          <br />
          <input
            onChange={handleChangeInput}
            type="text"
            name="name"
            className="text-black block w-full h-10 bg-cyan-400 rounded-md"
            value={barcodeDataLocal.name}
          />
        </label>
        <label htmlFor="product">
          cantidad de Productos
          <br />
          <input
            onChange={handleChangeInput}
            type="number"
            name="amount"
            className="block w-full h-10 bg-cyan-400 rounded-md"
            value={barcodeDataLocal.amount}
          />
        </label>
        <div className="flex gap-2 my-8 justify-end">
          <button
            type="submit"
            className="bg-cyan-800 px-4 py-2 rounded-md text-white"
          >
            Guardar
          </button>
          <button
            type="button"
            className="bg-cyan-200 opacity-80 px-4 py-2 rounded-md text-black"
          >
            Cancelar
          </button>
        </div>
        {showModalMessage ? (
          <ModalMessage
            showModalMessage={showModalMessage}
            setShowModalMessage={setShowModalMessage}
            setSendBarcodeData={setSendBarcodeData}
          />
        ) : null}
      </form>
    </div>
  );
};

export default FormBarcode;

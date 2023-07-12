import {useState,useContext,useEffect} from "react"
import Quagga from 'quagga';
import "./Barcode.css"
import { ScanBarcodeContext } from "../global/ScanBarcodeStateProvider";


export default function Barcode() {

  const [isActive,setIsActive]=  useState(false)
  const {barcodeData,setBarcodeData} = useContext(ScanBarcodeContext)


  const handleClick = ()=>{
    setIsActive(!isActive)
    console.log("entro")
  }

  useEffect(() => {
    console.log("inicio del useefect")
    if(!isActive) return;
        console.log("esta activo ", isActive)
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#barcode-scanner'),
        constraints: {
          width:"auto",
          height:"auto",
          facingMode: "environment" // Usa la cámara trasera del dispositivo
        },
      },
      decoder: {
        readers: ["ean_reader"] // Configura el lector para códigos EAN
      }
    }, (err) => {
      if (err) {
        console.error("Error al iniciar Quagga:", err);
      } else {
        console.log("Quagga iniciado correctamente");
        Quagga.start();
      }
    });

    Quagga.onDetected((data) => {
      console.log("Código de barras detectado:", data.codeResult.code);
      const barcode = data.codeResult.code;
        setBarcodeData({...barcodeData,barcode})
        setIsActive(!isActive)
    });

    return () => {
      Quagga.stop(); // Detiene la detección cuando se desmonta el componente
    };
  }, [isActive, setBarcodeData]);

  return (
    <div  className="barcode-scanner-container">
      <h1  className="">Escáner de códigos de barras</h1>
        <div id="barcode-scanner" className='w-full aspect-video bg-black my-4'></div>
      <button onClick={handleClick} className='w-full p-2 rounded-md block  font-bold text-white bg-cyan-700'>
        {
          (isActive)
          ? "parar escaneo"
          : "iniciar Escaneo"
        }

      </button>
    </div>
  );
}
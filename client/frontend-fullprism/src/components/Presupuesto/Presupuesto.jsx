import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './presupuesto.css';
import Logo from '../../assets/LogoHorizontal.png';
import { useSelector } from "react-redux";
import { sliceDate } from '../../utils/functions';

const Presupuesto = ({download}) => {
  const data= useSelector((state)=> state.dataBudget);
  const total= data?.order.totalBudget*data.dolarValue;
  console.log(data)

  const handleGeneratePdf = () => {
    const input = document.getElementsByClassName("presupuesto")[0];
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("presupuesto.pdf");
    });
    return download=false
  };

  useEffect(()=> {
    if(download) handleGeneratePdf();
  }, [download])


  return (
    <>
    <div className="presupuesto ml-20">
      <div className="detail mt-5 border py-6 px-20">
        <div className="flex flex-row justify-between">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="text-right pt-10">
            <h2>Presupuesto</h2>
            <p className="orderNum">Orden: # {data.order.id}</p>
            <p>Fecha: {sliceDate(data.order.createdAt)}</p>
          </div>
        </div>

        <div class="flex flex-col my-10 w-full">
        <div class="inline-block align-middle px-14">
        <table className="divide-y divide-gray-200 dark:divide-gray-600 w-full">
          <thead className="">
            <tr className="">
              <th className="p-4 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Detalle</th>      
              <th className="p-4 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Cantidad</th>
              <th className="p-4 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Color</th>
              <th className="p-4 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Material</th>
              <th className="p-4 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Parámetros</th>
              <th className="p-4 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Precio Unitario</th>
              <th className="p-4 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {data.order.models.map((model, index) => (
              <tr key={index} className=" bg-gray-50 dark:bg-gray-700 text-center">
                <td className="py-2 text-left text-md border-y border-[1]">{model.name}</td>
                <td className="py-2 text-md border-y border-[1]">{model.OrderDetail.quantity}</td>
                <td className="py-2 text-md border-y border-[1]">{model.OrderDetail.color}</td>
                <td className="py-2 text-md border-y border-[1]">{model.material}</td>
                { model.parameters ? 
                  <td className="py-2 text-md border-y border-[1]">{model.parameters.length < 20 ? model.parameters : `${model.parameters.slice(0,20)}...`}</td> 
                  : <td className="py-2 text-md border-y border-[1]"> - </td>
                }
            
                <td className="text-md border-y border-[1]">$ {model.price*data.dolarValue}</td>
                <td className="text-md border-y border-[1]">$ {model.OrderDetail.subtotal*data.dolarValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="pt-6 flex flex-row items-center justify-end">
        <thead className="flex flex-col items-center gap-2">
            <tr className="">
              <th className="px-8 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">Subtotal</th>      
            </tr>
            <tr className="">
              <th className="px-8 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">IVA</th>      
            </tr>
            <tr className="">
              <th className="px-8 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">TOTAL</th>      
            </tr>
          </thead>
          <tbody className="flex flex-col items-end gap-2">
          
              <tr className=" text-md text-center">
                <td>$ {total}</td>
              </tr>
              <tr className=" text-md text-center ">
                <td>21%</td>
              </tr>
              <tr className=" text-xl font-semibold text-center ">
                <td>${total*0.21 + total}</td>
              </tr>
          
          </tbody>
        </table>

              {
                data.observations.length? 
                <div className="py-20">
                  <p className="text-xs">Observaciones añadidas al pedido:</p>
                  <p className="text-xs">{data.observations}</p> 
                </div> : null
              }
        </div>
   
        </div>
        <div class="mt-48 p-10">
     <div class="border-t pt-9 border-slate-200 flex">
      <div class="text-md font-light text-slate-700">
       <p >
        Este presupuesto tiene una validez de 20 días. <br/> 
        Forma de pago a convenir.<br/> 
        Plazo de entrega 10 días hábiles a partir de la confirmación de esta presupuesto.<br/> <br/>
        Con una profunda comprensión de la tecnología proporcionamos soluciones a lo largo de toda la cadena de valor de la fabricación aditiva. <br/>
        FullPrism está especialmente equiparada para ofrecer variedad de características con una gran relación precio/calidad.<br/>
        Tanto para prototipos complejos como para mayores volúmenes de producción, nuestro enfoque basado en la eficiencia está a la altura de la tarea.
        </p>
      </div>
     </div>
    </div>
      </div>

     
    </div>
    
     </>
  );
};

export default Presupuesto;
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './presupuesto.css';
import Logo from '../../assets/LogoHorizontal.png';

const Presupuesto = () => {
  const presupuestoData = {
    titulo: "Presupuesto Mensual",
    fecha: "2023-07-26",
    numOrder: 2,
    gastos: [
      {
        nombre: "Alquiler   nombre muyy largoodoo dpfdpfkdffdldfldmfdmdf dskfdnfknkfnkgfngkfngkfdknfdkgn fdgkfgnfkgnfkgkfngkf",
        cantidad: 3,
        color: 'blanco',
        material: 'PLA',
        preciounitario: 200,
        subtotal: 1000,
        parametros: '45°calor lalala sadlfdsmf '
      },
      {
        nombre: "Comidfsdfgfgfdgosdfjdsfdksdsgkfdgnkfdngfdkngkgfkgnkfgkfdkgkfda",
        cantidad: 2,
        color: 'blanco',
        material: 'PLA',
        preciounitario: 200,
        subtotal: 1000,
        parametros: '45°calor lalala'
      },
      {
        nombre: "Transporte",
        cantidad: 5,
        color: 'blanco',
        material: 'PLA',
        preciounitario: 200,
        subtotal: 1000,
        parametros: '45°calor lalala'
      },
    ],
  };

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
  };

  return (
    <>
  
     <button className="bg-blue-500 py-1 px-3 mx-20 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" onClick={handleGeneratePdf}>Descargar Presupuesto</button>
     <button className="bg-blue-500 py-1 px-3 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" onClick={handleGeneratePdf}>Visualizar Presupuesto</button>

    <div className="presupuesto ml-20">
      <div className="detail mt-5 border py-6 px-20">
        <div className="flex flex-row justify-between">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="text-right pt-10">
            <h2>{presupuestoData.titulo}</h2>
            <p className="orderNum">Orden: # {presupuestoData.numOrder}</p>
            <p>Fecha: {presupuestoData.fecha}</p>
          </div>
        </div>

        <div class="flex flex-col my-10 w-full">
        <div class="inline-block align-middle px-14">
        <table className="divide-y divide-gray-200 dark:divide-gray-600">
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
            {presupuestoData.gastos.map((gasto, index) => (
              <tr key={index} className=" bg-gray-50 dark:bg-gray-700 text-center">
                <td className="py-2 text-left text-md border-y border-[1]">{gasto.nombre}</td>
                <td className="py-2 text-md border-y border-[1]">{gasto.cantidad}</td>
                <td className="py-2 text-md border-y border-[1]">{gasto.color}</td>
                <td className="py-2 text-md border-y border-[1]">{gasto.material}</td>
                <td className="py-2 text-md border-y border-[1]">{gasto.parametros}</td> 
                {/* //si es muy largo lo acorto y le mando unos ... */}
                <td className="text-md border-y border-[1]">{gasto.preciounitario}</td>
                <td className="text-md border-y border-[1]">{gasto.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="pt-6 flex flex-row items-center justify-end">
        <thead className="">
            <tr className="">
              <th className="px-8 py-2 text-sm font-semibold tracking-wider text-center text-black-300  dark:text-white">Subtotal</th>      
            </tr>
            <tr className="">
              <th className="px-8 py-1 text-sm font-semibold tracking-wider text-center text-black-300  dark:text-white">IVA</th>      
            </tr>
            <tr className="">
              <th className="px-8 py-1 text-md font-semibold tracking-wider text-center text-black-300  dark:text-white">TOTAL</th>      
            </tr>
          </thead>
          <tbody className="">
          
              <tr className=" text-sm text-center">
                <td className="py-2">$ 5000</td>
              </tr>
              <tr className=" text-sm text-center ">
                <td className="py-1">21%</td>
              </tr>
              <tr className=" text-md font-semibold text-center ">
                <td className="py-1">5000*21%</td>
              </tr>
          
          </tbody>
        </table>

              <h2 className="py-10">ACA IRIAN LAS OBSEERVACIONES Q DEJO EN LA ORDEN EL CLIENTE</h2>
        
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
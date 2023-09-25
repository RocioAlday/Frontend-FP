import React from "react";
import {TbFreeRights} from 'react-icons/tb';
import { BsFillPersonVcardFill, BsFillPatchCheckFill } from 'react-icons/bs';
import { MdSupportAgent, MdPrecisionManufacturing } from 'react-icons/md';
import { PiCertificateDuotone } from 'react-icons/pi';
import './aboutUs.css';

const AboutUs= ()=> {

    return (
        
        <div className='bg-imageContact py-36 pb-80 flex items-center justify-center px-20'>
            <div className="bg-red-50 rounded-md bg-opacity-60 text-start p-20 text-lg text-gray-960 font-medium w-full animate-fadeIn">
                <h1 className="transition-opacity transform hover:opacity-100 hover:translate-y-0">FullPrism es una empresa especializada en brindar servicios de impresión 3D / fabricación aditiva para empresas.
                    <br/>Analizamos, desarrollamos e implementamos soluciones para empresas.
                </h1>
                <h1 className="py-4">
                Con una profunda comprensión de la tecnología, proporcionamos soluciones a lo largo de toda la cadena de valor de la fabricación aditiva.
                </h1>
                <ul className="pl-12">
                    <li className="flex items-center pb-4"> <TbFreeRights size={26} className="mr-3 text-gray-800"/> Sin inversión inicial</li>
                    <li className="flex items-center pb-4"> <BsFillPersonVcardFill size={26} className="mr-3 text-gray-800"/> Sin personal exclusivo</li>
                    <li className="flex items-center pb-4"><MdSupportAgent size={26} className="mr-3 text-gray-800"/> Asesoramiento personalizado</li>
                    <li className="flex items-center pb-4"> <PiCertificateDuotone size={26} className="mr-3 text-gray-800"/> Especialización</li>
                    <li className="flex items-center pb-4"> <BsFillPatchCheckFill  size={26} className="mr-3 text-gray-800" />  Variedad de tecnologías, materiales y características</li>
                    <li className="flex items-center pb-4"> <MdPrecisionManufacturing size={26} className="mr-3 text-gray-800"/>Gran capacidad de producción</li>
                </ul>
            </div>
        </div>
        
    )
}

export default AboutUs;

import React from "react";
import image from '../../assets/Impresion-3D.jpg';
import './home.css';

const Home= ()=> {
    return (
        <div className="bg-fondo h-screen">
        <div className=" max-w-screen-xl  h-screen flex flex-wrap items-center justify-between mx-auto p-4 ">
          
            <div className="flex flex-col justify-center text-center w-full px-2 py-8">
                <h1 className="py-3 text-5xl md:text-7xl font-bold">FABRIQUE DE FORMA MAS EFICIENTE</h1>
                <p className="text-2xl mt-5">Mejore la competitividad de su empresa con tecnologías 3d</p>
                <button className="mt-6 py-3 px-6 md:w-[50%] md:self-center bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold border border-blue-400 rounded ">Podemos Ayudarte?</button>
            </div>
          
        </div>
        </div>
    )
};

export default Home;
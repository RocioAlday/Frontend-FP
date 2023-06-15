import React from "react";
import { Link } from "react-router-dom";

const Login= ()=> {
    return (
        <div className="flex items-center justify-center">
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="usuario">
                    Usuario
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usuario" type="text" placeholder="Ingrese su usuario"/>
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="contraseña">
                    Contraseña
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="contraseña" type="password" placeholder="******************"/>
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    Loguearse
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Olvidaste tu clave?
                </a>
                </div>
                
                <button class=" mt-8 w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    <Link to='/register'>Registrarse</Link>
                </button>
             
            </form>
       
        </div>
        </div>
   
    )
};

export default Login;
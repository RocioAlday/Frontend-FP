import React from 'react';
import '../Footer/footer.css';
import { Link } from 'react-router-dom';
import { IoIosCall, IoLogoLinkedin } from 'react-icons/io';
import { MdLocationPin, MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <>
       
    <footer class="bg-customGray">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-around">
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">RECURSOS</h2>
                        <ul class="text-gray-600 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <Link to= "/contacto" className="hover:underline">Formulario de Contacto</Link>
                            </li>
                            {/* <li class="mb-4">
                                <a href="" class="hover:underline">Mi Cuenta</a>
                            </li> */}
                            <li class="mb-4">
                                <a href="" class="hover:underline">Políticas de Privacidad</a>
                            </li>
                            {/* <li class="mb-4">
                                <a href="" class="hover:underline">Términos y Condiciones</a>
                            </li> */}
                            
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Nosotros</h2>
                        <ul class="text-gray-600 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="" class="hover:underline ">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="" class="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:justify-between mr-4'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Datos de Contacto</h2>
                        
                                    <div className= 'text-gray-800 flex items-center gap-4' >
                                        <MdLocationPin size={20} className='text-gray-800'/>
                                       <p> Sarachaga 1200 - Alta Córdoba, Córdoba, Arg <br />
                                        Código Postal: 5000
                                        </p>
                                       
                                    </div>
                                    
                                    <p className='mt-2 flex items-center gap-4'> <IoIosCall size={20} className='mb-0.5 text-gray-800'/>
                                        <a href='tel: +54 351 45770234' className='mt-3 d-block mb-5 text-black'>
                                        + 54 351 6077198
                                        </a> 
                                    </p>
                                   
                                    <p className='flex items-center gap-4'> <MdEmail size={18} className='mb-1 text-gray-800' /> <a href='mailto: mymail.98@gmail.com' className='mt-3 d-block mb-5 text-black'>
                                    fullprism3d@gmail.com
                                    </a>
                                    </p>          
                    </div>
                </div>
            </div>
      <hr class="my-6 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-600 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">FullPrism</a>
          </span>
          
              <Link to= "https://www.linkedin.com/company/full-prism/">
                  <IoLogoLinkedin size={30} className='text-gray-800'/>
                  <span class="sr-only">LinkedIn</span>
              </Link>
        </div>
     
    </div>
</footer>

</>
    )
};

export default Footer;
import React, { useEffect } from 'react';
import foto from '../../assets/userIcon.jpg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {userInfoData } from '../../actions/userActions';
import LogoHorizontal from '../../assets/LogoHorizontal.png';

const Header = () => {
  let userLogin= useSelector((state)=> state.userData);
  const userInfo= useSelector((state)=> state.userLogin);
  const dispatch= useDispatch();
  console.log(userLogin);
  
 useEffect(()=> {
  dispatch(userInfoData())
 }, [])

return (
        <>
        
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
  <a href="" className="flex items-center">
      <img src={LogoHorizontal} className="w-40 mr-3" alt="FullPrism Logo" />
  </a>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img className="w-full h-9 rounded-full" src={foto} alt="user photo" />
      </button>
      {/* Dropdown menu */}
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        {userLogin.hasOwnProperty('firstname') || userInfo.hasOwnProperty('firstname') ? 
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{userLogin.hasOwnProperty('firstname')? userLogin.firstname : userInfo.firstname}</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userLogin.hasOwnProperty('email')? userLogin.email : userInfo.email}</span>
          </div> : null
        }
       
        <ul className="py-2" aria-labelledby="user-menu-button">
          {!userLogin.hasOwnProperty('email') || !userInfo.hasOwnProperty('email') ? 
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <button ><Link to='/login'>Loguearme</Link></button>
            </li> : null
          }

          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          {userLogin.role==='Client' || userInfo.role==='Client' ? 
            <button ><Link to='/orderStatus'>Mis Pedidos</Link></button> :
            userLogin.role==='Admin' ? <button>Tablero de Producción</button> : null
          }
          </li>
         
          {userLogin.role==='Admin' || userInfo.role==='Admin' ? 
           <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
           <button>Tablero de Gestión</button>
           </li> : null
          }
         {userLogin.hasOwnProperty('email') || userInfo.hasOwnProperty('email') ? 
          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          <button ><Link to='/configPerfil'>Configuración</Link></button>
          </li> : null
          }
          {userLogin.hasOwnProperty('email') || userInfo.hasOwnProperty('email') ? 
          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          <button ><Link to='/logout'>Salir</Link></button>
          </li> : null
          }
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="mt-3 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
      <Link to= "/piezas" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Piezas</Link>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Instructivos</a>
      </li>
      <li>
      <Link to= "/orderStatus" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Estado de Pedidos</Link>
      </li>
      <li>
      <Link to= "/orderDetail" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pedidos Pendientes </Link>
      </li>
      <li>
      <Link to= "/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto </Link>
      </li>
      {/*<li>
       <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..."/>
      </div>
      </li> */}
    </ul>
  </div>
  </div>
</nav>


        </>
    )

};

export default Header;
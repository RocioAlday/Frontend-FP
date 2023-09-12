import React, { useEffect, useState } from 'react';
import foto from '../../assets/userIcon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {userInfoData, logOut } from '../../actions/userActions';
import LogoHorizontal from '../../assets/LogoHorizontal.png';

const Header = () => {
  let userLogin= useSelector((state)=> state.userData);
  const userInfo= useSelector((state)=> state.userLogin);
  const [index, setIndex]= useState(0);
  console.log(userInfo);
  const dispatch= useDispatch();
  console.log(userLogin);
  let history= useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 useEffect(()=> {
  dispatch(userInfoData())
 }, [userInfo])

 function handleClickItem(e, index) {
  e.preventDefault();
  setIndex(index)
 }

 function toggleDropdown(e) {
  e.preventDefault();
  setIsDropdownOpen(!isDropdownOpen);

};
console.log(isDropdownOpen)
 function handleLogout(e) {
  e.preventDefault();
  dispatch(logOut());
  history('/login')

 }


return (
<>       
<nav className= " bg-customlavender bg-opacity-90 fixed z-50 w-full border-gray-200 dark:bg-gray-900 shadow-lg">
  <div className="flex flex-wrap items-center justify-between px-20 py-1">
      <img src={LogoHorizontal} className="w-40 mr-3" alt="FullPrism Logo" />
      <div className="flex items-center md:order-2">
        <div className='relative py-2 text-base list-none'>
          <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"  onClick={(e)=>toggleDropdown(e)}>
            <img className="w-full h-9 rounded-full" src={foto} alt="user photo" />
          </button>
        </div>
        {/* Dropdown menu */}
        {isDropdownOpen && (
        <div className="absolute right-20 top-20 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" >
          {userLogin.hasOwnProperty('firstname') || userInfo.hasOwnProperty('firstname') ?
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">{userLogin.hasOwnProperty('firstname')? userLogin.firstname : userInfo.firstname}</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userLogin.hasOwnProperty('email')? userLogin.email : userInfo.email}</span>
            </div> 
          : null }
        
          <ul className="py-1 divide-y divide-gray-100">
            {userLogin.hasOwnProperty('email') || userInfo.hasOwnProperty('email') ? null :
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <button ><Link to='/login'>Loguearme</Link></button>
              </li>
            }

           
            {userLogin.role==='Client' || userInfo.role==='Client' ?
             <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"> 
              <button ><Link to='/orderStatus'>Mis Pedidos</Link></button> 
              </li> :  userLogin.role==='Admin' ?
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <button><Link to='/dashboards'> Tableros Admin </Link></button> 
              </li> : null
            }

            {
               userLogin.role==='Admin' || userInfo.role==='Admin' ?
               <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
               <button><Link to='/register'> Registrar Usuarios </Link></button> 
               </li> : null
            }
         
          
          {userLogin.hasOwnProperty('email') || userInfo.hasOwnProperty('email') ? 
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            <button ><Link to='/configPerfil'>Configuración</Link></button>
            </li> : null
            }
            {userLogin.hasOwnProperty('email') || userInfo.hasOwnProperty('email') ? 
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            <button type='button' onClick={handleLogout}>Salir</button>
            </li> : null
            }
          </ul>
        </div>
        )}
        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div className="mt-3 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 drop-shadow-md dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {userLogin.role==='Client' || userInfo.role==='Client' ?
        <li>
        <button type='button' onClick={(e)=>handleClickItem(e,0)}>
        <Link to= "/piezas" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent 'md:hover:text-blue-700 md:p-0 md:dark:text-blue-500' ${index === 0 ? 'text-blue-700' : 'text-gray-900' }`} aria-current="page">Piezas</Link>
        </button>
        </li> : null
        
      }
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Instructivos</a>
      </li>
      {userLogin.role==='Client' || userInfo.role==='Client' ?
        <li>
          <button type='button' onClick={(e)=>handleClickItem(e,1)}>
        <Link to= "/orderStatus" className= {`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${index === 1 ? 'text-blue-700' : 'text-gray-900' }`}> Estado de Pedidos</Link>
        </button>
        </li> : null
      }
      {userLogin.role==='Client' || userInfo.role==='Client' ?
        <li>
          <button type='button' onClick={(e)=>handleClickItem(e,2)}>
        <Link to= "/orderDetail" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${index === 2 ? 'text-blue-700' : 'text-gray-900' }`} >Pedidos Pendientes </Link>
        </button>
        </li> : null
      }
       {userLogin.role==='Admin' || userInfo.role==='Admin' ?
        <li>
          <button type='button' onClick={(e)=>handleClickItem(e,3)}>
        <Link to= "/register" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${index === 3 ? 'text-blue-700' : 'text-gray-900' }`} >Registrar Usuarios </Link>
        </button>
        </li> : null
      }
      { userLogin.role==='Admin' ?
        <li>
          <button type='button' onClick={(e)=>handleClickItem(e,4)}>
        <Link to= "/dashboards" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${index === 4 ? 'text-blue-700' : 'text-gray-900' }`}>Tableros De Gestión </Link>
        </button>
        </li> : null
      }
      <li>
      <button type='button' onClick={(e)=>handleClickItem(e,5)}>
      <Link to= "/contacto" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${index === 5 ? 'text-blue-700' : 'text-gray-900' }`}>Contacto </Link>
      </button>
      </li>
      <li>
      <button type='button' onClick={(e)=>handleClickItem(e,6)}>
      <Link to= "/aboutUs" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${index === 6 ? 'text-blue-700' : 'text-gray-900' }`}>Sobre Nosotros </Link>
      </button>
      </li>
     
    </ul>
  </div>
  </div>
</nav>


        </>
    )

};

export default Header;
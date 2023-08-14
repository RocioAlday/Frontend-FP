import { useState, useEffect, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, userInfoData } from "../../actions/userActions";
import './login.css';

const Login= ()=> {
    const [user, setUser] = useState({email: "", password: ""});
    const dispatch = useDispatch();
    let history= useNavigate();
    const dataLogin= useSelector((state)=> state.userLogin);
    console.log(dataLogin)
    let userData= useSelector((state)=> state.userData);
    console.log(user)
    const handleSubmit= (e)=> {
        e.preventDefault();
        dispatch(loginUser(user));
       
    };

    const handleInputChange = function (event) {
        setUser({
          ...user,
          [event.target.id]: event.target.value
        });
        console.log(user);

      };
      
    useEffect(()=> {
       userData.hasOwnProperty('email') === false ? dispatch(userInfoData()) : 
       userData.hasOwnProperty('role') && userData.role === 'Client' ? history('/piezas') : history('/dashboards')
    }, [userData])
    

    return (
        <div className="flex items-center justify-center pt-48 pb-60 bg-imageLogin">
        {dataLogin.hasOwnProperty('email') || userData.hasOwnProperty('email') ? <h1>Usted ya tiene una sesión abierta</h1> : 
        
        <div className="w-full max-w-xs">
            <form className="bg-customBeige bg-opacity-70 shadow-customBeigeDark shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit= {handleSubmit} >
                <div className="mb-4">
                <label className="block text-gray-900 font-bold mb-2 text-md" htmlFor="usuario">
                    Usuario
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="text" placeholder="Ingrese su usuario" onChange={handleInputChange}/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-900 text-md font-bold mb-2" htmlFor="contraseña">
                    Contraseña
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="********" onChange={handleInputChange} />
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-customBlue shadow-md shadow-slate-700 hover:bg-customNavy hover:text-gray-600 text-white font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                    Loguearse
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-gray-700 text-shadow-lg hover:text-blue-800" href="/forgotPassword">
                    Olvidaste tu clave?
                </a>
                </div>
                
                <button className=" mt-8 w-full bg-customBlue2 shadow-md shadow-slate-700 hover:bg-customNavy hover:text-gray-600 text-slate-50 font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    <Link to='/register'>Registrarse</Link>
                </button>
             
            </form>
       
        </div>
        }
        </div>
   
    )
};

export default Login;
import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../../actions/userActions";

const Login= ()=> {
    const [user, setUser] = useState({email: "", password: ""});
    const dispatch = useDispatch();

    const handleSubmit= (e)=> {
        e.preventDefault();
        
        
        dispatch(loginUser(user));
        setUser({email: "", password: ""});
    };

    const handleInputChange = function (event) {
        setUser({
          ...user,
          [event.target.id]: event.target.value
        });
        console.log(user);
      };
  


    return (
        <div className="flex items-center justify-center">
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit= {handleSubmit} >
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                    Usuario
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="text" placeholder="Ingrese su usuario" onChange={handleInputChange}/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contraseña">
                    Contraseña
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" onChange={handleInputChange} />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                    Loguearse
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/forgotPassword">
                    Olvidaste tu clave?
                </a>
                </div>
                
                <button className=" mt-8 w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    <Link to='/register'>Registrarse</Link>
                </button>
             
            </form>
       
        </div>
        </div>
   
    )
};

export default Login;
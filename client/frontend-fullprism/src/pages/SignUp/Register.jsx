import { useState, React } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../actions/userActions";
import './signUp.css';

const Register= ()=> {
    const dataLogin= useSelector((state)=> state.userLogin);
    let userData= useSelector((state)=> state.userData);

    let history= useNavigate();
    const [user, setUser] = useState({
        email: "", 
        password: "", 
        companyName: "", 
        companyCUIT: "",
        taxCondition: "",
        phone: "", 
        firstname: "",
        lastname: "",
        role: ""
    });

    const dispatch = useDispatch();
    
    const handleSubmit= (e)=> {
        e.preventDefault();
    
        dispatch(registerUser(user));
        setUser({
        email: "", 
        password: "", 
        companyName: "", 
        companyCUIT: "",
        taxCondition: "",
        phone: "", 
        firstname: "",
        lastname: "",
        role: ""});
        
    };

    const handleInputChange = function (event) {
        setUser({
          ...user,
          [event.target.id]: event.target.value
        });
        console.log(user);
      };
    
 


    return (
        <div className="flex items-center justify-center pt-40 pb-60 bg-imageLogin">
        { 
        dataLogin.hasOwnProperty('role') && dataLogin.role !== 'Admin'  || userData.hasOwnProperty('role') && userData.role !== 'Admin' ? <h1>USUARIO NO AUTORIZADO</h1> :
        dataLogin.hasOwnProperty('email')  || userData.hasOwnProperty('email') ?  
        <div className="w-full max-w-md">
            <form className="bg-customBeige bg-opacity-70 shadow-customBeigeDark shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit= {handleSubmit} >
            <div className="grid grid-cols-2 mb-4 gap-4 items-center">
            <div className="">
                <label className=" text-gray-900 font-bold text-sm mb-2" htmlFor="nombre">
                    Nombre
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Nombre" onChange={handleInputChange}/>
                </div>
                <div className="">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="apellido">
                    Apellido
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname"  type="text" placeholder="Apellido" onChange={handleInputChange}/>
                </div>
                <div className="">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="empresa">
                    Nombre de la Empresa
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyName" name='companyName' type="text" placeholder="Empresa" onChange={handleInputChange}/>
                </div>
                <div className="">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="cuit">
                    CUIT de la Empresa
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyCUIT" name='companyCUIT' type="text" placeholder="CUIT de la Empresa" onChange={handleInputChange}/>
                </div>
                <div className="">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="taxCondition">
                    Condición Impositiva
                </label>
                <select name='taxCondition' id='taxCondition' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-visible" defaultValue='Seleccione una opción' onChange={handleInputChange}>
                    <option disabled value='Seleccione una opción'>Condición impositiva</option>
                    <option value='Responsable Inscripto'>Responsable Inscripto</option>
                    <option value='IVA Exento'>IVA Exento</option>
                </select>
                </div>
                <div className="">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="text" placeholder="Ingrese su email" onChange={handleInputChange}/>
                </div>
                <div className="">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="phone">
                    Teléfono
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Ingrese su tel." onChange={handleInputChange}/>
                </div>
                <div className="">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="role">
                    Rol
                </label>
                <select name='role' id='role' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-visible" defaultValue='Seleccione una opción' onChange={handleInputChange}>
                    <option disabled value='Seleccione una opción'>Rol</option>
                    <option value='Client'>Cliente</option>
                    <option value='Admin'>Administrador</option>
                </select>
                </div>
           
                </div>   
                <div className="mt-2">
                <label className=" text-gray-900 text-sm font-bold mb-2" htmlFor="contraseña">
                    Contraseña
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="" onChange={handleInputChange} />
                </div>
                <button className=" mt-6 w-full bg-customBlue2 shadow-md shadow-slate-700 hover:bg-customNavy hover:text-gray-600 text-slate-50 font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline" type="submit">
                   Registrar Usuario
                </button>
             
            </form>
       
        </div> : <h1 className="bg-customBeige bg-opacity-70 shadow-customBeigeDark shadow-md rounded px-8 pt-6 pb-8 mb-4 font-medium">ACCEDER CON UNA CUENTA ADMIN</h1> }
        </div>
   
    )
        
};

export default Register;
import React, {useState, useEffect} from 'react';
import './contact.css';
import { AiOutlineHome } from 'react-icons/ai'; import { FiPhoneCall } from 'react-icons/fi'; import { GoMail } from 'react-icons/go'; import { BsInfoCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { sendContactEmail } from '../../actions/userActions';

const Contact = ()=> {
    const dispatch= useDispatch(); 
    let [isDisabled, setIsdisabled]= useState(true);
    let [input, setInput]= useState({
        nombre: '',
        empresa: '',
        email: '',
        tel: '',
        msg: ''
    });

    useEffect(()=>{
        input.nombre && input.empresa && input.email && input.tel && input.msg ?
        setIsdisabled(false) : null  
    }, [input, dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSendMail(e) {
        e.preventDefault();
        dispatch(sendContactEmail(input));
        setInput({
            nombre: '',
            empresa: '',
            email: '',
            tel: '',
            msg: ''
        })
    }
    


    return (
        <div className='bg-imageContact py-36'>
        <div className='flex flex-col items-center '>
                    <div className='px-20 w-full pb-20'>
                        <div className='md:bg-red-50 rounded-md md:bg-opacity-60 py-10 md:flex md:flex-row sm:flex sm:flex-col items-center md:gap-40 sm:gap-12 md:justify-around sm:justify-center'>
                            <div className='items-center p-10 bg-white bg-opacity-90 rounded-md shadow-md shadow-gray-300 '>
                                <form className='flex flex-col items-center gap-4'>
                                    <h1 className=' font-medium text-lg text-gray-700 pb-2'>CONTACTA CON NOSOTROS</h1>
                                    <div>
                                        <input type= "text" name='nombre' className='outline-none  bg-white border-slate-400 rounded-md' placeholder='Nombre Completo' onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <input type= "text" name='empresa' className='outline-none bg-white border-slate-400 rounded-md' placeholder='Empresa' onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <input type= "email" name='email' className='outline-none bg-white border-slate-400 rounded-md' placeholder='Email' onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <input type= "tel" name='tel' className='outline-none bg-white border-slate-400 rounded-md' placeholder='Teléfono' onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <textarea name='msg' id='' className='outline-none bg-white border-slate-400 rounded-md  w-100' cols= "36" rows= "4" placeholder='Mensaje' onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <button type='submit' disabled={isDisabled} className= {isDisabled ? 'bg-gray-200 shadow-md shadow-slate-700 text-gray-600 font-bold py-2 px-4 pl-3 rounded' : 'bg-customBlue shadow-md shadow-slate-700 hover:bg-customNavy hover:text-gray-600 text-white font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline' } onClick={handleSendMail}>Enviar Consulta</button>
                                    </div>
                                </form>
                            </div>
    
                            <div>
                                
                                <div className='text-lg'>
                                    <ul className='p-4 shadow-md rounded-md  sm:bg-red-50 sm:bg-opacity-40'>
                                        <li className='mb-3 flex gap-2 items-center'> <AiOutlineHome className='fs-5' />
                                            <address className= 'mb-0'>Sarachaga 1200 - Alta Córdoba, Córdoba (Arg)</address>
                                        </li>
                                        <li className='mb-3 flex gap-2 items-center'> <FiPhoneCall className='fs-5' /> 
                                            <a href='tel:+54 9 351 4444444'> +54 9 351 6077198 </a>
                                        </li>
                                        <li className='mb-3 flex gap-2 items-center'> <GoMail className='fs-5' /> 
                                            <a href='mailto:mymail.98@gmail.com'>fullprism3d@gmail.com</a>
                                        </li>
                                        <li className='mb-0 flex gap-2 items-center'> <BsInfoCircle className='fs-5' /> 
                                            <p className='mb-0'>Lunes - Viernes 8 AM - 17:30 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-screen px-20 mb-8'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.899991456536!2d-64.19286802437918!3d-31.389320994943585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985e8e9778a3%3A0xa0133a212529cc0b!2sJuan%20A.%20Sarachaga%201200%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1691957834754!5m2!1ses-419!2sar" 
                    width="600" 
                    height="450" 
                    style={{border:"0", width: "100%"}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">   
                    </iframe> 
                    
                    </div>
                </div>
        </div>
    )
};

export default Contact;
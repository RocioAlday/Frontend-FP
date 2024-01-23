import { useState } from "react";

const validate = (form, setErrors, errors) => { 
    if(!form.name) setErrors({...errors, name:"Este cambpo no puede estar vacio."});
    else setErrors ({...errors, name:""});
    if(!form.material) setErrors({...errors, material:"Este cambpo no puede estar vacio."});
    else setErrors ({...errors, material:""});
    // if(!form.link) setErrors({...errors, link:"Este cambpo no puede estar vacio."});
    // else setErrors ({...errors, link:""});
    if(!form.price) setErrors({...errors, price:"Este cambpo no puede estar vacio."});
    else setErrors ({...errors, price:""});
    if(!form.companyName) setErrors({...errors, companyName:"Este cambpo no puede estar vacio."});
    else setErrors ({...errors, companyName:""});
    if(!form.image) setErrors({...errors, image:"Este cambpo no puede estar vacio."});
    else setErrors ({...errors, image:""});
    // if(!form.parameters) setErrors({...errors, parameters:"Este cambpo no puede estar vacio."});
    // else setErrors ({...errors, parameters:""});
}

const ModelLoadForm = () => {

    const [form, setForm]= useState({
        name:"",
        material:"",
        link:"",
        price:"",
        companyName:"",
        image:"",
        parameters:""
    });

    const [errors, setErrors] = useState({
        name:"",
        material:"",
        link:"",
        price:"",
        companyName:"",
        image:"",
        parameters:""
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.tarjet.value;

        setForm ({...form, [property]:value});
        validate({...form, [property]:value}, setErrors, errors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(registerModel(form));

    }

    return ( // Tengo que agregar una key a los imput?
        <div className="flex items-center justify-center pt-40 pb-60 bg-imageLogin">
        <form onSubmit={submitHandler} className="bg-customBeige bg-opacity-70 shadow-customBeigeDark shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <div className="grid grid-cols-1 mb-4 gap-4 items-center">
                <div>
                    <label htmlFor="name" className=" text-gray-900 font-bold text-sm mb-2"> Nombre de la pieza </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <span>{errors.name}</span>
                </div>
                <div>
                    <label htmlFor="material" className=" text-gray-900 font-bold text-sm mb-2"> Material </label>
                    <input type="text" name="material" value={form.material} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <span>{errors.material}</span>
                </div>
                <div>
                    <label htmlFor="link" className=" text-gray-900 font-bold text-sm mb-2"> Link del 3MF </label>
                    <input type="url" name="link" value={form.link} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <span>{errors.link}</span>
                </div>
                <div>
                    <label htmlFor="price" className=" text-gray-900 font-bold text-sm mb-2"> Precio </label>
                    <input type="number" name="price" value={form.price} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <span>{errors.price}</span>
                </div>
                <div>
                    <label htmlFor="companyName" className=" text-gray-900 font-bold text-sm mb-2"> Empresa </label>
                    <input type="text" name="companyName" value={form.companyName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <span>{errors.companyName}</span>
                </div>
                <div>
                    <label htmlFor="image" className=" text-gray-900 font-bold text-sm mb-2"> Vista Previa </label>
                    <input type="url" name="image" value={form.image} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <span>{errors.image}</span>
                </div>
                <div>
                    <label htmlFor="parameters" className=" text-gray-900 font-bold text-sm mb-2"> Parametros/Requisitos </label>
                    <input type="text" name="parameters" value={form.parameters} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <span>{errors.parameters}</span>
                </div>
            </div>
        <button type="submit" className=" mt-6 w-full bg-customBlue2 shadow-md shadow-slate-700 hover:bg-customNavy hover:text-gray-600 text-slate-50 font-bold py-2 px-4 pl-3 rounded focus:outline-none focus:shadow-outline"> Cargar Pieza </button>
        
        </form>
        </div>
    )
}

export default ModelLoadForm;
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
    }

    return ( // Tengo que agregar una key a los imput?
        <form onSubmit={submitHandler}> 
            <div>
                <label htmlFor="name"> Nombre de la pieza </label>
                <input type="text" name="name" value={form.name} onChange={handleChange}/>
                <span>{errors.name}</span>
            </div>
            <div>
                <label htmlFor="material"> Material </label>
                <input type="text" name="material" value={form.material} onChange={handleChange}/>
                <span>{errors.material}</span>
            </div>
            <div>
                <label htmlFor="link"> Link del 3MF </label>
                <input type="url" name="link" value={form.link} onChange={handleChange}/>
                <span>{errors.link}</span>
            </div>
            <div>
                <label htmlFor="price"> Precio </label>
                <input type="number" name="price" value={form.price} onChange={handleChange}/>
                <span>{errors.price}</span>
            </div>
            <div>
                <label htmlFor="companyName"> Empresa </label>
                <input type="text" name="companyName" value={form.companyName} onChange={handleChange}/>
                <span>{errors.companyName}</span>
            </div>
            <div>
                <label htmlFor="image"> Vista Previa </label>
                <input type="image" name="image" value={form.image} onChange={handleChange}/>
                <span>{errors.image}</span>
            </div>
            <div>
                <label htmlFor="parameters"> Parametros/Requisitos </label>
                <input type="text" name="parameters" value={form.parameters} onChange={handleChange}/>
                <span>{errors.parameters}</span>
            </div>
        <button type="submit"> Cargar Pieza </button>
        </form>
    )
}

export default ModelLoadForm;
import axios from 'axios';
import Cookies from "universal-cookie";
import { toast } from 'react-toastify';


export const showNotification = (message, position) => {
    toast.success(message , {
      position: toast.POSITION[position],
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      className: "text-sm"
    });
};

export const getTokenInCookies= ()=> {
    let cookies= new Cookies();
    const token= cookies.get("refreshToken");
    return token
}

export const setTokenInCookies= (data)=> {
    let cookie= new Cookies();
    return cookie.set("refreshToken", data);
}


export const changeData= (completedate)=> {
    const date = new Date(completedate);
    const options = { weekday: 'short', day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('es-AR', options);
    
    return formattedDate;
  

}

export const sliceDate= (date)=> {
    const newDate= date.slice(0, date.indexOf('T'));
    return newDate;
}

export const formateNumber= (number)=> {
    const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    const numFormated = number.toLocaleString('es-AR', options);
    
    return numFormated;
}



export async function sendBudgetToMail(blob) {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    try {
        // const result= await axios.post('http://localhost:3001/order/sendBudgetByEmail', blob,
        // {
        //     headers: {
        //         'Content-Type': 'application/pdf',
        //         Authorization: `Bearer ${token}` 
        //     }
        // })
    
        // console.log(result.data)
        console.log('Comentado para no recibir mails al realizar pruebas')
    } catch(error) {
        console.log('Error al enviar el presupuesto por mail:', error)
    }
}
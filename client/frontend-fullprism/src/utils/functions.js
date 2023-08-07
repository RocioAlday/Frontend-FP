import axios from 'axios';

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
    const numFormated = number.toLocaleString('es-ES', options);
    
    return numFormated;
}



export async function sendBudgetToMail(blob) {
    try {
        const result= await axios.post('http://localhost:3001/order/sendBudgetByEmail', blob,
        {
            headers: {
                'Content-Type': 'application/pdf' 
            }
        })
    
        console.log(result.data)
    } catch(error) {
        console.log('Error al enviar el presupuesto por mail:', error)
    }
}
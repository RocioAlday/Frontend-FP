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
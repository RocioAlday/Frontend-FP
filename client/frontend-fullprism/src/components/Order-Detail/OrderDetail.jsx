import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyOrder, modifyItemCart, deleteItemOrder } from "../../actions/userActions";
import { formateNumber } from "../../utils/functions";



const OrderDetail= ({name, image, orderDetail, id, price, dolarValue})=> {

  console.log(orderDetail);
    let [input, setInput]= useState({});
    const dispatch= useDispatch();
    let [value, setValue]= useState({});
    let order= useSelector((state)=> state.userOrder); 
    let cartUser= useSelector((state)=> state.modelsInCart);


    useEffect(() => {
        dispatch(modifyOrder());
      }, [cartUser]);

    function handleChangeInput(e) {
        const inputValue= Number(e.target.value);
            setInput((prevInput)=> ({
                ...prevInput,
                [id]: inputValue
            }));
            setValue((prevValue)=> ({
                ...prevValue,
                [id]: id,
            }));
    }

    function handleBlur() {
    if (Object.keys(input).length !== 0){
    dispatch(modifyItemCart({id: Number(value[id]) , quantity: Number(input[id])}));
    if (Number(input[id]) === 0) {
        dispatch(deleteItemOrder());
    }
    setInput({});
    setValue({})
    }
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(modifyItemCart({id: id, quantity: 0}));
        dispatch(deleteItemOrder());
    }

    
return (

    <tr className="">
        <td className="py-2">
            <img className="w-20" src= {image}></img>
        </td>

        <td class="p-2 text-center">
            <div class="font-medium text-center text-gray-800">
                {name}
            </div>
            <div>
                <p className="text-xs pt-1">Color: {orderDetail.color}</p>
            </div>
        </td>
        <td class="p-2">
        <div class="font-medium text-center text-gray-800">
            <input type="number" id="quantity" class="bg-gray-50 w-14 text-center border border-gray-300 text-gray-900 text-sm rounded-lg"  defaultValue= {input.hasOwnProperty(id)? input[id] : orderDetail.quantity} onChange={(e)=> handleChangeInput(e, id)} onBlur={()=>handleBlur()}/>
        </div>
        </td>
        <td class="p-2">
            <div class="text-center font-medium text-green-500">
                {input.hasOwnProperty(id) ? formateNumber(price*dolarValue*(input[id]))
                : formateNumber(orderDetail.subtotal*dolarValue)}
            </div>
        </td>
        <td class="p-2">
            <div class="flex justify-center">
                <button onClick={handleClick}>
                    <svg class="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                </button>
            </div>
        </td>
    </tr>

)
}

export default OrderDetail;
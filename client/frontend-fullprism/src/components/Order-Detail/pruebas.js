const Order= ()=> {

    let [input, setInput]= useState(0);
    const dispatch= useDispatch();
    let [value, setValue]= useState(0);
    let order= useSelector((state)=> state.userOrder); 
    let cartUser= useSelector((state)=> state.modelsInCart);
    

    useEffect(() => {
        dispatch(modifyOrder());
      }, [cartUser]);

    function handleChangeInput(e, id) {
        if(Number(e.target.value!=0)){
            setInput(Number(e.target.value));
            setValue(Number(id));
        }
        

    }

    function handleBlur(e, quantity) {
    dispatch(modifyItemCart({id: value , quantity: input}));
    e.target.defaultValue= quantity;
    setInput(0);
    setValue(0)
    }


return (
    order.models.length>0? (
<section class="antialiased bg-gray-100 text-gray-600 px-4" x-data="app">
    <div class="flex flex-col justify-center py-3  ">
       
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <div class="font-semibold text-gray-800">Su Pedido</div>
            </header>

            <div class="overflow-x-auto p-3">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th></th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Pieza Solicitada</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Cantidad</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Subtotal</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Eliminar</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="text-sm divide-y divide-gray-100">
                       {order.models.map(m => {
                        return (
                            <>
                          
                            <tr>
                                <td className="py-2">
                                    <img className="w-20" src= {m.image}></img>
                                </td>
                              
                                <td class="p-2">
                                    <div class="font-medium text-center text-gray-800">
                                        {m.name}
                                    </div>
                                </td>
                                <td class="p-2">
                                    <input type="number" id="quantity" class="bg-gray-50 w-12 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  defaultValue= { m.OrderDetail.quantity} onChange={(e)=> handleChangeInput(e, m.id)} onBlur={(e)=>handleBlur(e, m.OrderDetail.quantity)}/>
                                </td>
                                <td class="p-2">
                                    <div class="text-center font-medium text-green-500">
                                        {input!=0 ? m.price*(input)
                                         : m.OrderDetail.subtotal}
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="flex justify-center">
                                        <button>
                                            <svg class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
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
                            </>)
                            })}
                    </tbody>
                </table>
            </div>
           
            <div class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                <div class="text-blue-600">AR <span x-text="total.toFixed(2)"></span></div>
                <div>{order.total}</div>
            </div>

            <div class="flex justify-end">
                <input type="hidden" class="border border-black bg-gray-50" x-model="selected" />
            </div>
        </div>
    </div>
</section> ) : <h1>Cargando</h1>

    )
}
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addItem,removeItem,clearAllItem,setItem } from '../utils/CartSlice';

const ShowCart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const removeItemHandler=(item)=>{
        dispatch(removeItem(item.id));
        // dispatch()
    };
    const addItemHandler=(item)=>{
        dispatch(addItem(item));
    };
    const clearAllItemHandler=()=>{
        dispatch(clearAllItem());
    };
    const setItemHandler=(item)=>{
        dispatch(setItem(item));
    };
    const cartTotal=Object.values(cartItems).reduce((acc,item)=>acc+item.price*item.quantity,0);
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                {Object.values(cartItems).map((item)=>{
                    return(
                        <div className="p-4  border border-red-400 w-[254px]  relative  m-3 flex flex-wrap break-words">
                            <h1>{item.name}</h1>
                            <h2>{item.price?item.price/100:item.defaultPrice/100}</h2>
                            <h3 className="text-lg font-semibold">Quantity - {item.quantity}</h3>
                            <button className="bg-blue-300" onClick={()=>removeItemHandler(item)}>Remove</button>
                            <button className="bg-blue-300" onClick={()=>addItemHandler(item)}>Add</button>
                            <button className="bg-blue-300" onClick={()=>setItemHandler(item)}>Set</button>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1>Total - {cartTotal}</h1>
                <button className="bg-blue-300" onClick={()=>clearAllItemHandler()}>Clear All</button>
            </div>
        </div>
    )
}
export default ShowCart;


//     return (
//         <div>
//             <h1>Cart</h1>
//         </div>
//     )
// };
// export default ShowCart;
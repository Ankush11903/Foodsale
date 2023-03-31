import { useRef, useState } from 'react';


const MealItemInput = ({addItemHandler,menuItem}) => {
  const [amountIsValid] = useState(true);
  const amountInputRef = useRef();
  const obj={
    value: 0,
    menuItem,

  }

  const submitHandler = (event) => {
    event.preventDefault();

    obj.value = Number(amountInputRef.current.value);
    // console.log(obj)

    addItemHandler(obj);
  };

  return (
    <div className='flex flex-col pt-14'>
      <div className='flex'>
      <label className='font-bold mr-4 ' htmlFor={'amount_' + menuItem.id}>{'Amount'}</label>
      <input  ref={amountInputRef} 
       
          id= {'amount_' + menuItem.id}
          type= {'number'}
          min= {1}
          max= {100}
          step= {'1'}
          defaultValue= {'1'}
          className= 'flex mb-[0.5rem] w-[3rem] border border-slate-500 rounded-lg pl-2'
          />
        </div>
        <button className='border border-red-500 ml-4 rounded-3xl w-[7rem]' onClick={submitHandler}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
  );
};

export default MealItemInput;
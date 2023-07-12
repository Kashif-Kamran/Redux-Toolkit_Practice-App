import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem,increaseQuantity,decreaseQuantity } from '../store/features/CartSlice';
const Cart = ({ id,img,title,price,amount }) =>
{
    const dispatch = useDispatch();

    return (

        <div className='px-8 border-2 border-b-2 flex py-2'>
            <img className='h-[100px]' src={img} alt={title} />
            <div className=''>
                <h1 className='text-[140%] font-semibold'>{title}</h1>
                <h1 className='text-xl font-semibold text-gray-500'>${price}</h1>
                <button onClick={() => { dispatch(removeItem(id)) }} className='px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all duration-300'>Remove</button>
            </div>
            <div className='flex flex-col justify-center items-center ml-auto'>
                <button onClick={() =>
                {
                    console.log("Clicked")
                    dispatch(increaseQuantity(id))
                }} className='px-2 py-1 w-8 bg-gray-500 text-white rounded-md hover:bg-gray-600'>+</button>
                <h1 className='text-xl font-semibold'>{amount}</h1>
                <button onClick={() =>
                {
                    console.log("Clicked")
                    dispatch(decreaseQuantity(id))
                }} className='px-2 py-1 w-8 bg-gray-500 text-white rounded-md hover:bg-gray-600'>-</button>
            </div>
        </div>


    );
}

export default Cart;

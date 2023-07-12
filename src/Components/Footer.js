import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { clearCart } from '../store/features/CartSlice';
const Footer = () =>
{
    const { total } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    function handleClear()
    {
        dispatch(clearCart());
    }
    return (
        <div className='px-32 mt-2 border-t-2 border-green-700'>
            <div className='flex justify-between tracking-widest text-[120%]     ' >
                <h1 className='font-semibold'>Total Amount</h1>
                <h1>{total} $</h1>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={handleClear} className='w-1/2 py-2 mt-1 tracking-[3px] text-blue-500 border-2 border-blue-500 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-300 hover:border-5 transition-all duration-500 rounded-md '>
                    Clear Cart
                </button>
            </div>
        </div>
    );
}

export default Footer;

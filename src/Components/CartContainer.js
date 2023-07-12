import React from 'react';
import Cart from './Cart';
import { useSelector } from 'react-redux';
const CartContainer = () =>
{
    const { cartItems,amount,total } = useSelector(state => state.cart);

    if (amount < 1)
    {
        return (
            <div className='h-[500px] border w-screen flex flex-col gap-3 justify-center items-center'>
                <h1 className='text-4xl font-semibold text-blue-500'>Your Bag is Empty</h1>
                <h1 className='font-serif text-[130%]'>Please visit To the Store and Add items to cart</h1>
            </div>
        )
    }
    else
    {
        return (
            <div className='mt-6 border w-2/3 mx-auto' >
                {
                    cartItems.map((item) =>
                    {
                        return <Cart key={item.id} {...item} />
                    })
                }
            </div>
        )
    }
}

export default CartContainer;

import React from 'react';
import { useSelector } from 'react-redux';
const NavBar = () =>
{
    const { amount } = useSelector(state => state.cart);
    return (
        <div className='bg-blue-500 text-white px-10 h-16 flex items-center'>
            <div className='flex justify-between w-[95%]'>
                <h1 className='text-2xl font-mono font-semibold'>Fake Store</h1>
                <div className='flex justify-center items-center '>
                    <svg className='w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 17h-11v-14h-2"></path>
                        <path d="M6 5l14 1l-1 7h-13"></path>
                    </svg>
                    <span className='px-2 bg-red-500 text-white rounded-full min-w-[30px] min-h-[30px] flex justify-center items-center text-xs font-bold ml-2'>{amount}</span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

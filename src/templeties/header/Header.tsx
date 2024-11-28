import React from 'react';
import logo from '../../components/Icons/logo.png'

const Header = () => {
    return (
        <div className='flex gap-5 p-5 bg-gray-50 h-20'>
            <img className='h-18 w-16' src={logo} alt='logo'/>
                <h1 className='text-xl pt-1'>Minin Code</h1>
                <h1 className='pl-96 mx-96 translate-x-96 text-xl pt-1 '>IIenbnkU</h1>
        </div>
    );
};

export default Header;
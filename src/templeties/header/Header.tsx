import React from 'react';
import logo from '../../components/Icons/logo.png'

const Header = () => {
    return (
        <div className='flex gap-5 p-5 bg-gray-50 h-20'>
            <img className='h-18 w-16' src={logo} alt='logo'/>
            <h1 className='text-xl pt-1'>Minin Code</h1>
        </div>
    );
};

export default Header;
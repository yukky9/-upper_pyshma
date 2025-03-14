import React from 'react';
import logo from '../../app/logo/logo.png'

const Header = () => {
    const handleClick = () => {
        window.location.href = "/";
    };

    return (
        <div>
            <nav className="bg-gray-100 h-16 mb-10">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="grid grid-cols-2 items-center gap-1">
                        <img className="h-10 w-10 ml-16 rounded" src={logo} alt='logo'/>
                        <span onClick={handleClick}
                            className="text-2xl font-semibold whitespace-nowrap cursor-pointer">Эталон</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
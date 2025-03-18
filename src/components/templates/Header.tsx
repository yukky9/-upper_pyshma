import React from 'react';

const Header = () => {
    const handleClick = () => {
        window.location.href = "/";
    };

    return (
        <div>
            <nav className="bg-gray-100 h-16 mb-10">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <h2 onClick={handleClick} className="text-2xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 cursor-pointer">
                        Эталон</h2>
                </div>
            </nav>
        </div>
    );
};

export default Header;
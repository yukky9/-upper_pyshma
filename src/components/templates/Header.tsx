import React from 'react';

const Header = () => {
    const handleClick = () => {
        window.location.href = "/";
    };

    return (
        <div>
            <nav className="bg-gray-100 h-16 mb-10">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="grid grid-cols-2 items-center">
                        <span onClick={handleClick}
                            className="text-2xl font-semibold whitespace-nowrap cursor-pointer">Monitoring</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
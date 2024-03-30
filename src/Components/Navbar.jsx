import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-200 m-auto px-20 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <i className="fa-solid text-2xl fa-list-check"></i>
                    <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Task Tracker</span>
                </Link>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    {/* Profile icon */}
                    
                    <i class="fa-regular text-2xl fa-user"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

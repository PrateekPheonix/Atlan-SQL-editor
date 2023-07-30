import React from 'react'

const Navbar = () => {
    return (
        <nav className="shadow">
            <div className="px-6 lg:px-12">
                <div className="flex items-center justify-between h-24">
                    <div className="w-full flex justify-center items-center">
                        <div className="flex items-center text-black font-bold text-2xl align-middle">
                            SQL Editor - Atlan Task
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
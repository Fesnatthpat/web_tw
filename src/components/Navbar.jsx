// components/Navbar.js
import React from "react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="">
                <div className="navbar bg-pink-300 px-20 shadow-xl fixed inset-x-0 top-0 z-50">
                    <div className="flex-auto justify-center">
                        <h1 className="btn bg-blue-500 border-0 text-white p-2 rounded-lg shadow-xl">I Love You</h1>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

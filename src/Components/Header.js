import React, { useContext } from "react";
import '../index.css';
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";


function Header() {
    const { theme, setTheme } = useContext(ThemeContext)

    const userTheme = localStorage.getItem('theme')


    function handleCheck() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme)

    }

    return (
        <header className="lg:bg-desktop md:bg-tablet md:bg-cover bg-mobile bg-no-repeat h-[160px] bg-contain" >
            <section className="flex justify-around md:justify-between lg:mx-[11%] md:mx-[6%] pt-11 ">
                <Link to="/">
                    <img className="cursor-pointer" src="/assets/desktop/logo.svg" alt="devjob" />
                </Link>
                <span className="flex">
                    <img className="" src="assets/light.svg" alt="Logo" />

                    <label className="relative mx-3 inline-flex items-center cursor-pointer">
                        <input onChange={handleCheck} type="checkbox" checked={userTheme === 'dark' ? true : false} className="sr-only peer" />
                        <div className="w-12 h-6 bg-secondary-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[8px] after:left-[8px] hover:after:bg-primary-light-violet after:bg-primary-violet after:border-none after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary-white"></div>
                    </label>
                    <img className="" src="assets/moon.svg" alt="Logo" />
                </span>
            </section>
        </header>
    )
}

export default Header;


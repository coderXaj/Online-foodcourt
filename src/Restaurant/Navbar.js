import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const cart = useSelector((state) => state);


    const [menu, setMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const menutoggle = () => {
        setMenu(true)
    }

    const closetoggle = () => {
        setMenu(false)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        };

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);



    return (
        <>
            <nav>
                <button className='menubar' onClick={menutoggle}><i class="fa-solid fa-bars"></i></button>
                <div className='main'>
                    <h1 className="logo">Anant da dhaba 🥘</h1>
                </div>
                {(menu || screenWidth > 800) && (
                    <div className='menu'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="#">Referance</a>
                        <button className='close' onClick={closetoggle}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                )}
                <div className="menu2">
                    <Link to="/cart" className="logo2"><i class="fa-solid fa-cart-shopping"></i></Link>
                    <span>{cart.length}</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
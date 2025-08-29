import React, { useState } from 'react'
import './AppBar.css'
import logo from '../../assets/images/logo/aefjocode logo.svg'

const AppBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <nav>
            <a href="/" id="logo">
                <img src={logo} alt="logo" />
            </a>

            <ul id="menu">
                <li><a href="#">Courses</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
            </ul>

            <ul id="user-actions">
                <li id='logIn'><a href="#">Log in</a></li>
                <li id='signUp'><a href="#">Sign Up</a></li>
            </ul>

            <ul id="toggleMenu" onClick={handleToggleMenu} className={isMenuOpen ? 'active' : ''}>
                <li></li>
                <li></li>
                <li></li>
            </ul>   

            <ul id='menu-bar' className={isMenuOpen ? 'active' : ''}>
                <li>
                    <a href="#">Log in</a>
                    <a href="#">Sign Up</a>
                </li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
            </ul>
        </nav>

    )
}

export default AppBar;
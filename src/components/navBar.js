//Navigation Bar Component.


import { useState } from 'react'
import './navBar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function NavigationBar() {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {

        if (window.scrollY >= 300) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }

    }

    window.addEventListener('scroll', changeBackground)

    const NavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#ffffffff' : '#000000',
            fontWeight: isActive ? 'medium' : 'bold',
            backgroundColor: isActive ? '#498CF6' : null,
            paddingTop: isActive ? 5 : null,
            paddingBottom: isActive ? 5 : null,
            paddingRight: isActive ? 12 : null,
            paddingLeft: isActive ? 12 : null,
            borderRadius: isActive ? 20 : null,

        }

    }

    const NavLinkStyleTwo = ({ isActive }) => {
        return {
            color: isActive ? '#ffffffff' : '#000000',
            fontWeight: isActive ? 'medium' : 'bold',
            backgroundColor: isActive ? '#EB483B' : null,
            paddingTop: isActive ? 5 : null,
            paddingBottom: isActive ? 5 : null,
            paddingRight: isActive ? 12 : null,
            paddingLeft: isActive ? 12 : null,
            
            borderRadius: isActive ? 20 : null

        }

    }

    const NavLinkStyleThree = ({ isActive }) => {
        return {
            color: isActive ? '#ffffffff' : '#000000',
            fontWeight: isActive ? 'medium' : 'bold',
            backgroundColor: isActive ? '#4EA865' : null,
            paddingTop: isActive ? 5 : null,
            paddingBottom: isActive ? 5 : null,
            paddingRight: isActive ? 12 : null,
            paddingLeft: isActive ? 12 : null,
            borderRadius: isActive ? 20 : null

        }

    }

    const NavLinkStyleFour = ({ isActive }) => {
        return {
            color: isActive ? '#ffffffff' : '#000000',
            fontWeight: isActive ? 'medium' : 'bold',
            backgroundColor: isActive ? '#ffce44' : null,
            paddingTop: isActive ? 5 : null,
            paddingBottom: isActive ? 5 : null,
            paddingRight: isActive ? 12 : null,
            paddingLeft: isActive ? 12 : null,
            borderRadius: isActive ? 20 : null
        }
    }
    

    return (
        <nav className={navbar ? "nav-bar" : "nav-bar active"}>

            <div className='top-left'>
                <img src={Logo} alt='GDSC' />
            </div>

            <div className='top-center'>
                <ul>
                    <li>
                        <NavLink style={NavLinkStyle} to="/" className='items'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink style={NavLinkStyleTwo} to="/aboutus" className='items'>About us</NavLink>
                    </li>

                    <li>
                        <NavLink style={NavLinkStyleThree} to="/news" className='items'>News</NavLink>
                    </li>

                    <li>
                        <NavLink style={NavLinkStyleFour} to="/events" className='items'>Events</NavLink>
                    </li>
                </ul>
            </div>

            <div className='top-left'>
                <button className={navbar ? "reg-btn active" : "reg-btn"}>
                    Register Now
                </button>

                <div>
                    
                </div>
            </div>

        </nav>
    )
}
import React from 'react'
import '../App.css'
import logo from '../Images/Mace_logo.png'
import { Container } from 'react-bootstrap'

function Header() {
    return (
        <div className='header'>
            <img src={logo}/>
        </div>
    )
}

export default Header
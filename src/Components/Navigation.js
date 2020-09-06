import React, { useState, useEffect } from 'react'
import { Nav, NavItem, NavLink, Navbar, Button } from 'react-bootstrap'
import '../App.css'
import icon from '../Images/Mace_icon_1.png'


function Navigation() {
    const logoEndPoint = 650
    const slidePoint = 1200
    const [onTop, setOnTop] = useState(true)
    const [atSlidePoint, setAtSlidePoint] = useState(true)

    useEffect(() => {
        const checkForTop = () => {
            setOnTop(window.pageYOffset < logoEndPoint)
            setAtSlidePoint(window.pageYOffset > slidePoint)
        }
        window.addEventListener("scroll", checkForTop);
        return () => window.removeEventListener("scroll", checkForTop);
    }, []);

    // const navbarClasses = classNames({
    //     'nav-icon-show': true,
    //     'nav-icon-hide': onTop
    // })

    return (
        <Navbar className='justify-content-center navigation' sticky='top'>
            <Nav>
                <NavItem className='nav-item'>
                    <NavLink>
                        <Button className='nav-button'>Art</Button>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Button className='nav-button'>Writing</Button>
                    </NavLink>
                </NavItem>
                <NavItem className={onTop ? 'nav-icon-hide' : 'nav-icon-show'}>
                    <NavLink>
                        <img src={icon}/>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Button className='nav-button'>Sewing</Button>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Button className='nav-button'>Plants</Button>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation
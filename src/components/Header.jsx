import React from 'react'
import logo from '../assets/dungeon-master-logo-IT7UTMJY.svg'
import './Header.modules.scss';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="wombats-logo" />
        </div>
    )
}

export default Header

import React from 'react';
import Menu from './Menu.jsx';
import MobileMenu from './MobileMenu.jsx';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <a className='logo' href='https://hectorfranca.github.io/darlianeportfolio/'>Darliane</a>
                <Menu/>
                <MobileMenu/>
            </header>
        );
    }
}

export default Header;
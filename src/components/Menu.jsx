import React from 'react';
import '../styles/menu.css';

class Menu extends React.Component {
    render() {
        return (
            <ul className="menu">
                <li><a href='#biography'>Sobre</a></li>
                <li><a href='#projects'>Projetos</a></li>
                <li><a href='#contact'>Contato</a></li>
            </ul> 
        );
    }
}

export default Menu;

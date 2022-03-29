import React from 'react';
import '../styles/mobile-menu.css';

class MobileMenu extends React.Component {
    render() {
        const clickMenuItem = (event) => {
            const menuItem = document.getElementsByClassName('menu-item');
            
            for (let element of menuItem) {
                element.addEventListener('click', () => {
                    closeMenu(event);
                });
            }
        }

        const openMenu = (event) => {
            const menuContainer = document.querySelector('.mobile-container');
            const body = document.querySelector('body');

            event.target.classList.remove('close-button');
            event.target.classList.add('open-button');
            menuContainer.classList.remove('close-menu');
            menuContainer.classList.add('open-menu');
            body.classList.add('disable-scroll');

            clickMenuItem(event);
        }

        const closeMenu = (event) => {
            const menuContainer = document.querySelector('.mobile-container');
            const body = document.querySelector('body');

            menuContainer.classList.add('close-menu');
            event.target.classList.remove('open-button');
            event.target.classList.add('close-button');
            body.classList.remove('disable-scroll');

            setTimeout(() => {
                menuContainer.classList.remove('open-menu');
            }, 1000);
        }

        const mobileMenu = (event) => {
            const menuContainer = document.querySelector('.mobile-container');

            menuContainer.classList.contains('open-menu') ? closeMenu(event) : openMenu(event);
            event.target.disabled = true;

            setTimeout(() => {
                event.target.disabled = false;
            }, 1000);
        }

        return (
            <div className='mobile-menu'>
                <button className='menu-button' onClick={(event) => mobileMenu(event)}></button>
                <div className='mobile-container'>
                    <ul className='mobile-items'>
                        <li><a className='menu-item' href='#biography'>Sobre</a></li>
                        <li><a className='menu-item' href='#projects'>Projetos</a></li>
                        <li><a className='menu-item' href='#contact'>Contato</a></li>
                    </ul> 
                </div>
            </div>
        );
    }
}

export default MobileMenu;

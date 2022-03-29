import React from 'react';
import activeAnimation from './animationController.js';
import '../styles/contact.css';

class Contact extends React.Component {
    render() {
        activeAnimation('contact', 0, 'animate-left');

        return (
            <section className='contact' id='contact'>
                <p className='contact-title'>Contato</p>
                <div className='contact-underline'></div>
                <p className='contact-message'>Entre em contato comigo, será um prazer trabalhar com você!</p>
        
                <div className='personal-contact'>
                    <div className='contact-email'>
                        <label className='legend-email'>E-mail:</label>
                        <a className='email' id='email' href='mailto:darlianesantana7@gmail.com'>darlianesantana7@gmail.com</a>
                    </div>
                    <div className='contact-phone'>
                        <label className='legend-phone'>Telefone:</label>
                        <span className='phone' id='phone'>+55 DDD 99999999</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
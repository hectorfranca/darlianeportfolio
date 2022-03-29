import React from 'react';
import activeAnimation from './animationController.js';
import '../styles/biography.css';

class Biography extends React.Component {
    render() {
        activeAnimation('biography', 0, 'animate-left');

        return (
            <section className='biography' id='biography'>
                <div className='biography-img'></div>
                <div className='biography-text'>
                    <p className='biography-title'>Sobre mim</p>
                    <div className='biography-underline'></div>
                    <p className='biography-paragraph'>
                        Olá, meu nome é Darliane e sou estudante de design de interiores na Univali.
                        Sempre fui apaixonada por todo tipo de arte, o que me despertou para estudar design.
                    </p>
                </div>
            </section>
        );
    }
}

export default Biography;
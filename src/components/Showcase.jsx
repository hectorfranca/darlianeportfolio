import React from 'react';
import '../styles/showcase.css';
import SeeMoreImage from '../img/see-more.png';

class ShowCase extends React.Component {
    render() {
        return (
            <section className='showcase'>
                <p className='slogan'>Simplicidade e sofisticação</p>
                <h1 className='title'>Darliane Santana</h1>
                <h2 className='description'>Design de <span>Interiores</span></h2>
                <a className='see-more' href="#biography">
                    <img className='see-img' src={SeeMoreImage} alt='see-more.png'></img>
                    <span>Ver mais</span>
                </a>
            </section>
        );
    }
}

export default ShowCase;
import React from 'react';
import '../styles/footer.css';
import InstagramImage from '../img/instagram.png';
import FacebookImage from '../img/facebook.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
               <div className='social-media'>
                   <a href='https://hectorfranca.github.io/darlianeportfolio/' rel='noreferrer'>
                       <img className='instagram' src={InstagramImage} alt='instagram.png'></img></a>
                   <a href='https://hectorfranca.github.io/darlianeportfolio/' rel='noreferrer'>
                       <img className='facebook' src={FacebookImage} alt='facebook.png'></img></a>
               </div>
               <div className='copyright'>
                    <span>&copy; 2022 Darliane Santana</span>
               </div>
            </footer> 
        );
    }
}

export default Footer;

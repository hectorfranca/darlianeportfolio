import React from 'react';
import '../styles/start-button.css';

class StartButton extends React.Component {
    componentDidMount () {
        const startButton = document.querySelector('.start-button');
        const biography = document.querySelector('.biography');
        
        window.addEventListener('scroll', () => {
            const bioPosition = biography.getBoundingClientRect();

            if ((bioPosition.top <= 600)) {
                startButton.classList.add('animate-fadein');
            } else {
                startButton.classList.remove('animate-fadein');
            }
        });
    }

    render () {
        const scrollToStart = (event) => {
            window.scrollTo(0, 0);
            event.target.disabled = true;

            setTimeout(() => {
                event.target.disabled = false;
            }, 1000);
        }

        return (
            <button className='start-button' onClick={(event) => scrollToStart(event)}></button>
        );
    }
}

export default StartButton;
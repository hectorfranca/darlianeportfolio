import React from 'react';
import '../styles/carousel.css';
import Picture1 from '../img/background.jpg';

class Carousel extends React.Component {
    render() {
        const pictures = [Picture1, Picture1, Picture1];

        const createItems = () => {
            const element = [];
            let key = 'project-';

            for (let c = 0; c < pictures.length; c++) {
                element.push(
                    <div className='carousel-item' key={key + c}><img src={pictures[c]} alt='carousel-item.png'></img></div>
                );
            }

            return element;
        }

        const changeItem = (event, direction) => {
            const carousel = event.target.parentNode.children[1];
            
            carousel.scrollBy(direction * (carousel.scrollWidth / pictures.length), 0);
            event.target.disabled = true;
            
            setTimeout(() => {
                event.target.disabled = false;
            }, 500);
        };

        return (
            <div className='carousel'>
                <button className='carousel-previous' onClick={(e) => changeItem(e, -1)}></button>
                <div className='carousel-items'>
                    {createItems()}
                </div>
                <button className='carousel-next' onClick={(e) => changeItem(e, 1)}></button>
            </div>
        );
    }
}

export default Carousel;
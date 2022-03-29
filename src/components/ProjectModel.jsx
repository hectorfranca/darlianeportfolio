import React from 'react';
import Carousel from './Carousel.jsx';
import activeAnimation from './animationController.js';
import '../styles/project-model.css';

class ProjectModel extends React.Component {
    render() {
        const chooseAnimation = () => {
            if ((this.props.index % 2) === 0) {
                activeAnimation('project', this.props.index, 'animate-right');
                } else {
                activeAnimation('project', this.props.index, 'animate-left');
            }
        }

        chooseAnimation();

        return (
            <section className='project'>
                <Carousel/>
                <div className='project-text'>
                    <p className='project-title'>{this.props.title}</p>
                    <p className='project-paragraph'>{this.props.paragraph}</p>
                </div>
            </section>
        );
    }
}

export default ProjectModel;
import React from 'react';
import ProjectModel from './ProjectModel.jsx';
import activeAnimation from './animationController.js';
import '../styles/projects.css';

class Projects extends React.Component {
    render() {
        activeAnimation('projects-content', 0, 'animate-right');

        const projects = [
            {
                title: 'Projeto 1',
                paragraph: `Breve descrição do projeto.`
            },
            {
                title: 'Projeto 2',
                paragraph: `Breve descrição do projeto.`
            },
            {
                title: 'Projeto 3',
                paragraph: `Breve descrição do projeto.`
            }
        ]

        const createProjects = () => {
            const elements = [];
            let key = 'project-';

            for (let c = 0; c < projects.length; c++) {
                elements.push(
                    <ProjectModel key={key + c} index={c} title={projects[c].title} paragraph={projects[c].paragraph}/>
                );
            }

            return elements;
        }

        return (
            <section className='projects' id='projects'>
                <div className='projects-content'>
                    <p className='projects-title'>Projetos</p>
                    <div className='projects-underline'></div>
                    {createProjects()}
                </div>
            </section>
        );
    }
}

export default Projects;
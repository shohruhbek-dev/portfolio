import clsx from 'clsx';
import cn from './style.module.scss';

const ProjectCard = ({ title, description, imageUrl, projectLink,span }) => {
    return (
        <div className={clsx(cn.projectCard)}>
            <h3 className={clsx(cn.projectCardTitle)}>{title}</h3>

            <div className={clsx(cn.projectCardContainer)}>
                 <img src={imageUrl} alt={title} className={clsx(cn.projectCardImage)} />
                <div className={clsx(cn.projectCardContent)}>
                    <p className={clsx(cn.projectCardDescription)}>{description}</p>
                    <a href={projectLink} className={clsx(cn.projectCardLink)}>View Project</a>
                </div>
                <span>{span}</span>
            </div>
        </div>
    );
};


export default ProjectCard;
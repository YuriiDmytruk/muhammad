
interface ProjectCardProps {
    tag: string;
    title: string;
    url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ tag, title, url }) => {
    return (
        <div className='grid gap-3'>
            <img src={url} alt='project' />
            <div className='text-md text-orange font-light'>{tag}</div>
            <div className='font-semibold'>{title}</div>
        </div>
    )
}

export default ProjectCard
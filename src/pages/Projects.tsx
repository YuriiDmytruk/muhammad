import GrayButton from "../components/GrayButton"
import OrangeButton from "../components/OrangeButton"
import ProjectCard from "../components/ProjectCard"

import ProjectImage from "../assets/project.png"

const Projects = () => {
    return (
        <div className='grid gap-8'>
            <div className='text-6xl text-center font-semibold'>My Projects</div>
            <div className='text-md text-center w-[70%] mx-auto'>Lorem ipsum dolor sit amet
                consectetur. Imperdiet convallis
                blandit felis ligula aliquam venenatis
                fghh hgjj nisi ante.
            </div>
            <div className='flex items-center justify-center gap-4'>
                <GrayButton text='All' onClick={() => { }} />
                <OrangeButton text='UI UX' onClick={() => { }} />
                <GrayButton text='Website Design' onClick={() => { }} />
                <GrayButton text='App Design' onClick={() => { }} />
                <GrayButton text='Graphic Design' onClick={() => { }} />
            </div>
            <div className='grid grid-cols-3 items-center justify-center gap-3'>
                <ProjectCard
                    tag='UI UX'
                    title='AirCalling Landing Page Design'
                    url={ProjectImage} />
                <ProjectCard
                    tag='UI UX'
                    title='AirCalling Landing Page Design'
                    url={ProjectImage} />
                <ProjectCard
                    tag='UI UX'
                    title='AirCalling Landing Page Design'
                    url={ProjectImage} />
            </div>

        </div>
    )
}

export default Projects
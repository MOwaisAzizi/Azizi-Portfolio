import { motion } from 'motion/react'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectArray from '../../Data/project'

function Project() {

    const variants={
        hidden:{opacity:0,y:50},
        visible:{opacity:1,y:0},
    }

    return (
        <section className='flex min-h-screen w-full flex-wrap items-center justify-center pb-10 scroll-mt-24 md:scroll-mt-28' id='projects'>

                <motion.h1 className='text-4xl font-semibold text-white md:text-5xl mb-10'
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}
                >Projects</motion.h1>
            
            <div  
            className="flex justify-center flex-wrap w-full max-[1000px] gap-3 lg:gap-5 text-white">
                {
                    projectArray.map((project, i) => {
                        return <ProjectCard key={i} project={project} />
                    })
                }
            </div>
        </section>
    )
}


  
  export default Project;
import React from 'react'
import { motion } from 'motion/react'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectArray from '../../Data/project'


function Project() {

    return (

        <section className='flex min-h-screen w-full flex-wrap items-center justify-center md:py-0' id='project'>

                <h1 className='text-4xl font-semibold text-white md:text-6xl mb-10'>Projects</h1>
                


            <div className="flex justify-center flex-wrap w-full max-[1000px] gap-10 text-white">

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
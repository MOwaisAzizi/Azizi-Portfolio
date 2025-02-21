import { motion } from 'motion/react'
import {BiLogoHtml5,BiLogoGit,BiLogoGithub,BiLogoRedux,BiLogoCss3, BiLogoBootstrap,BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoNodejs,BiLogoJava,BiLogoMongodb } from 'react-icons/bi'

function TechStack() {

    const variants={
        hidden:{opacity:0,y:50},
        visible:{opacity:1,y:0},
    }

    return (
        <section className='mb-48 flex min-h[70vh] w-full flex-col items-center justify-center gap-16 md:gap-30 scroll-mt-40' id='techs'>

            <motion.h1 
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}
            className='text-4xl text-white font-semibold mt-16 md:text-5xl md:mt-24'>Skills</motion.h1>

            <div className='flex flex-wrap items-center justify-center gap-6 p-2 sm:px-3 pt-0'>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoHtml5 className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>
                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoCss3 className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoReact className='cursor-pointer text-[80px] text-blue-300 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoRedux className='cursor-pointer text-[80px] text-blue-300 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoTailwindCss className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoBootstrap className='cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoGit className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoGithub className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>


                {/* <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoNodejs className='cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <GrMysql className='cursor-pointer text-[80px] text-blue-300 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoMongodb className='cursor-pointer text-[80px] text-green-300 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>
                
                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <SiExpress  className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div> */}
                

                <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{duration:0.5}}>
                  <BiLogoJava className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' />
                </motion.div>
              
                 
                 


            </div>

        </section>
    )
}

export default TechStack
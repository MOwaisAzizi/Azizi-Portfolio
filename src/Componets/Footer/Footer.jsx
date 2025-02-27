import { BsGithub, BsTelegram, BsWhatsapp, BsLinkedin, BsPhone } from 'react-icons/bs'
import { FaFileAlt } from 'react-icons/fa'

function Footer() {

  return (
    <footer className='bg-black/60 p-6 rounded-sm'>
      <div className='text-center mb-4 text-2xl text-white'>+93798267860</div>
       <div className="flex gap-8 items-center justify-center">
        <a href="https://github.com/MOwaisAzizi" target='_blank'><BsGithub className='text-3xl cursor-pointer text-gray-300  hover:text-blue-500' /></a>
        <a href="https://www.linkedin.com/in/m-o-azizi" target='_blank'><BsLinkedin className='text-3xl cursor-pointer text-gray-300  hover:text-blue-600' /></a>
        <a href="https://flowcv.com/resume/ao3k3188fp" target='_blank'><FaFileAlt className='text-3xl cursor-pointer text-gray-300 hover:text-blue-500' /></a>
        <a href="https://t.me/EngOwais" target='_blank'><BsTelegram className='text-3xl cursor-pointer text-gray-300 hover:text-blue-500' /></a>
        <a href="https://wa.me/93798267860" target='_blank'><BsWhatsapp className='text-3xl cursor-pointer text-gray-300 hover:text-blue-500' /></a>
      </div>

      <div className="flex gap-4 sm:gap-6 items-center justify-center mt-5">
        <a href="#home"><p className='text-white hover:text-blue-500 '>Home</p></a>
        <a href="#techs"><p className='text-white  hover:text-blue-500 '>Skills</p></a>
        <a href="#projects"><p className='text-white  hover:text-blue-500 '>Projects</p></a>
        <a href="#education"><p className='text-white  hover:text-blue-500 '>Education</p></a>
        <a href="#contact"><p className='text-white  hover:text-blue-500 '>Contact</p></a>
      </div>

    </footer>
  )
}

export default Footer
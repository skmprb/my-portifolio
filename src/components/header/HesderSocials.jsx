import React from 'react'
import { BsLinkedin} from 'react-icons/bs';
import { FaGithub} from 'react-icons/fa';
import { FiDribbble} from 'react-icons/fi';


const HesderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pentakota-v-s/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/skmprb" target="_blank"><FaGithub/></a>
        <a href="" target="_blank"><FiDribbble/></a>

    </div>
  )
}

export default HesderSocials
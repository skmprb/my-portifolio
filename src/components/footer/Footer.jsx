import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import { BsLinkedin} from 'react-icons/bs';
import { FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Skmprb</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeeience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Certificates</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/sravankumarr.chinna/" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/sravanchinna251/" target="_blank"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/pentakota-v-s/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/skmprb" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; skmprb</small>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/full.png';
import HesderSocials from './HesderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='greet'> Hello I'm</h5>
        <h1 className='name'>Sravan Kumar</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HesderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>what I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Competative Programming</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>5 Star batch in Java Programming</p>
            </li>
            
          </ul>
          <div className='service__list-btn'>
          <a href="https://www.hackerrank.com/vsskumar2479" className='btn btn-primary' target='_blank'>Hacker Rank</a>
          </div>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Experience</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Making Own Projects</p>
            </li>
            
          </ul>
        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Salesforce</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>55+ badges in trailhead</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>75000+ points</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Expeditioner Rank</p>
            </li>
          </ul>

          <div className='service__list-btn'>
          <a href="https://trailblazer.me/id/vsskumar" className='btn btn-primary' target='_blank'>Trailblazer Id</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Services
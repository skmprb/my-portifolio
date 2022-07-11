import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/pro1.png';
import IMG2 from '../../assets/pro2.png';
import IMG3 from '../../assets/pro3.png';
import IMG4 from '../../assets/pro4.png';
import IMG5 from '../../assets/pro5.png';
import IMG6 from '../../assets/pro6.png';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Self Driving Car',
    review:'Complete on JS DOM Manipulation',
    github: 'https://github.com/skmprb/Self-Driving-Car',
    demo: 'https://google.com'
  },
  {
    id:2,
    image: IMG2,
    title: 'Content Managment System',
    review:'Laravel made easy for database connection',
    github: 'https://github.com/skmprb/CMS/tree/master',
    demo: 'https://google.com'
  },
  {
    id:3,
    image: IMG3,
    title: 'Shopping Cart',
    review:'php made easy for item component and calculations.',
    github: 'https://github.com/skmprb/ShopingCart',
    demo: 'https://google.com'
  },
  {
    id:4,
    image: IMG4,
    title: 'Chatting Application',
    review: 'Mern Stack made eassy to use "getStream.io" Api',
    github: 'https://github.com/skmprb/Chating-application',
    demo: 'https://google.com'
  },
  {
    id:5,
    image: IMG5,
    title: 'Linkedin clone',
    review: 'React js classes and function make essay for me to create components and reduces the work.',
    github: 'https://github.com/skmprb/linked-in',
    demo: 'https://google.com'
  },
  {
    id:6,
    image: IMG6,
    title: 'Covid Tracker',
    review: 'React js helped me to get data from APIs easily.',
    github: 'https://github.com',
    demo: 'https://google.com'
  }

]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,review,github,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>
                {title}
              </h3>
              <h5>
                {review}
              </h5>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
        


      </div>
    </section>
  )
}

export default Portfolio
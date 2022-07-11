import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/certificate.jpg';
import AVTR2 from '../../assets/certificate1.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'React Js',
    review: 'Learnt Components,states,hooks,classes,functions.',

  },
  {
    id:2,
    avatar: AVTR2,
    name: 'Front End Development',
    review: 'Learnt HTML, CSS, JavaScript,Bootstrap.'
  }
]

const Testimonials = () => {
  return (
    <section is='testimonials'>
      <h5>Review form Clients</h5>
      <h2>Testimonilas</h2> 

      <Swiper className='container testimonials__container'
        modules = {[Pagination]}
        spaceBetween={40}
        slidesPreview={1}
        pagination = {{ clickablt: true}}>
        {
        data.map(({id, avatar, name, review}) => {
          return(
            <SwiperSlide key={id} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt="Avatar one" />

              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
        </SwiperSlide>

          )
        }) 
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
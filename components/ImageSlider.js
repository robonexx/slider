import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled from '../styles/Slider.module.css'
import { Carousel } from 'react-responsive-carousel'

export default function ImageSlider(posts) {
  console.log('passed data:', posts)
  return (
      <>
          <Carousel infiniteLoop autoPlay className={styled.wrapperDos}>
            {posts.posts.map(post => (
              <div className="image" key={post.id}>
                <h1 className={styled.title}>{post.name}</h1>
                <img src={post.image} alt="mobile" className={styled.image} />
                <p className={styled.details}>{post.details}</p>
               </div>
            ))}
          </Carousel>
        
    </>
  )
}

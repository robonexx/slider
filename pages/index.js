import Head from 'next/head'
import Image from 'next/image'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../styles/Home.module.css'
import styled from '../styles/Slider.module.css'
import { Carousel } from 'react-responsive-carousel'

export default function Home(props) {
 
  console.log(props.posts)

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         image slider
        </h1>

        <Carousel infiniteLoop autoPlay className={styled.wrapper}>
              <div className="image">
            <img src="/keyboard.jpg" alt="mobile" className={styled.image} />
            </div>
              <div className="image">
            <img src="/keyboard2.jpg" alt="mobile" className={styled.image} />
            </div>
              <div className="image">
            <img src="/controller.jpg" alt="mobile" className={styled.image} />
            </div>
              <div className="image">
            <img src="/stargazed.jpg" alt="mobile" className={styled.image} />
            </div>
        </Carousel>
        
        <div>
          <h1>TEST SLIDER COMPONENT with api fetch</h1>
          <Carousel className={styled.wrapperDos}>
            {props.posts.map(post => (
              <div className="image" key={post.id}>
                <h1 className={styled.title}>{post.name}</h1>
               <img src={post.image} alt="mobile" className={styled.image} />
               </div>
            ))}
          </Carousel>
        </div>
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>
            FOOTER
          </span>
      </footer>
    </div>
  )
}
/* 
export const Posts = props => (
  <div>
     {props.posts.map(post => (
       
            <div className='image' key={post.id}>
              <img src={post.image} alt='mobile' className={styles.image} />
              <h1 className={styles.name}>{post.name}</h1>
            </div>
        ))}
  </div>
) */


Home.getInitialProps = async function () {
  const res = await fetch(
    'https://my-json-server.typicode.com/robonexx/db/posts'
  );
  const data = await res.json();
  return {
    posts: data,
  };
};

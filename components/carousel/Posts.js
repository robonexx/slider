import React from 'react';
import fetch from "isomorphic-unfetch";
import { Carousel } from 'react-responsive-carousel'

const Posts = props => (
    <div>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
            <div className='image' >
              <img src={post.image} alt='mobile' className={styles.image} />
              <h1 className={styles.name}>{post.name}</h1>
            </div>

        </li>
        ))}
      
      </ul>
      
        
    </div>
  );

Posts.getInitialProps = async function () {
  const res = await fetch(
    'https://my-json-server.typicode.com/robonexx/db/posts'
  );
  const data = await res.json();
  return {
    posts: data,
  };
};

export default Posts;

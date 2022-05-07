import React, { useState } from 'react';
import styles from '../styles/QA.module.css';
import { useToggle } from '../hooks/useToggle'

export default function QA(props) {
  const { toggle: open, toggler: toggleOpen } = useToggle();

  const { title, desc } = props;

  
const Title = () => {
  return (
    <button onClick={toggleOpen}>
    {title} <span>{open ? '-' : '+'}</span>
  </button>
  )
}
const Desc = () => {
  return (
    <>
    {open && <div className={styles.answer}>{desc}</div>}
    </>
  )
}

  return (
    <div className={styles.qa_wrapper}>
      <div className={styles.qa}>
        <h1>Q & A</h1>
        <Title title={`What is your name` } />
        <Desc desc={`my name is what`}/>
      </div>
    </div>
  );  
}

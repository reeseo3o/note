'use client';

import { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
  const [text, setText] = useState('로딩중~');
  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article className={styles.article}>{text}</article>;
}

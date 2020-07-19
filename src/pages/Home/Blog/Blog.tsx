import React, {useState, useEffect} from 'react';
import styles from './Blog.module.css';
import seeAllArrow from '../../../assets/images/seeAll.png';
import BlogItem, {IBlog} from "./BlogItem";

export default function (){

    const [news] = useState<IBlog[]>([{
        title: 'Standardization of color schemes through the eyes of a programmer',
        mainText: ' Let’s try to figure out how designers use colors in UI and how the whole thing can be standardized without restricting designers',
        timeToRead: '15 min read',
        date: 'May 24. 2020'
    },
        {
            title: 'Standardization of color schemes through the eyes of a programmer',
            mainText: 'Let’s try to figure out how designers use colors in UI and how the whole thing can be standardized without restricting designers',
            timeToRead: '15 min read',
            date: 'May 24. 2020'
        }])

    useEffect(() => {}, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.upperTextWrapper}>
                <div className={styles.blogTitle}>Blog</div>
                <div className={styles.seeAllText}><span>see all </span><img src={seeAllArrow} /></div>
            </div>
            <div className={styles.blogItemWrapper}>
                {news.map((item, index) => {
                    return <BlogItem item={item} key={index}/>
                })}
            </div>
        </div>
    );
}

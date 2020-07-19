import React from 'react';
import styles from './Blog.module.css';
import goToMediumArrow from '../../../assets/images/goToMedium.png';

export interface IBlog{
    title: string;
    mainText: string;
    timeToRead: string;
    date: string;
}

interface Props {
    item: IBlog;
}

export default function ({item}: Props) {

    const {title, mainText, timeToRead, date} = item;

    return (
        <div className={styles.blogItem}>
            <div><span className={styles.title}>{title}</span></div>
            <div><span className={styles.mainText}>{mainText}</span></div>
            <div className={styles.mediumWrapper}><span>M</span><span className={styles.readOnMediumText}>Read on Medium</span><img src={goToMediumArrow} alt="Go to medium" /></div>
            <div className={styles.dateWrapper}><span>{timeToRead}</span><span>{date}</span></div>
        </div>
    );
}

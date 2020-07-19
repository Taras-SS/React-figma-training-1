import React from 'react';
import styles from './Offers.module.css';

export interface IOffer {
    title: string;
    image: any;
    description: string;
}

interface Props {
    item: IOffer;
}

export default function ({item}: Props) {

    return (
      <div className={styles.offerItem}>
          <div><img src={item.image} alt="Offer image" /></div>
          <div className={styles.titleWrapper}><span className={styles.offerTitle}>{item.title}</span></div>
          <div><span className={styles.offerDescription}>{item.description}</span></div>
          <div></div>
      </div>
    );
}

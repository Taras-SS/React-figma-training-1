import React from 'react';
import styles from './Footer.module.css';
import phoneImg from '../../assets/images/phone.png';

export default function () {
    return (
        <div className={styles.yellowBlock}>
            <div>
                <span id={styles.yellowBlockTitle}>Let’s discuss your ptoject!</span>
                <span id={styles.yellowBlockAdditionalText}>Leave your email and we’ll contact you to assign a call</span>
                <button className={styles.btn} >Assign a call</button>
            </div>
            <div className={styles.phoneImageWrapper}>
                <img src={phoneImg} alt="Phone image" className={styles.phoneImage} />
            </div>
        </div>
    );
}

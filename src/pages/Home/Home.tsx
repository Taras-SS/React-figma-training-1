import React from "react";
import WithHands from "./WithHands/WithHands";
import Offers from './Offers/Offers';
import Blog from './Blog/Blog';
import heartAndEyeImage from '../../assets/images/HeartAndEye.png';
import styles from './Home.module.css';

export default function () {
  return (
    <div>
      <WithHands />
        <div className={styles.blogOfferWrapper}>
            <Offers/>
            <img className={styles.heartAndEyeImage} src={heartAndEyeImage} />
            <div className={styles.rightRedShadow} ></div>
            <div className={styles.rightBlueShadow} ></div>
            <div className={styles.leftBlueShadow} ></div>
            <div className={styles.leftRedShadow} ></div>
            <Blog/>
        </div>
    </div>
  );
}

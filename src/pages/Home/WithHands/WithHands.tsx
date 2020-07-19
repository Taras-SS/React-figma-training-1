import React, { useEffect } from "react";
import styles from "./WithHands.module.css";

export default function () {
  useEffect(() => {
    const elem = document.getElementById("cutTop");
    elem !== null && (elem.scrollTop = elem.scrollHeight);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.firstImgLine}></div>
      <div className={styles.secondImgLine}></div>
      <div className={styles.thirdImgLine}></div>
      <div className={styles.textBlock}>
        <a>External</a>
        <a className={styles.cutBottomText}>Design department</a>
        <a className={styles.darkText}>Design department</a>
        <a className={styles.cutTop} id="cutTop">
          Design department
        </a>
        <a>For your it-company</a>
      </div>
      <div className={styles.yellowCircle}></div>
    </section>
  );
}

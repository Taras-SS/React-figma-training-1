import React from 'react';
import styles from './Footer.module.css';
import linkedinImg from '../../assets/images/linkedin.png';
import telegramImg from '../../assets/images/telegram.png';
import whatsappImg from '../../assets/images/whatsapp.png';
import facebookImg from '../../assets/images/facebook.png';
import gmailImg from '../../assets/images/gmail.png';
import behanceImg from '../../assets/images/behance.png';
import youtubeImg from '../../assets/images/Youtube.png';
import instagramImg from '../../assets/images/instagram.png';
import mediumImg from '../../assets/images/medium.png';
import habrImg from '../../assets/images/habr.png';

export default function () {
    return (
        <div className={styles.contacts}>
            <ul>
                <li>Contact us</li>
                <li><img src={linkedinImg} alt="Linkedin icon"/><span>Linkedin</span></li>
                <li><img src={telegramImg} alt="Telegram icon"/><span>Telegram</span></li>
                <li><img src={whatsappImg} alt="Whatsapp icon"/><span>Whatsapp</span></li>
                <li><img src={facebookImg} alt="Facebook icon"/><span>Facebook</span></li>
                <li><img src={gmailImg} alt="Gmail icon"/><span>ilove@opium.pro</span></li>
            </ul>
            <ul>
                <li>Follow us</li>
                <li><img src={behanceImg} alt="Behance icon"/><span>Behance</span></li>
                <li><img src={youtubeImg} alt="YouTube icon"/><span>YouTube</span></li>
                <li><img src={instagramImg} alt="Instagram icon"/><span>Instagram</span></li>
                <li><img src={mediumImg} alt="Medium icon"/><span>Medium</span></li>
                <li><img src={habrImg} alt="Habr icon"/><span>Habr</span></li>
            </ul>
        </div>
    );
}

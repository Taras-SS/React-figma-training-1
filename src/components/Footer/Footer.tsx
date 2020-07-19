import React from "react";
import styles from './Footer.module.css';
import ContactsAndFollows from "./ContactsAndFollows";
import YellowBlock from "./YellowBlock";

export default function () {
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.leftBlockWrapper}>
                    <ul>
                        <li>Main</li>
                        <li>About us</li>
                        <li>Contacts</li>
                    </ul>
                    <ul>
                        <li>UX/UI Design</li>
                        <li>Usability testing</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <span>© Every time you brake copyright rules, Hitler becomes more alive</span>
                </div>
            </div>
            <ContactsAndFollows/>
            <YellowBlock/>
        </footer>
    );
}

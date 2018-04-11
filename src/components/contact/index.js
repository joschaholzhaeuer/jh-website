import React from "react";
import styles from "./index.module.css";
import portrait from "../../images/portrait.jpg";

class Contact extends React.Component {
    render() {
        return (
            <div className={styles.contact}>
                <figure className={styles.figure}>
                    <img src={portrait} alt="Portrait of Joscha" className={styles.img}/>
                </figure>
                <a href="https://www.xing.com/profile/Joscha_Holzhaeuer?sc_o=mxb_p" target="_blank" className={styles.icon_xing}></a>
                <a href="mailto:jh&#064;dreiqbik&#046;de" className={styles.icon_mail}></a>
            </div>
        );
    }
}
export default Contact;

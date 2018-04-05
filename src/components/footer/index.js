import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <p className={styles.text}>&copy; 2018 Joscha Holzhäuer</p>
                <Link to="/imprint/" className={styles.link}>Imprint</Link>
            </footer>
        );
    }
}
export default Footer;

import React from "react";
import Contact from '../contact/index';
import styles from "./index.module.css";

class About extends React.Component {
    render() {
        return (
            <section className={styles.about}>
                <h1 className={styles.heading}>Hello! I'm Joscha Holzhäuer, frontend web developer.</h1>
                <p className={styles.text}>After studying Online Media in the Black Forest, I started my own business with two friends of mine. At <a href="https://dreiqbik.de" target="_blank" className={styles.link}>dreiQBIK</a>, we develop custom WordPress websites and work as freelancers for several partners in and around Karlsruhe.</p>
                <Contact />
            </section>
        );
    }
}
export default About;

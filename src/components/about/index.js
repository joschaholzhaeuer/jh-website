import React from "react";
import styles from "./index.module.css";

class About extends React.Component {
    render() {
        return (
            <section className={styles.about}>
                <h1 className={styles.about__heading}>Hello! I'm Joscha Holzhäuer, frontend web developer.</h1>
                <p className={styles.about__text}>After studying Online Media in the Black Forest, I started my own business with two friends of mine. At <a href="https://dreiqbik.de" target="_blank" className={styles.about__link}>dreiQBIK</a>, we develop custom WordPress websites and work as freelancers for several partners in and around Karlsruhe.</p>
            </section>
        );
    }
}
export default About;

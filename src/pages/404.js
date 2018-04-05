import React from "react";
import styles from "./404.module.css"
import Contact from './../components/contact/index';

class Error extends React.Component {
    render() {
        return (
            <main className={styles.error}>
                <h1 className={styles.heading}>404 - page does not exist</h1>
                <p className={styles.text}>Whoops, how did you do that? Click on the logo to go back to the homepage.</p>
                <Contact />
            </main>
        );
    }
}
export default Error;

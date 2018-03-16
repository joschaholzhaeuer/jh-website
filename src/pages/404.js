import React from "react";
import styles from "./404.module.css"

class Error extends React.Component {
    render() {
        return (
            <main className={styles.error}>
                <h1 className={styles.heading}>Whoops, how did you do that?</h1>
                <p className={styles.text}>This website actually only has one single page, so why don't you go back? ;)</p>
            </main>
        );
    }
}
export default Error;

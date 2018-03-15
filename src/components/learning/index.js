import React from "react";
import styles from "./index.module.css";

class Learning extends React.Component {
    render() {
        return (
            <aside className={styles.learning}>
                <h2 className={styles.learning__heading}>Currently learning</h2>
            </aside>
        );
    }
}
export default Learning;

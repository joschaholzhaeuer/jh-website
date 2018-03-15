import React from "react";
import styles from "./index.module.css";

class Toolbox extends React.Component {
    render() {
        return (
            <aside className={styles.toolbox}>
                <h2 className={styles.toolbox__heading}>My toolbox</h2>
            </aside>
        );
    }
}
export default Toolbox;

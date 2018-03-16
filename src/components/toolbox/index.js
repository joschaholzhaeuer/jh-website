import React from "react";
import Box from "../box/index"
import styles from "./index.module.css";

class Toolbox extends React.Component {
    render() {
        return (
            <aside className={styles.toolbox}>
                <h2 className={styles.heading}>My favorite tools</h2>
                <ul className={styles.list}>
                    <Box
                        heading="Gatsby"
                        subheading="Static Site Generator"
                        icon="icon_book_open"
                    />
                    <Box
                        heading="React"
                        subheading="JavaScript Framework"
                        icon="icon_github"
                    />
                    <Box
                        heading="ES6"
                        subheading="JavaScript Standard"
                        icon="icon_mail"
                    />
                </ul>
            </aside>
        );
    }
}
export default Toolbox;

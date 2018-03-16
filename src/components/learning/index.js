import React from "react";
import Box from "../box/index"
import styles from "./index.module.css";

class Learning extends React.Component {
    render() {
        return (
            <aside className={styles.learning}>
                <h2 className={styles.heading}>Currently learning</h2>
                <ul className={styles.list}>
                    <Box
                        heading="Gatsby"
                        subheading="Static Site Generator"
                        icon="icon_book_open"
                        url="https://www.gatsbyjs.org/"
                    />
                    <Box
                        heading="React"
                        subheading="JS Framework"
                        icon="icon_github"
                        url="https://reactjs.org/"
                    />
                    <Box
                        heading="ES6"
                        subheading="ECMAScript Standard"
                        icon="icon_mail"
                        url="https://babeljs.io/learn-es2015/"
                    />
                </ul>
            </aside>
        );
    }
}
export default Learning;

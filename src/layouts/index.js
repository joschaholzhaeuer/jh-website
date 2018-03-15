import React from "react";
import Header from "./../components/header";
import styles from "./index.module.css"

const TemplateWrapper = ({ children }) => (
    <div className={styles.wrapper}>
        <Header />
        {children()}
    </div>
);

export default TemplateWrapper;

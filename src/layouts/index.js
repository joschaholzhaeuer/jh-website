import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import styles from "./index.module.css";

const TemplateWrapper = ({ children }) => (
    <div className={styles.wrapper}>
        <Header />
        {children()}
        <Footer />
    </div>
);

export default TemplateWrapper;

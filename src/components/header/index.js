import React from "react";
import styles from "./index.module.css";
import logo from "../../images/jh-logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <img src={logo} alt="JH Logo" className={styles.logo}/>
            </header>
        );
    }
}
export default Header;

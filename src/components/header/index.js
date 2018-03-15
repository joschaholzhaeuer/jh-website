import React from "react";
import styles from "./index.module.css";
import logo from "../../images/jh-logo.svg"

class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <img src={logo} alt="JH Logo" className={styles.header__logo}/>
            </div>
        );
    }
}
export default Header;

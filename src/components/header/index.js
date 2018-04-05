import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";
import logo from "../../images/jh-logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <Link to="/">
                    <figure className={styles.figure}>
                        <img src={logo} alt="JH Logo" className={styles.logo} />
                    </figure>
                </Link>
            </header>
        );
    }
}
export default Header;

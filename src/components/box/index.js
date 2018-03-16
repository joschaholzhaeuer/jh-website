import React from "react";
import styles from "./index.module.css";

class Box extends React.Component {
    render() {
        return (
            <li className={styles.box}>
                <a  className={styles.anchor}
                    href={this.props.url}
                    target="_blank"
                >
                    <i className={styles[this.props.icon]}></i>
                    <div className={styles.info}>
                        <h3 className={styles.heading}>{this.props.heading}</h3>
                        <p className={styles.subheading}>{this.props.subheading}</p>
                    </div>
                </a>
            </li>
        );
    }
}
export default Box;

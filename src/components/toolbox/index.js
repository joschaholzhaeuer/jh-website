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
                        heading="Timber (Twig)"
                        subheading="WP Template Engine"
                        icon="icon_timber"
                        url="https://www.upstatement.com/timber/"
                    />
                    <Box
                        heading="VS Code"
                        subheading="Code Editor"
                        icon="icon_vscode"
                        url="https://code.visualstudio.com/"
                    />
                    <Box
                        heading="GitHub"
                        subheading="Version Control Platform"
                        icon="icon_github"
                        url="https://github.com/joschaholzhaeuer"
                    />
                    <Box
                        heading="Netlify"
                        subheading="Static Web Host"
                        icon="icon_netlify"
                        url="https://www.netlify.com/"
                    />
                </ul>
            </aside>
        );
    }
}
export default Toolbox;

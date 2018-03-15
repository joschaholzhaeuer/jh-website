import React from "react";
import styles from "./index.module.css"
import About from './../components/about/index';
import Learning from './../components/learning/index';
import Toolbox from './../components/toolbox/index';

class App extends React.Component {
    render() {
        return (
            <main className={styles.app}>
                <Learning />
                <About />
                <Toolbox />
            </main>
        );
    }
}
export default App;

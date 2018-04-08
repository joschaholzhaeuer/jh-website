import React from "react";
import styles from "./index.module.css";
import About from './../components/about/index';
import Learning from './../components/learning/index';
import Toolbox from './../components/toolbox/index';
import { Helmet } from "react-helmet";

class App extends React.Component {
    render() {
        return (
            <main className={styles.app}>
                <Helmet>
                    <title>Joscha Holzhäuer | Web Developer</title>
                    <meta name="description" content="Hi! I'm Joscha Holzhäuer, frontend web developer and co-founder of dreiQBIK." />
                    <meta name="google-site-verification" content="aS8JjPVdh06VU1g0t3Hr0UTopLQJrJzxlPLwjnUVd04" />
                </Helmet>
                <Toolbox />
                <About />
                <Learning />
            </main>
        );
    }
}
export default App;

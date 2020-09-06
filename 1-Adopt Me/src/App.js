import React , {useState} from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParam from "./SearchParam";
import {Router, Link} from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
    const themeHook = useState("peru");
    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div id="something-important">
                    <header>
                        <Link to="/">
                            Adopt Me!!!
                        </Link>
                    </header>
                    <Router>
                        <SearchParam path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
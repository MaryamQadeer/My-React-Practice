import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParam from "./SearchParam";
import {Router, Link} from "@reach/router";
import Details from "./Details";
const App = () => {
    return (
        <React.StrictMode>
            <div id="something-important">
                <header>
                    <Link to="/">
                        Adopt Me!!!
                    </Link>
                </header>
                    {/* <Pet name = "Snowball" animal= "Cat" breed="Persian"/>
                    <Pet name = "Mithu" animal= "Parrot" breed="Budgerigar"/>
                    <Pet name = "Bumpy" animal= "Goat" breed="American"/> */}
                <Router>
                    <SearchParam path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
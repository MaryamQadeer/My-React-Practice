import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParam from "./SearchParam";
const App = () => {
    return (
        <div id="something-important">
            <h1>Adopt Me!!!</h1>
            {/* <Pet name = "Snowball" animal= "Cat" breed="Persian"/>
            <Pet name = "Mithu" animal= "Parrot" breed="Budgerigar"/>
            <Pet name = "Bumpy" animal= "Goat" breed="American"/> */}
            <SearchParam />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
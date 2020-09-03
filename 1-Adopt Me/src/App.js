import React from "react";
import {render} from "react-dom";
import { Pet } from "./Pet";
const App = () => {
    return React.createElement("div", {}, 
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
        name: "Snowball",
        animal: "Cat",
        breed: "Persian"
    }),
    React.createElement(Pet,{
        name: "Mithu",
        animal: "Parrot",
        breed: "Budgerigar"
    }),
    React.createElement(Pet,{
        name: "Bumpy",
        animal: "Goat",
        breed: "American"
    })
    );
};
render(React.createElement(App), document.getElementById("root"));
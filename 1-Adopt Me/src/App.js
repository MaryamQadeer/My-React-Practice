const Pet = ({name,animal,breed}) => {
    return React.createElement("div",{}, 
    React.createElement("h1",{},name),
    React.createElement("h2",{},animal),
    React.createElement("h2",{},breed));
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
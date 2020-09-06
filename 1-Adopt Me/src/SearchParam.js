import React, {useState , useEffect, useContext} from "react";
import pet, {ANIMALS} from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParam = () => {
    const myBool = false;
    const [location, setLocation] = useState("Seatle, WA");
    const [animal, AnimalDropdown] = useDropdown("animal","dog", ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown, setBreed] = useDropdown("breed","", breeds);
    const [pets, setPets] = useState([]);
    const [theme,setTheme] = useContext(ThemeContext);

    async function requestPets(){
        const {animals} = await pet.animals({
            location,
            breed,
            type:animal
        });
        console.log("animals", animals);
        setPets(animals || []);
    }

    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({breeds}) => {
            const breedString = breeds.map(({name})=> name);
            setBreeds(breedString);
        }, console.error);
    },[animal,setBreeds, setBreed]);
    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} onChange={event => setLocation(event.target.value)} onBlur={event => setLocation(event.target.value)} placeholder="Location"/>
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="blue">Blue</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="chartreuse">Chart Reuse</option>
                    </select>
                </label>
                <button style={{backgroundColor: theme}}>
                    Submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    );
};
export default SearchParam;
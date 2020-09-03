import React, {useState , useEffect} from "react";
import pet, {ANIMALS} from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParam = () => {
    const myBool = false;
    // if (myBool){
    //     const [location, setLocation] = useState("Seatle, WA");
    // }
    const [location, setLocation] = useState("Seatle, WA");
    // const [animal, setAnimal] = useState("dog");
    // const [breed, setBreed] = useState("");
    const [animal, AnimalDropdown] = useDropdown("animal","dog", ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown, setBreed] = useDropdown("breed","", breeds);
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
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} onChange={event => setLocation(event.target.value)} onBlur={event => setLocation(event.target.value)} placeholder="Location"/>
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>
                    Submit
                </button>
            </form>
        </div>
    );
};
export default SearchParam;
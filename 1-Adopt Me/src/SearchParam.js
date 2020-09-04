import React, {useState , useEffect} from "react";
import pet, {ANIMALS} from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

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
    const [pets, setPets] = useState([]);

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
                <button>
                    Submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    );
};
export default SearchParam;
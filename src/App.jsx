import { useEffect, useState } from "react"
import DogCard from "./components/DogCard"
import FetchButton from "./components/FetchButton";

function App() {

    const [dogs, setDogs] = useState('empty');
    const [loading, setLoading] = useState(true)

    function fetchNewDog() {
        setLoading(true)

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    setLoading(false)
                    console.log(response.status);
                    return Promise.reject("Failed to fetch");
                }
            })
            .then(data => {
                setLoading(false)
                setDogs(data.message)
            })
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        fetchNewDog()
    }, []);

    return (
        <main>
            <FetchButton fetchNewDog={fetchNewDog} />
            <DogCard dogImage={dogs} isLoading={loading} />
        </main>



    )
}

export default App

function DogCard({ dogImage, isLoading }) {
    return (
        <div className="dog-container">
            {
                isLoading ?
                    (<p>Loading...</p>) :
                    (<img src={dogImage} alt="Image of a dog"></img>)
            }
        </div>
    )
}

export default DogCard
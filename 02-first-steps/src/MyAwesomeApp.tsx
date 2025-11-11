// export function MyAwesomeApp(){
//     return(
//         <>
//         <h1>Jesús</h1>
//         <h3>VS</h3>
//         </>
//     )
// }

const firstName = "Jesus";
const lastName = "VS";

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false; // Boleano no tiene representación en React

const address = {
    zipCode: 'ABC-123',
    country: 'Francia'
};
// Recomendable sacar las variables afuera del componente

export const MyAwesomeApp = () => {

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(", ")}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p>{JSON.stringify(address)}</p>
        </>
    )
}
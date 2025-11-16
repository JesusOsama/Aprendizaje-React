// export function MyAwesomeApp(){
//     return(
//         <>
//         <h1>Jesús</h1>
//         <h3>VS</h3>
//         </>
//     )
// }

import type { CSSProperties } from "react";

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

    const myStyles: CSSProperties = {
        backgroundColor: '#fafafa',
        borderRadius: 20,
        padding: 10,
        marginTop: 30
    };

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(", ")}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}
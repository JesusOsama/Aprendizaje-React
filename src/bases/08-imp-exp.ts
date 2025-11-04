import { heroes, type Hero } from "../data/heroes.data"


const getHeroById = (id: number): Hero | undefined =>{
    const hero = heroes.find( (hero) => {
        return hero.id === id; // explicación de esto
    })

    // if (!hero){
    //     throw new Error(`No existe un heroe con ese id ${id}`)
    // }

    return hero
}

console.log(getHeroById(8))
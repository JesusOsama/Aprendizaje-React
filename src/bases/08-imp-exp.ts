import { heroes, type Hero , Owner} from "../data/heroes.data"


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

export const getHeroesByOwner = (owner: Owner): Hero[] =>{
    
    const heroesByOwner = heroes.filter(
        (hero) => hero.owner === owner
    )

    return heroesByOwner
};
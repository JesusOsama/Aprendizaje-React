const person = {
    name:'Tony',
    age: 45,
    key: 'Ironman',
}


const { age: ironmanAge, key, name: ironmanName} = person;

console.log({ironmanName, ironmanAge, key})

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank}: Hero) => {
    return {
        keyName: key,
        user:{
            name,
            age,
        },
        rank: rank
    }
}

const {rank, keyName, user} = useContext(person)

const {name, age} = user

console.log({rank, keyName, name, age})
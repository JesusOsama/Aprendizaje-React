interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address { 
    postalCode: string;
        city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC-123',
        city: 'New York'
    }
};

const spiderman: Person ={
    firstName: "Peter",
    lastName: "Parker",
    age: 22
}

console.log(ironman)

//const spiderman = { ... ironman}; Solo copia de un nivel

// const spiderman = structuredClone(ironman); // Copia todos los nivele

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.adress.city = 'San José'


// console.log(spiderman, ironman)
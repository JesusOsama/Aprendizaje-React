const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    adress: {
        postalCode: 'ABC123',
        city: 'New York'
    }
};

//const spiderman = { ... ironman}; Solo copia de un nivel

const spiderman = structuredClone(ironman); // Copia todos los nivele

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.adress.city = 'San José'


console.log(spiderman, ironman)
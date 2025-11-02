
// Forma 1
function greet(name:string): string{
    return `Hola ${name}`;
}

// Forma 2
const greet2 = (name: string): string =>{
    return `Hola ${name}`;
}

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2)


function getUser () {
    return {
        uid : 'ABC-123',
        username: 'Anonimo',
    };
}

const getUser2 = () =>{
    return {
        uid : 'ABC-123',
        username: 'Anonimo',
    };
}

const user = getUser();
const user2 = getUser2();

console.log(user, user2)

const characterNames = ['Goku', 'Vegeta', 'Trunks']

// arreglos si importa el orden y la posición

const [ , , trunks] = characterNames;


console.log({trunks});


const returnsArrayFn = () =>{
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters + '100');
console.log(numbers + 100);


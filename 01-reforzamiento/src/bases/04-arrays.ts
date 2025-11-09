
const myArray:number[] = [1, 2, 3, 4, 5, 6];

let myArray3:number[]


myArray.push(10);
myArray.push(11);

// for (const myNumber of myArray){
//     console.log(myNumber + 10);
// }

//const myArray2 = [... myArray]; // Apuntan al mismo espacio de memoria si solo iguales. Solo de un nivel
const myArray2 = structuredClone(myArray); // ALL los niveles

myArray2.push(7);

console.log({myArray, myArray2})
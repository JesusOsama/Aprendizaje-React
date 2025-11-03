
function useState(firstValue: string){
    return [
        firstValue,
        (secondValue: string) =>{
            console.log(secondValue);
        },
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name)
setName('Vegeta')
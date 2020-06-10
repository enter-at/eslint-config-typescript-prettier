class BigNumbers {
    constructor(private numbers: number[]) {}
    max() {
        return Math.max(...this.numbers);
    }
}

function sum(a: number, b: number) {
    return a + b;
}

sum(1, 2);

interface Person {
    name: string;
    age: number;
}

function greeter(person: Person) {
    return `My name is ${person.name}. I am ${person.age} years old.`;
}

const foo = [
    11111111111111111,
    200000000888997,
    37217981273897218937812973,
    42364638623874196438648372,
    5327987498127498713897491,
    6,
    7,
    8,
    9,
    0,
];
new BigNumbers(foo).max();

greeter({ name: "bar", age: 24 });

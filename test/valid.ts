class BigNumbers {
    numbers: bigint[];

    constructor(numbers: (number | bigint)[]) {
        this.numbers = numbers.map((n) => BigInt(n));
    }

    max() {
        return this.numbers.reduce((m, e) => (e > m ? e : m));
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
    11111111111111111n,
    200000000888997,
    37217981273897218937812973n,
    42364638623874196438648372n,
    5327987498127498713897491n,
    6,
    7,
    8,
    9,
    0,
];
new BigNumbers(foo).max();

greeter({ name: "bar", age: 24 });

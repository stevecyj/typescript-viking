interface IPerson {
    readonly id: number;
    name: string;
    age?: number;
}

let person: IPerson = {id:1, name: 'John'};
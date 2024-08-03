const person: {
    age: number;
    name: string;
    hobbies: string[];
} = {
    age: 22,
    name: "Roozbeh",
    hobbies: ["Sport", "Coding"],
}
let favoriteBooks: (string | number)[];
favoriteBooks = ["golabiBook", "sibBook", 2]

console.log(person.name)

person.hobbies.map(hobby => console.log(hobby.toLowerCase()))

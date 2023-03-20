
// 8. Return the youngest age of this array.
let user = [
    {
        name: 'John',
        age: 37,
        hobbies: ['reading', 'coding'],
    },
    {
        name: 'peter',
        age: 23,
        hobbies: ['reading', 'games', 'coding'],
    },
    {
        name: 'jack',
        age: 15,
        hobbies: ['reading', 'games'],
    },
    {
        name: 'devil',
        age: 70,
        hobbies: ['swiming', 'games', 'coding'],
    }
];

user.sort((a, b) => {
    return a.age - b.age;
});
console.log(user);

// let res = user.filter(val => !val.hobbies.includes('games'))

// console.log('hello objects');



const array = [];
array.push('abd');
console.log(array.push);

const arr = ['1', 2, 3, 4];
console.log(arr[2]);

const users = {
    name: 'Hamza',
    email: 'muhamadhamza474@gmail.com',
    age: 27,
    isLoggedIn: false,
}
console.log(users.age);

const user = {
    name: 'Hamza',
    nestedObj: {
        nestedArr: ['Hamza', {
            name: 'ham2',
            nestedObj: {
                name: 'ham   3'
            }
        }]
    }
}
console.log(user.name);
let complexObject = {
    person: {
        name: {
            first: "John",
            last: "Doe",
        },
        age: 30,
        address: {
            street: {
                number: 123,
                name: "Nested Street",
            },
            city: "Nested City",
            country: "Nested Country",
        },
    },
    work: {
        company: {
            name: "TechCorp",
            location: {
                city: "TechCity",
                country: "TechCountry",
            },
        },
        position: "Senior Developer",
        projects: [
            {
                name: "Project A",
                technologies: ["JavaScript", "React", "Node.js"],
            },
            {
                name: "Project B",
                technologies: ["Python", "Django", "PostgreSQL"],
            },
        ],
    },
    hobbies: {
        indoor: ["Reading", "Chess"],
        outdoor: ["Hiking", "Cycling"],
    },
};

console.log(complexObject.person.name.first);

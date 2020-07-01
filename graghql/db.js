export const people = [
  {
    id: 1,
    name: "Park",
    age: 12,
    gender: "male"
  },
  {
    id: 2,
    name: "Jeong",
    age: 36,
    gender: "female"
  },
  {
    id: 3,
    name: "Lee",
    age: 30,
    gender: "male"
  }
];

export const getById = id => people.find(person => person.id === id);

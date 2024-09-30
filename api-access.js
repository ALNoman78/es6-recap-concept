const people = [
  {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
    info: {
      age: 35,
      occupation: "Software Developer",
      hobbies: ["Reading", "Coding", "Running"],
    },
  },
  {
    name: "Jane Smith",
    address: {
      street: "456 Oak Lane",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
    },
    info: {
      age: 29,
      occupation: "Graphic Designer",
      hobbies: ["Painting", "Photography", "Traveling"],
    },
  },
  {
    name: "Emily Brown",
    address: {
      street: "789 Pine Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
    },
    info: {
      age: 20,
      occupation: "Marketing Manager",
      hobbies: ["Hiking", "Cooking", "Yoga"],
    },
  },
];

// const maping = people.filter((x) =>{
//     const personDetails = `Name : ${x.name} and I'm ${x.info?.age || 'N/A'} old`
//     console.log(personDetails);
//     return personDetails;
// })


const findMan = people.find((arg) =>{
    // const sentence = `I am ${arg?.info?.age == 29}`
    const logic = arg?.info?.age === 29
    return logic;
})
console.log(findMan.name);

// const identify = people.find((x) => x?.info?.age === 29)
// console.log(identify);
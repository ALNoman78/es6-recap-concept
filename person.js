const polapain = [
    { Name: "Abul", job: "sorkari", salary: 17000 },
    { Name: "Babul", job: "besorkari", salary: 25000 },
    { Name: "Kabul", job: "sorkari", salary: 21000 },
    { Name: "Habul", job: "besorkari", salary: 47000 },
    { Name: "Jabul", job: "sorkari", salary: 23000 },
    { Name: "Mabul", job: "besorkari", salary: 55000 },
];

// find peron details

const findMan = polapain.filter(
    (man) => (man.salary >= 20000 && man.job === "sorkari") || (man.salary > 40000 && man.job === "besorkari")
);
// console.log(findMan);
const lotary = Math.floor(Math.random()*findMan.length);

// file the person name

const personName = findMan[lotary].Name
console.log(personName);

//  find person name 

// const findPerson = (person) =>{
//     const son = person.filter((x) => (x.salary > 40000 && x.job === 'besorkari') || (x.salary >= 20000 && x.job === 'sorkari'))
//     const nameOfSom = son.map((x) => x.Name)
//     return nameOfSom
// }
// console.log(findPerson(polapain));
const students = [
{
    name: "mehedy bro",
    email: "mehedy@gamil.com",
    avg: 56,
    fiftyPercent: true,
    },
    { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
    { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
    { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
    { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
    { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
    {
        name: "jackie bro",
        email: "jackie@gamil.com",
        avg: 57,
        fiftyPercent: true,
    },
];

// function scicStudents (x){
//     for (const w of x) {
//         if(w.avg >= 48 && w.fiftyPercent === true){
//             console.log(w);
//         }
//     }
// }
// console.log(scicStudents(students));


// const filterMethod = students.filter((x) => x.avg >= 49 && x.fiftyPercent === true);
// console.log(filterMethod);

const findSCIC = (person) =>{
    const student = person.filter((x) => x.avg >= 49 && x.fiftyPercent === true)
    const mapName = student.map((n) => n.name)
    return mapName;
}
console.log(findSCIC(students));
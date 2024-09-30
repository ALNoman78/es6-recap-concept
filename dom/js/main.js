const people = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
      contact: {
        email: "john.doe@example.com",
      },
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
      },
      social: {
        twitter: "@johndoe",
      },
      hobbies: ["Coding", "Hiking", "Photography"],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      occupation: "Graphic Designer",
      contact: {
        email: "jane.smith@example.com",
        phone: "987-654-3210",
      },
      hobbies: ["Drawing", "Traveling"],
    },
    {
      id: 3,
      name: "Mark Johnson",
      age: 40,
      occupation: "Marketing Manager",
      contact: {
        email: "mark.johnson@example.com",
        phone: "123-456-7890",
      },
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60607",
      },
      hobbies: ["Running", "Golf"],
    },
];

// append their

const personList = document.getElementById('people-list');
// const personInformation = document.getElementById('person-info')
const renderPerson = (person) => {
    person.map((x) => {
        const li = document.createElement('li')
        li.classList.add('cursor-pointer', 'p-3' , 'font-medium')
        li.innerText = `${x.name}`
        personList.append(li)
        li.addEventListener('click', ()=>{
            // handlerPersonId(x.id);
            const e = x;
            const personInformation = document.getElementById('person-info');
            personInformation.classList.remove('hidden');
            document.getElementById('no-selection').classList.add('hidden')
            personInformation.innerHTML = `
                <h3 class = "font-bold text-2xl p-3" > Hello world ! </h3>
                <p>${x.name}</p>
                <p>${x.age}</p>
                <p>${x.occupation}</p>
                <p>${x?.address?.city || 'N/A'}</p>
                <p>${x?.hobbies?.map((hobby) => hobby)}</p>
            `
            console.log(personInformation);
            personInformation.append(e)
        })
        
    })
}

renderPerson(people)

// personInformation.innerHTML = `
//     <h3 class = "font-bold text-2xl p-3" > Hello world ! </h3>
//     <p>${people.name}</p>
// `

// const handlerPersonId = (id) => {
//     const person = people.find((x) => x.id === id)
//     personInformation.innerHTML = `
//         <h3 class = "font-bold text-2xl p-3" > Hello world ! </h3>
//         <p>${person.name}</p>

//     `
//     personInformation.append(person)
// }
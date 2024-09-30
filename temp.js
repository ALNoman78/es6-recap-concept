const students = {
    name : 'Noman ',
    roll : 580165,
    reg : 1502148788,
    department : 'Computer Science',
    subject : ['Data science', 'Networking','E-commerce']
}

const sentence = `My name is ${students.name} . my roll number = ${students.roll} . My Registration number is = ${students.reg}. I am studying ${students.department} . I read my all subject's is ${students.subject.map((x) => x).join(' ')} .`;

console.log(sentence)
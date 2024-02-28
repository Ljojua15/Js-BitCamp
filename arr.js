let mitArbeiter = [{
        "name": "John",
        "age": 30,
        "profession": "Engineer",
        "sex": "Male",
        "height": "6'0\"",
        "nationality": "American"
    },
    {
        "name": "Emily",
        "age": 25,
        "profession": "Teacher",
        "sex": "Female",
        "height": "5'6\"",
        "nationality": "Canadian"
    },
    {
        "name": "Michael",
        "age": 40,
        "profession": "Doctor",
        "sex": "Male",
        "height": "5'10\"",
        "nationality": "British"
    },
    {
        "name": "Maria",
        "age": 35,
        "profession": "Artist",
        "sex": "Female",
        "height": "5'8\"",
        "nationality": "Spanish"
    },
    {
        "name": "David",
        "age": 28,
        "profession": "Software Developer",
        "sex": "Male",
        "height": "5'11\"",
        "nationality": "American"
    },
    {
        "name": "Sophie",
        "age": 33,
        "profession": "Lawyer",
        "sex": "Female",
        "height": "5'7\"",
        "nationality": "French"
    },
    {
        "name": "Daniel",
        "age": 45,
        "profession": "Architect",
        "sex": "Male",
        "height": "6'1\"",
        "nationality": "German"
    },
    {
        "name": "Anna",
        "age": 29,
        "profession": "Nurse",
        "sex": "Female",
        "height": "5'5\"",
        "nationality": "Italian"
    },
    {
        "name": "James",
        "age": 32,
        "profession": "Marketing Manager",
        "sex": "Male",
        "height": "5'9\"",
        "nationality": "Canadian"
    },
    {
        "name": "Elena",
        "age": 27,
        "profession": "Journalist",
        "sex": "Female",
        "height": "5'6\"",
        "nationality": "Russian"
    },
    {
        "name": "Robert",
        "age": 38,
        "profession": "Accountant",
        "sex": "Male",
        "height": "5'10\"",
        "nationality": "Australian"
    },
    {
        "name": "Sophia",
        "age": 31,
        "profession": "Dentist",
        "sex": "Female",
        "height": "5'8\"",
        "nationality": "Greek"
    },
    {
        "name": "William",
        "age": 36,
        "profession": "Consultant",
        "sex": "Male",
        "height": "6'0\"",
        "nationality": "Irish"
    },
    {
        "name": "Olivia",
        "age": 26,
        "profession": "Graphic Designer",
        "sex": "Female",
        "height": "5'7\"",
        "nationality": "Swedish"
    },
    {
        "name": "Alex",
        "age": 42,
        "profession": "Professor",
        "sex": "Male",
        "height": "6'2\"",
        "nationality": "Dutch"
    },
    {
        "name": "Emma",
        "age": 34,
        "profession": "Engineer",
        "sex": "Female",
        "height": "5'9\"",
        "nationality": "Norwegian"
    },
    {
        "name": "Christopher",
        "age": 39,
        "profession": "Chef",
        "sex": "Male",
        "height": "5'11\"",
        "nationality": "Scottish"
    },
    {
        "name": "Isabella",
        "age": 28,
        "profession": "Writer",
        "sex": "Female",
        "height": "5'6\"",
        "nationality": "Portuguese"
    }
]

let oldWorker = mitArbeiter.filter((olderworker) => olderworker.age > 30 && olderworker.sex === 'Male')


let maleName = oldWorker.map((name, index) => name.name).touppercase





console.log(oldWorker);
console.log(maleName);
// Filter
var personalInfo = [
    {
        name: 'David',
        age: 20,
        isStudent: true
    },
    {
        name: 'Yossi',
        age: 45,
        isStudent: false
    },
    {
        name: 'Noam',
        age: 55,
        isStudent: true
    },
    {
        name: 'Ori',
        age: 15,
        isStudent: false
    },
    {
        name: 'Sagiv',
        age: 17,
        isStudent: true
    },
    {
        name: 'Dani',
        age: 34,
        isStudent: false
    },
    {
        name: 'Tal',
        age: 21,
        isStudent: true
    },
    {
        name: 'Shimon',
        age: 22,
        isStudent: false
    }
];
personalInfo.filter(checkStudent);
personalInfo.filter(checkAgeStudent);
function checkStudent(personalInfo) {
    if (personalInfo.isStudent == true) {
        console.log("Student: " + personalInfo.name);
    }
    else if (personalInfo.isStudent == false) {
        console.log("Not Student: " + personalInfo.name);
    }
}
function checkAgeStudent(personalInfo) {
    if (personalInfo.age >= 30) {
        console.log("Name: " + personalInfo.name + ", Age: " + personalInfo.age);
    }
    else if (personalInfo.age >= 30) {
        console.log("Name: " + personalInfo.name + ", Age: " + personalInfo.age);
    }
}

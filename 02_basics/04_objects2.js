// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "007bond"
tinderUser.name = "Kings"
tinderUser.isLoggedIn = false   

// console.log(tinderUser);

const regularUser = {
    email: "abcde@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kingshuk",
            lastname: "Mondal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1021,
        email: 'jbffbjkf@gmail.com'
    },
    {
        id: 6466,
        email: 'xkdjbizdjg@gmail.com'
    },
    {
        id: 9874,
        email: 'kjdghsdig@gmail.com'
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Complete JS",
    price: '999/-',
    courseInstructor: "kingshuk"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

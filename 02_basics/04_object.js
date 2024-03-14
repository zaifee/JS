const tinder = new Object(); //singleton obj
console.log(tinder); //return the empty paraenthsis

const tinderApp = {};
tinderApp.id = "12345"
tinderApp.name = "zaif"
tinderApp.isLoggedIn = "false"

// console.log(tinderApp);

const newRegisterUser = {
    email : "dfjskdf@yahoo",
    fullName:{
        userFullName:{
            firstName: "Mohd",
            lastName: "Nawaz"
        }
    }
}
console.log(newRegisterUser.fullName);

//if I want to reduce the nesting then use . and reduce the nesting 
console.log(newRegisterUser.fullName.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {5: "c", 6 : "d"};
const obj3 = Object.assign({}, obj1, obj2);
//line 27 wala tarika kam hi use hota hai 
const obj4 = {...obj1, ...obj2};
console.log(obj4);

//How the value comes from the database
//array of obj
const array1 = [
  {
    id: 1,
    name : "dkjdksf"
  },

  {
    id: 2,
    name : "dkjdksf"
  },

  {
    id: 3,
    name : "dkjdksf"
  }

]
array1[1].id 

console.log(tinderApp);
// console.log("very important method to convert the obj into the array");
// console.log(Object.keys(tinderApp));
// console.log(Object.values(tinderApp));
// console.log(Object.entries(tinderApp));

console.log(tinderApp.hasOwnProperty("isLoggedIn"));

//destructuring of objects

const courseName = {
    name : "JS in Hindi",
    courseInstructor: "Mohd Nawaz",
    payment : 1999   

}

courseName.courseInstructor = "zaif";
// console.log(courseName.courseInstructor);
// new syntax to do this  
const {courseInstructor : Instructor} = courseName
console.log(Instructor);

//Json format 
// {

//     "name": "hello",
//     "helloji": "238743",
//      "male": "Yes"

// };

//Json array format
[
    {

    }
]


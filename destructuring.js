let alpha = ['a', 'b', 'c', 'd'];
let beta = ['e', 'f', 'g', 'h'];

// let a = alpha[0];
// let b = alpha[1];

// Array Destructuring
    // Doesn't matter what this variable is called, It's going to start from the front and move it's way through each index. It will only print the ones that we make a variable for.

let [a,b,duh] = alpha;
console.log(a);
console.log(b);
console.log(duh);
console.log(`---------------`);


// This is how you can skip any variables in the array. Take the variable out but leave the commas.

let [x, ,z] = alpha;
console.log(x);
console.log(z);
console.log(`---------------`);

let [q, , , t] = alpha;
console.log(q);
console.log(t);
console.log(`---------------`);


// Spread Operator
    // grabs everything that hasn't been accounted for in the array. The only thing that is accounted for in the array below is the first variable.
    // The spread must be last in destructuring an array.

let [j,...theRest] = alpha;
console.log(j);
console.log(theRest);
console.log(`---------------`);

let [l, m,...n] = alpha;
console.log(l);
console.log(m);
console.log(n);
console.log(`---------------`);

    // Using the spread op in one variable, you can take 2 arrays and concat them together and make one array out of the one line.

let alphabeta = [...alpha, ...beta];
console.log(alphabeta);
console.log(`---------------`);

    // Used on a string it breaks every character into it's own letter.

let str1 = 'hello';
let str2 = 'world';
let hw = [...str1, ...str2];
console.log(hw)
console.log(`---------------`);


// Getting info from the person variable with dot notation.
let person = {
    fullName: 'Peter Parker',
    age: 32
}
let nameVar = person.fullName;
let ageVar = person.age;
console.log(nameVar);
console.log(ageVar);

// Destructuring way to get info from person variable.
    // This is a way to grab properties from the big variable and make the individual variables with the info

let {fullName,age} = person;
console.log(fullName);
console.log(age);
console.log(`---------------`);

let person2 = {
    names: 'Peter Parker',
    ages: 32,
    userName: 'ppboi',
    state: "Regret",
    zipCode: '12345',
    favoriteColor: 'yellow'
}
let person3 = {
    names: 'Bob Barker',
    ages: 62,
    userName: 'ItsBobBitch',
    state: "Confusion",
    zipCode: '12345',
    favoriteColor: 'green'
}

let {ages, names, userName, ...restOf} = person2;
console.log(ages);
console.log(names);
console.log(userName);
console.log(restOf);
console.log(`---------------`);

// Get the info from the object with dot notation
    // The variables in the beginning can be whatever you want because we are inputting the specific variable in the object with dot notation syntax
let getUserName = (names, userName) => {
    console.log(`${names}'s username is: ${userName}`);
}
getUserName(person2.names, person2.userName);
console.log(`---------------`);

// Same thing but with destructuring
    // Takes the curly backets in the variable in the beginning and looks in the specified objesct in the console.log.
let getBobsUserName = ({names, userName}) => {
    console.log(`${names}'s username is: ${userName}`);
}
getBobsUserName(person3);







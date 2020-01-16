// // Lightning Exercise 1: Given two options of data structures - array or object -
// //  which should you use? You need to represent a red 2015 Ford Mustang in your code.

// const car = {
//     color: "red",
//     year: 2015,
//     make: "Ford",
//     mode: "Mustang"
// };
// console.log(car);


// // Lightning Exercise 2: Given two options of data structures - array or object - 
// // which should you use? You need to store list of animal names in a shelter. The 
// // names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
// console.log(animalNames);


// // Lightning Exercise 3: Define an object for four family members, and put each object
// //  in an array named familyMembers. Each family member object that you create should
// //   have the same keys on them, but the values will be different

// const bob = {
//     age: 12,
//     nickname: "bobby diesel"
// };

// const jim = {
//     age: 22,
//     nickname: "jimmy diesel"
// };

// const tim = {
//     age: 32,
//     nickname: "timmy diesel"
// };

// const rob = {
//     age: 42,
//     nickname: "robby diesel"
// };

// const familyMembers = [bob,jim,tim,rob];
// console.log(familyMembers);

// // Lightning Exercise: Given the object below, output each of the values to the console
// //  using dot notation.

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height);
// console.log(wardrobe.manufacturer);
// console.log(wardrobe.contents);
// console.log(wardrobe.depth);
// console.log(wardrobe.width);

// wardrobe.material = "Cedar";
// console.log(wardrobe.material);

// // Lightning Exercises 1: Use dot notation to output all of the dimensions of the
// //  Empire State Building to the console.


// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }

// console.log(empireStateBuilding.stories);
// console.log(empireStateBuilding.height);
// console.log(empireStateBuilding.squareFeet);
// console.log(empireStateBuilding.eastWestLength);
// console.log(empireStateBuilding.northSouthLength);

// // Lightning Exercises 2: Use square bracket notation to output the remaining 5 
// // properties to the console. Create 5 variables first with the keys as their values.
// //  Use those variables to look up the values.

// const address = "adress";
// const constructionDate = "constructionDate";
// const cost = "cost";
// const owner = "owner";
// const architect = "architect";

// console.log(empireStateBuilding[address]);
// console.log(empireStateBuilding[constructionDate]);
// console.log(empireStateBuilding[cost]);
// console.log(empireStateBuilding[owner]);
// console.log(empireStateBuilding[architect]);



// // Lightning Exercise 1: Output the names of the part-time instructors followed by
// //  the names of the full-time instructors in the console.

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}


const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;
const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime;

for (let i =0; i <partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i]);
}
for (let i =0; i < fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i]);
}





// Lightning Exercise 2: Output only Andy and Zoe in the console.

const andy = fullTimeInstructors[4];
const zoe = partTimeInstructors[0];
console.log(andy,zoe);
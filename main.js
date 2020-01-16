// Lightning Exercise 1: Given two options of data structures - array or object -
//  which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
    color: "red",
    year: 2015,
    make: "Ford",
    mode: "Mustang"
};
console.log(car);


// Lightning Exercise 2: Given two options of data structures - array or object - 
// which should you use? You need to store list of animal names in a shelter. The 
// names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
console.log(animalNames);


// Lightning Exercise 3: Define an object for four family members, and put each object
//  in an array named familyMembers. Each family member object that you create should
//   have the same keys on them, but the values will be different

const bob = {
    age: 12,
    nickname: "bobby diesel"
};

const jim = {
    age: 22,
    nickname: "jimmy diesel"
};

const tim = {
    age: 32,
    nickname: "timmy diesel"
};

const rob = {
    age: 42,
    nickname: "robby diesel"
};

const familyMembers = [bob,jim,tim,rob];
console.log(familyMembers);

// Lightning Exercise: Given the object below, output each of the values to the console
//  using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width);

wardrobe.material = "Cedar";
console.log(wardrobe.material);


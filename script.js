const fruits = ["Mango", "Banana", "Orange", "Apple"];

fruits.sort();

console.log("Alphabetical: ", fruits);

fruits.sort((a , b ) => b.localeCompare(a));

console.log("Revarse Alphabetical :", fruits);

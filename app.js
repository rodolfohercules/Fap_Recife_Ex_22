
let booleanVariable;
let bigintVariable;
let stringVariable;
let symbolVariable;


console.log("Valores iniciais:");
console.log("booleanVariable:", booleanVariable);
console.log("bigintVariable:", bigintVariable);
console.log("stringVariable:", stringVariable);
console.log("symbolVariable:", symbolVariable);


booleanVariable = null;
bigintVariable = null;
stringVariable = null;
symbolVariable = null;

console.log("\nValores após atribuição nula:");
console.log("booleanVariable:", booleanVariable);
console.log("bigintVariable:", bigintVariable);
console.log("stringVariable:", stringVariable);
console.log("symbolVariable:", symbolVariable);


booleanVariable = true;
bigintVariable = 1234567890123456789012345678901234567890n;
stringVariable = "Hello, world!";
symbolVariable = Symbol("unique");


console.log("\nValores após atribuição dos tipos:");
console.log("booleanVariable:",typeof booleanVariable);
console.log("booleanVariable:",typeof booleanVariable);
console.log("bigintVariable:",typeof bigintVariable);
console.log("stringVariable:",typeof stringVariable);
console.log("symbolVariable:",typeof symbolVariable);


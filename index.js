// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
];
function destructivelyAppendCat(Ralph) {
    console.log(cats.push('Ralph'))
};
function destructivelyPrependCat(Bob) {
    console.log(cats.unshift('Bob'))
};
function destructivelyRemoveLastCat() {
    console.log(cats.pop())
};
function destructivelyRemoveFirstCat() {
    console.log(cats.shift())
};
function appendCat(Broom) {
    let newArray = [...cats]
    newArray.push('Broom')
    return newArray
}
function prependCat(Arnold) {
    let newArr = [...cats]
    newArr.unshift('Arnold')
    return newArr
}
function removeLastCat(name) {
    let newArray = [...cats];
    newArray.pop();
    return(newArray)
};
function removeFirstCat(name) {
    let newArray = [...cats];
    newArray.shift();
    return(newArray)
};
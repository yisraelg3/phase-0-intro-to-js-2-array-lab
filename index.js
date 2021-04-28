// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push('Ralph')
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const cats2 = [...cats, "Broom"]
    return cats2
}
function prependCat(name) {
    const cats2 = ["Arnold",...cats]
    return cats2
}
function removeLastCat() {
    return cats.slice(0,2);
}
function removeFirstCat() {
    return cats.slice(1);
}
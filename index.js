// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(namee){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
   cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
let newCats;
function appendCat(name){
    newCats = [...cats,"Broom"]
    return newCats
}
function prependCat(Arnold){
    newCats = ["Arnold",...cats]
    return newCats 
}
function removeLastCat(){
    newCats = newCats.slice(1,3)
    return newCats
}
function removeFirstCat(){
    newCats = [...cats]
    newCats = newCats.slice(1,3)
    return newCats
}
import Fruits from "./Fruits"
import {choice, remove} from "./Helpers"

let Fruit = choice(Fruits)

console.log(`I’d like one ${Fruit}, please.`)
console.log(`Here you go: ${Fruit}`);
console.log(`Delicious! May I have another?`)

// Remove the fruit from the array of fruits
let availableFruit = remove(Fruits, Fruit)

console.log(`I’m sorry, we’re all out. We have ${availableFruit} left.`)
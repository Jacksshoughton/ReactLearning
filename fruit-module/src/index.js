import fruits from './foods';
import {choice, remove} from './helpers';

let chosenFruit = choice(fruits);
console.log("I'd like one " + chosenFruit + ", please");
console.log("Here you go: " + chosenFruit);
console.log("Delicious!! Can I have another?");
let remaining = remove(fruits, chosenFruit);
console.log(`I'm sorry we are all out!! We have ${remaining.length} left`);
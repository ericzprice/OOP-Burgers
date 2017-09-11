
var FoodItem = function(name, calories, isVegan, isGlutenFree){
    this.name = name
    this.calories = calories
    this.isVegan = isVegan
    this.isGlutenFree = isGlutenFree
}

FoodItem.prototype.stringify = function(){
    // var vegan = ''
    // var glutenFree = ''
    // if ( !this.isVegan ) {
    //     vegan = 'not '
    // }
    // if ( !this.isGlutenFree ) {
    //     glutenFree = 'not '
    // }
    return `${this.name} has ${this.calories} calories. It is ${this.isVegan ? '' : 'not'} vegan, and it is ${this.isGlutenFree ? '' : 'not'}gluten free. `
}


var mahiFilet = new FoodItem('Mahi burger', 250, false, true)
var blackBean = new FoodItem('Black bean burger', 150, true, true)
var tempeh = new FoodItem('Tempeh burger', 200, true, false)

var Plate = function(name, price, description, foodItems){
    this.name = name
    this.price = price
    this.description = description
    this.foodItems = foodItems
}
Plate.prototype.stringify = function(){
    var output = `${this.name}: $${this.price}. ${this.description}. It contains: `
    for ( var i = 0; i < this.foodItems.length; i++ ) {
        output += this.foodItems[i].stringify()
    }
    return output
}

var burgerIngredients = [tunaPatty, lettuce, bun]
var theTunaBurger = new Plate('Mahi burger on poppy seed bun', 8.99, "Made from actual tuna, no lies!", burgerIngredients)

var tomato = new FoodItem('Black bean patty on gluten free bun', 40, true, true)

// note that we don't pass in STRINGS for the foodItems, but we pass in the objects themselves
var salad = new Plate('salad', 7.99, 'Tempeh burger with tahini dressing on pretz', [lettuce, tomato])

// console.log(theTunaBurger.stringify())
// console.log(salad.stringify())

var Menu = function(name, plates){
    this.name = name
    this.plates = plates
}
Menu.prototype.stringify = function(){
    var output = this.name + ': '
    for ( var i = 0; i < this.plates.length; i++ ) {
        output += this.plates[i].stringify()
    }
    return output
}

var happyHour = new Menu('Happy Hour', [theTunaBurger, salad])

// console.log(happyHour.stringify())

var Restaurant = function(name, description, menu){
    this.name = name
    this.description = description
    this.menu = menu
}
Restaurant.prototype.stringify = function(){
    return `${this.name}: ${this.description}. Check our our menu! ${this.menu.stringify()}`
}

var aliceAndBobsBurgers = new Restaurant("Alice and Bob's Burgers", "The only burger joint in town.", happyHour)

console.log(aliceAndBobsBurgers.stringify())


// // FoodItem
// //     - name       : string
// //     - calories   : number
// //     - vegan      : boolean
// //     - glutenFree : boolean
// //
// // For example, and object returned from the FoodItem constructor might look like this:
// //
// // ```javascript
// var FoodItem = function(name, calories, vegan, glutenFree){
//     // code goes here
// }
// var bacon = new FoodItem('bacon', 100, false, true)
// console.log(bacon)
// /* This object should print to your console:
// {
//     name: 'bacon',
//     calories: 100,
//     vegan: false,
//     glutenFree: true
// }
// // */
// function hamburger(adjective) {
//   this.adjective = adjective;
//   this.speak = function(line) {
//     print("The ", this.adjective, " rabbit says '", line, "'");
//   };
// }
//
// var killerRabbit = new Rabbit("killer");
// killerRabbit.speak("GRAAAAAAAAAH!");
//
//
// function Rabbit(adjective) {
//   this.adjective = adjective;
//   this.speak = function(line) {
//     print("The ", this.adjective, " rabbit says '", line, "'");
//   };
// }
//
// var killerRabbit = new Rabbit("killer");
// killerRabbit.speak("GRAAAAAAAAAH!");
//
// FoodItem.prototype.stringify = function(){
//     // code goes here
// }
// console.log(bacon.stringify())
// /* Something like this should print to the console:
// Bacon has 100 calories, is not vegan, and is gluten free.
// */

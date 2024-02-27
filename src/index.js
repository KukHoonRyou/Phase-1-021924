//Data 
const inventory = [
  {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.00,
    reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    inventory: 10,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 2,
    title: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    price: 45.75,
    reviews: [{userID: 15, content:'good way to learn JQuery'}],
    inventory: 2,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 36.00,
    reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
    inventory: 8,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 4,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 25.50,
    reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
    inventory: 0,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
  },
  {
    id: 5,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 6.00,
    reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
    inventory: 7,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
    id: 6,
    title: 'Learn Enough JavaScript to Be Dangerous',
    author: 'Michael Hartl',
    price: 24.00,
    reviews: [{userID: 50, content:'pretty good'}],
    inventory: 5,
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'
  },
  {
    id: 7,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    price: 49.95,
    reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID: 20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
    inventory: 20,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
  }
]

//✅ Review variables (let, const)
//✅ Review strings
//✅ Review math
//✅ Review if/else
//✅ Review arrays?
//✅ Review objects?

//✅ 1. Create hello world using REGULAR functions
// running `helloWorld()` invokes the function thus running the logic
// running `helloWorld` will just print out the written logic (the function definition) without running the logic

//HOISTING DIFFERENCES
//function definitions are hoisted to the top (I can invoke them before I see the written logic)
//console.log(formatPriceFunctionDefinition(1234.28394))
//arrow functions are not hoisted to the top (I cannot invoke them until after I see the definition)
//console.log(formatPriceArrowFunction(3.2523))


// you can put a string directly as an argument helloWorld('Rachel')
// or put in a variable that evaluates to a string
// myName = 'Rachel'
// helloWorld(myName)
function helloWorld(){
  //"Hello World " + name 
  return "Hello World"
}
//✅ 2. For Easley's bookstore, create formatPrice(price)
// 3.3333333 -> '$3.33'
function formatPriceFunctionDefinition(price) {
  // round out the price to 2 decimal places
  // turn the price into a string
  // add the '$'
  // return the new string
  fixedPrice = price.toFixed(2)
  //return '$' + fixedPrice
  return `$${fixedPrice}`
}

//✅ 3. Make an arrow function version of formatPrice
// const formatPriceArrowFunction = function(price){
//   fixedPrice = price.toFixed(2)
//   return `$${fixedPrice}`
// }

const formatPriceArrowFunction = (price) => {
  fixedPrice = price.toFixed(2)
  return `$${fixedPrice}`
}

//✅ 4. WE DO: create a blurb() function that accepts a book as an argument and logs a message in the following format:

const oneBook = {
  id: 1,
  title: 'Eloquent JavaScript: A Modern Introduction to Programming',
  author: 'Marjin Haverbeke',
  price: 10.023542350,
  reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
  inventory: 10,
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
}
const twoBook = {
  id: 2,
  title: 'JavaScript & JQuery: Interactive Front-End Web Development',
  author: 'Jon Duckett',
  price: 45.72352355,
  reviews: [{userID: 15, content:'good way to learn JQuery'}],
  inventory: 2,
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
}
//'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'
const blurb = (book) => {
  // return book.title + ' by ' + book.author + ' is on sale for ' + formatPriceArrowFunction(book.price)
  return `${book.title} by ${book.author} is on sale for ${formatPriceArrowFunction(book.price)}`
}

//✅ 5. Call formatPrice on an array of prices

//✅ 5a. Create an array
const prices = [3, 2.3, 29.832, 3.33333]

//✅ 5b. Use a for loop to iterate over prices
//[0...4] 
for(let i = 0; i < 4; i++) {
  //console.log(`i is ${i}, prices[i] is ${prices[i]}`)
}

//✅ 5c. Use .forEach to iterate over prices
//el => element 
// i => index 
// let forEachReturn = prices.forEach((el, i) => {
//   console.log(`i is ${i}, prices[i] is ${el}`)
// })


//✅ 5d. Use .map to iterate over prices
//original array (prices) does not get mutated
let mapReturn = prices.map((el, i) => {
  //original element gets replaced with the return value
  return formatPriceFunctionDefinition(el)
})

//✅ 5e. using .map, for each book in inventory, return blurb(book)
//output: ['Eloquent JavaScript: A Modern Introduction to Programming is on sale for $10.00', ...]

let inventoryBlurbs = inventory.map((el, i) => {
  //el represents one book in inventory
  
  //blurb(el) will spit out one string
  console.log(el)
  return blurb(el)
})

const numbers = [1, 2, 3, 4, 5, 6]
//[10, 20, 30, 40, 50, 60]
const timesTen = numbers.map((el, i) => {
  return el * 10
})

const colors = ["red", "blue", "yellow", "green"]
//["!red!", "!blue!", "!yellow!", "!green!"]
const exclamationColors = colors.map((el) => {
  return "!" + el + "!"
})

const numbersTwo = [6, 8, 10, 13]
//[12, 16, 20, 26]
const timesTwo = numbersTwo.map((el) => {
  return el * 2
})


//✅ 6. Create a version of myMap that uses a for loop to mimic .map
//input: array, callback function
//output: a new array

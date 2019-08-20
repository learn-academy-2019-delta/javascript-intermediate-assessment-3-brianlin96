// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
getFib = (num) => {
  if(num<2){
    return [1]
  } else if (num<3) {
    return [1,1]
  }
  let arr = getFib(num-1)
  arr.push(arr[num-2]+arr[num-3])
  return arr
}
console.log(getFib(10));


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
oddChecker = (arr) =>{
  let newArr = arr.filter(el=>el%2!=0 && typeof el ==="number")
  return newArr
}
console.log(oddChecker(fullArr1));
console.log(oddChecker(fullArr2));


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["a", "t", "l", "e", "d"]
// Expected output: ["d", "e", "l", "t", "a"]
reverseArr = (arr) =>{
  let newArr = arr.reverse()
  return newArr
}
console.log(reverseArr(originalArray1));
console.log(reverseArr(originalArray2));


// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

multTwo = (arr) =>{
  let newArr = arr.map(el=>el*2)
  return newArr
}



// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3
letterCounter = (str) =>{
  let arr = str.split('')
  let newArr = arr.filter(el=>el=="l"||el=="L")
  console.log(newArr);
  return newArr.length
}
console.log(letterCounter(ourString));


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "llamas"
// Expected output: “am”
middleLetter = (string) =>{
  let arr = string.split('')
  if(arr.length%2==0){
    return (arr[(arr.length/2)-1]+arr[(arr.length/2)])
  } else if(arr.length%2!==0) {
    return (arr[Math.floor(arr.length/2)])
  }
}
console.log(middleLetter(middleLetters1));
console.log(middleLetter(middleLetters2));



// // 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
class Sphere{
  constructor(radius){
    this.radius=radius
  }
  getSurfaceArea = () =>{
    return 4*Math.PI*(this.radius**2)
  }
}
let sphere1 = new Sphere(2)
let sphere2 = new Sphere(4)
let sphere3 = new Sphere(6)
console.log(sphere1.getSurfaceArea());
console.log(sphere2.getSurfaceArea());
console.log(sphere3.getSurfaceArea());




// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
let {doors, transmission} = myCar.specs
console.log(doors);
console.log(transmission);



// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

let numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
accumSum = (arr) =>{
  if(arr.length==0){
    return []
  } else if (arr.length==1){
    return [arr[0]]
  }
  let sum = accumSum(arr.slice(0, arr.length-1))
  sum.push(sum[sum.length-1]+arr[arr.length-1])
  return sum
  
}
console.log(accumSum(numbersToAdd1));
console.log(accumSum(numbersToAdd2));
console.log(accumSum(numbersToAdd3));

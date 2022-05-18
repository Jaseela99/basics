//array

const  alphabet = ["a","b","c","d"]
const number = [1,2,3,4]
//destructuring array
const [a,b,...rest] = alphabet
//rest is the rest parameter which compresses the individual values in to array
console.log(a,b,rest)
//combining two arrays we use spread operator ,which clones the array and combines them
const newArray = [...alphabet, ...number]

const sumAndMultiply =(a,b) =>{
    return [a+b,a*b]
}
const [sum,multiply ] = sumAndMultiply(2,3)
console.log(sum,multiply)


//object

const personOne = {
    name:"john",
    age:30,
    
}

const personTwo = {
    name:"jane",

    address:{
        city:"pune",
        state:"maharashtra"
    }
}
//if we have no food category we can use default value
const {name,food="watermelon",city} = personOne
console.log(name,food)

//when we combine it overwrites first object with second object and if there is no property in second object it will not be overwritten
const newPerson = {...personOne,...personTwo}
console.log(newPerson)

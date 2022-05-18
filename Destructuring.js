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

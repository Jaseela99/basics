const string = "Hello, World!";
//between forward slashes are called a regex
const regex = /Hello/;
//test method  returns a boolean if the regex pattern exists in our string
const isExisting = regex.test(string);
console.log(isExisting);


/e+/ //one or more es - quantifier

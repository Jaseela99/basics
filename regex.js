const string = "Hello, World!";
//between forward slashes are called a regex
const regex = /Hello/;
//test method  returns a boolean if the regex pattern exists in our string
const isExisting = regex.test(string);
console.log(isExisting);


// /e+/ one or more es - quantifier
// /e*/ zero or more es - quantifier
// /ea?/ optional a - quantifier
// /e../ it matches with e and then 2 characters except for the newlines
// /\./ matches all fullstop - escaped character
// /.\./ first dot matches any character and second one represents fullstop
// /[fc]at/   []-matches any character in character set and it matches either fat or cat
// /[a-zA-Z]at/  []-matches any character from a-z or A-Z in character set also at
// /(cat|dog)/  ()-matches either cat or dog -capturing group
// /^H/ -beginning of string
// /\d/ matches all digits  
// /\D/ matches all non-digits
// /\w/ matches all word characters
// /\w{3,5}/ matches 3to 5 word characters
// /\w{3,}/ matches 3 or more word characters
// /\W/ matches all non-word characters 
// /\s/ matches all whitespace characters
// /\S/ matches all non-whitespace characters
// /\b/ matches all word boundaries
// /\B/ matches all non-word boundaries
// /\d{3}/ matches 3 digits
// /\d{3,}/ matches 3 or more digits
// /\d{3,5}/ matches 3, 4 or 5 digits
// ?= - matches a group after main expression without including it in the result
// ?! - cannot match after main expression



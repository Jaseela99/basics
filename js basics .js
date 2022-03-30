
 

//var name= '26'
//console.log(isNaN (name))
//console.log(Number(name))

//var s = '123'
//console.log(Number(s))

//var p= [1,2,3,4,5]
//console.log(p[3])
//console.log(p.length)
//console.log(p.splice(1,4))



//var user = {
    //firstname : 'Jaseela',
    //lastname : 'A',
    //age : 22,
     //others :{
        //gender : 'female'
    //}, 
    
        //phone :['9447417490','9207692623']


       
    

//}
//console.log(user)
//console.log(user.age)
//console.log(user.others.gender)
//console.log(user.phone[1])

//var a = 1
//var b = a
//a =2 
//console.log(b)


//function add( a,b){
    //return a+b
//}
//console.log(add(1,2))
//console.log("jaseela"+"  "+"a")

//var MyName = {

    //firstname  : "jaseela",
    //lastname   : "jaleel",
    //myfullname : function() {  
            //console.log(this.firstname + " " + this.lastname)
       // }
    //}
//console.log(Myname.myfullname)

    //var num = 10
    //if(num===10) {
       // console.log('The number is 10')
    //} else {
        //console.log('The number is not 10')
    //}

    //var fruits = ['apple','banana','orange']
    //for (var i=0 ; i< fruits.length; i++) {
        //console.log(i)
        //console.log(fruits [i])
    //}
///arun sridher objects in js

    //console.log("helloworld")
     //var a=10
    
     
      //if (a=>10) {
          //console.log ("a is 10"),
          //console.log("helloworld")
    //} 


     //{var var1 ="var1",
      //let let1 = "var2"
      //console.log ("var1",var1)
      //console.log("var2",let1)
    //}
      //console.log ("var1",var1)
      //console.log("var2",let1)
     //var b =11
     //console.log("b is",b)


     //constructing objects

//object lierals
      /* var user={
         firstName :"james",
         lastName: "bond ",
         fullname : function(){
             return this.firstName+" "+ this.lastName; //this refers to user object
         },
         id:"007"
      
     }
     console.log(user) */
    // user.id ="001"
     
    
//this keyword
/* function print(){
    let name = "jose";
    console.log(this.name)   //here print is in global context so this refers to global object
}
print() */

 
 /* function print(){
    let name = "jose";
    console.log(this.name)
 } */


 //bind call apply
 /*function printDetails()
 {
      console.log("Text1",this.text1);
     console.log("Text2",this.text2);
     console.log("Text3",this.text3); 
     console.log(`${text1}``${this.firstName}``${this.lastName}``${text2}``${this.id}``${text3}`)
 }printUserDetails=printDetails.bind(user);           //it bins the function to user
 printUserDetails("welcome to soal","ur id is","have a good day");
 printDetails.call(user,"welcome to soal","ur id is","have a good day"); //in call first we use the object name then the details
 printDetails.apply(user,[
     "welcome to soal",
     "ur id is",
     "have a good day"]); */

     //constructor function starts with uppercase
     
     /* function User(firstName,lastName,id){
       this.firstName=firstName;
       this.lastName=lastName;
       this.id=id;
     }
     let user= new User("jaseela","a","006") //without new keyword we cant create new user in window object
     console.log(user) */
//class
     /* class User{
         constructor(firstName,lastName,id){
        this.firstName=firstName;
        this.lastName=lastName;
        this.id=id;
      }
      fullName(){
          return this.firstName+this.lastName
      }
var user1= new User("jaseela","a","006") 
     console.log(user1) */


     //console.log (2+2)
//console.log (2+"2", typeof (2+"2"))
//console.log(2+"2"+2)
//console.log(2+2+"2"+2)
//console.log(2+2+"2"+2+2)
//console.log(2+"2"+2+"2"+2+2)

//var name= 'jaseela'
//console.log(name,typeof name)
//console.log(Number(name))

//var a
//console.log(a,typeof a)

//var c= null
//console.log(c,typeof c)

//console.log(typeof (typeof name))
//console.log(typeof(typeof age))
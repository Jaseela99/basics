#! /usr/bin/bash             

#Echo command
#echo hey people

#variables :uppercase,letters,numbers and underscores

#NAME="jaseela"
#echo "my name is $NAME"
#echo "my name is ${NAME}"

#user input
#read -p "enter your name:" NAME
#echo  "hello $NAME"

#conditionals
#NAME="jaseela"
#if ["$NAME"=="jaseela"]
#then 
#echo "you are jasee"
#else
#echo "you are not jasee"
#fi

#comparison
<<coment
NUM1= "2"
NUM2="4"
if ["$NUM1" -gt "$NUM2"]
then 
echo "jaseela"
else 
echo "$NUM1"
fi
coment

<< comparison
val -gt
val -lt
val -eq
val -ne
val -ge
val -le
comparison

<<file 
-d true if file is a directory
-e true if file exists
-f true if provided string is a file
-g true if group id is set on afile
-r true if file is readable
-s true if file has a non zero size
-u true if user id is set on a file
-w true if file is writable
-x true if file is executable
file
#for loops
<< forloop 
NAMES =" jasee jaseela jc"
for NAME in NAMES
do 
echo "hello"
done
forloop

#function
<< func
function SayHello(){
    echo "hello"
}
SayHello()
func
<<parameter
function greet(){
    echo "i am $1and i am $2"
 }
 greet "jasee" ,"22"
parameter

#create folder and write in a file
<<create

mkdir"hello"
touch "hello/world.txt"
echo "hello">>"hello/world.txt"
echo "created hello/world.txt"
create
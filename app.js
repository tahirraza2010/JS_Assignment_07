// Chapter 31 - 34 (Date &amp; Time)
// Q1
// var dObj = new Date()
// console.log(dObj)
// Q2
// var dObj = new Date()
// var dStr=dObj.toString()
// console.log(dStr);
// Q3
// var day = new Date().getDay()
// console.log(day)
// Q4
// var day = new Date().getDay()
// var dayName=["Sunday","Monady","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(dayName[day])
// Q5
// var dObj = new Date()
// console.log(dObj)
// Q6
// var day =new Date("31 December 2020").getDay()
// var dayName=["Sunday","Monady","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(dayName[day])
// Q7
// var day =new Date("2 Feb 1992").getDay()
// var dayName=["Sunday","Monady","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(dayName[day])
// Q8
// var time = new Date(1980, 0, 1).getTime()
// alert(time);
// Q9
// var someDate = new Date();
// someDate.setFullYear(2025); 
// console.log(someDate);
// Q10
// function changeMonthToJanuary(date) {
//     date.setMonth(0); 
//     return date;
// }

// var myDate = new Date(2023, 5, 10);  
// var updatedDate = changeMonthToJanuary(myDate);
// console.log(updatedDate);  

// Q11
// var date = new Date().getDay("Monday")
// console.log(date)
// Q12
// function changeTime(time,newMinite){
// var date = new Date(time)
// date.setMinutes(newMinite)
// return date;
// }
// var currentTime = new Date()
// var newTime = prompt("Enter a minite")
// var updatedTime = changeTime(currentTime,newTime)
// console.log(updatedTime)
// Q13
// function changeTime(time,newHour){
// var date = new Date(time)
// date.setHours(newHour)
// return date;
// }
// var currentTime = new Date()
// var newTime = prompt("Enter a Hour")
// var updatedTime = changeTime(currentTime,newTime)
// console.log(updatedTime)
// Q14
// function ageCalculator(){
//     var birthYear = prompt("Enter your age");
//     var currentYear = new Date().getFullYear();
//     var age = currentYear - birthYear;
//     return age;
// }
// var userAge = ageCalculator();
// alert("Your birth year is: " + userAge)


// Chapter 35 - 37 (Functions)
// Q1
// function a (){
//     alert("Function call....")
// }
// a()
// Q2
// function askName(){
//     var username= prompt("Enter your name ")
//     alert("Hello " + username+"!")
// }
// askName()
// Q3
// function greetUser() {
//     console.log("Hello, welcome!");
// }
// function showDateTime() {
//     var currentDateTime = new Date();
//     console.log("Current date and time: " + currentDateTime);
// }
// function callFunctions() {
//     greetUser();      
//     showDateTime();   
// }
// callFunctions();
// Q4
// function name(){
//     var username= prompt("Enter your name ")
//     alert("Hello " + username+"!")
// }
// Q5
// function concat(a, b, c) {
//     var myVar = a + " " + b + " " + c;  
//     return myVar;
// }

// var myVarNew = concat("Hello", "World", 123);  
// console.log(myVarNew);  
// Q6
// function concatinate(a,b) {
// var myVar = a + " " + b ;  
// return myVar;
// }
// var newVar= concatinate("Hellow ","World")
// console.log(newVar);
// Q7
// function concat(a, b, c) {
//     var myVar = a * b * c;  
//     return myVar;
// }
// var myVarNew = concat(1,2,3);  
// console.log(myVarNew);
// Q8
// function arr (arrNum){
//     var arrNum = [1,2,3,4,5];
//     return arrNum;
// }
// var newArr= arr(arrNum = [1,2,3,4,5])
// console.log(newArr);
// Q9
// function add(a, b) {
//     var myVar = a + b;  
//     return myVar;
// }
// var myVarNew = add(20,30);  
// console.log(myVarNew);
// Q10
// function arr (arrNum){
//     var arrNum = [1,2,3,4,5];
//     return arrNum;
// }
// var newArr= arr(arrNum = [1,2,3,4,5])
// console.log(newArr);
// Q11
// function add(name) {
// var add = name;
// return add;
// }
// var newAdd=add("Tahir")
// console.log(`hellow ${newAdd}!`);
// Q12
// function concat(a, b, c) {
//     var myVar = `${a} ${b}  ${c}`;  
//     return myVar;
// }
// var myVarNew = concat("Mohammad","Tahir","Raza");  
// console.log(myVarNew);
// Q13
// function date(){
//     var date = new Date()
//     date =date.setFullYear(2025)
//     return date;

// }
// var newDate =date()
// console.log(newDate);
// Q14
// function ageCalculator(){
//     var birthYear = prompt("Enter your age");
//     var currentYear = new Date().getFullYear();
//     var age = currentYear - birthYear;
//     return age;
// }
// var userAge = ageCalculator();
// alert("Your born on: " + userAge)
// Q15
// function isWordInArray(word, array) {
//     return array.includes(word); 
// }
// var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var result = isWordInArray('raza', namesArray); 
// console.log(result);  
// Q16
// function repeatvarter(varter) {
//  for(var i=1;i<=10;i++){
// console.log(varter);

// }

// }
// repeatvarter("a"); 
//  Q17
// function array(array,revirse){
//     var array =   ["a","b","c","d","e",];
//     var revirse=""
    
//     for (var i = array.length - 1; i >= 0; i--) {
//         revirse+=array[i];
// }
// return revirse;
// }
// var newArr=array();
// console.log(newArr);

// Chapter 38 (Local vs. Global

//     Variables)
// Q1
// function showLocalVariable() {
//     var localVar = "I am a local variable"; 
//     console.log(localVar); 
// }

// showLocalVariable();  

// Q2
// var globalVar = "I am a global variable";  

// function accessGlobalVariable() {
//     console.log(globalVar);  
// }

// accessGlobalVariable(); 

// Chapter 39, 40 (Switch Statements)
// Q1
// var userinput = prompt("Enter a day of week")
// userinput=userinput.slice(0,3).toLowerCase()
// switch(userinput){
// case "mon":
//     alert("Monday is working..")
//     break
// case "tue":
//     alert("Tuesday is working..")
//     break
// case "wed":
//     alert("Wednesday is working..")
//     break
// case "thu":
//     alert("Thursday is working..")
//     break
// case "fri":
//     alert("Friday is working..")
//     break
// case "sat":
//     alert("Saturday is rest day..")
//     break
// case "sun":
//     alert("Sunday is family day..")
//     break
// default:
//     alert("Invalid input")
// }
// Q2
// var cityName = prompt("Enter your city name:");

// switch(cityName.toLowerCase()) {
//     case 'karachi':
//         alert("Welcome to Karachi!");
//         break;
//     case 'lahore':
//         alert("Welcome to Lahore!");
//         break;
//     case 'islamabad':
//         alert("Welcome to Islamabad!");
//         break;
//     case 'peshawar':
//         alert("Welcome to Peshawar!");
//         break;
//     default:
//         alert("City not recognized. Please enter a valid city.");
// }

// Chapter :35 (FUNCTION)
// Q1
// function date(){
//     var date = new Date();
//     console.log(date);
// }
// date();
// Q2
// function fullName(){
//   var firstName=  prompt("Enter your First Name");
//   var lastName=  prompt("Enter your Last Name");
//   alert(`Hellow ${firstName} ${lastName}`)

// }
// fullName()
// Q3
// function sum(a,b){
//     var sum = a+b;
//     return sum;
// }
// var num1= +prompt("Enter your First Num");
// var num2= +prompt("Enter your Last Num");
// var addValue= sum (num1,num2);
// console.log(addValue);
// Q4
// function calculator (num1,num2,oprator){
// var result;
// switch(oprator){
//     case '+':
//         result = num1 + num2;
//         break;
//         case '-':
//             result = num1 - num2;
//             break;
//             case '*':
//             result = num1 * num2;
//             break;
//             case '/':
//                 result = num1 / num2;
//                 break;
//                 case '%':
//             result = num1 % num2;
//             break;
//                 default:
//                     result = "Invalid Oprator";
//                     break;
//                     }
//                     return result;
// }
// var num1= +prompt("Enter your First Num");
// var num2= +prompt("Enter your Last Num");
// var oprator= prompt("Enter your Oprator (+, -, *, /, %)")
// var addValue= calculator (num1,num2,oprator);
// document.write(`${num1} ${oprator} ${num2} = ${addValue}`)
// Q5
// function concat(num1, num2) {
//     var myVar = num1 * num2 ;  
//     return myVar;
// }
// var num1= +prompt("Enter your First Num")
// var num2= +prompt("Enter your Secund Num")

// var myVarNew = concat(num1,num2);  
// console.log(myVarNew);
// Q6
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5)); 
// Q7
// function displayCounting(start, end) {
//     var result = "";
//         for (var i = start; i <= end; i++) {
//             result += i + "<br>";

//         }
//         return result;
//     }
// var num1 =+prompt("Enter Your First Num")
// var num2 =+prompt("Enter Your Last Num")


// var newVar = displayCounting(num1, num2);
// document.write(`<h1>Counting</h1>${newVar}`);
// Q8
// function calculateHypotenuse(base, perpendicular) {
//     function square(num) {
//         return num * num;
//     }

//     var hypotenuseSquared = square(base) + square(perpendicular);
//     var hypotenuse = Math.sqrt(hypotenuseSquared); 

//     return hypotenuse;
// }

// var base = 3;
// var perpendicular = 4;

// var hypotenuse = calculateHypotenuse(base, perpendicular);
// console.log("The hypotenuse is: " + hypotenuse);
// Q9
// function calculatArea(witdh,hight){
// var cal =witdh*hight;
// return cal;
// } 
// var newCal= calculatArea(5,10)
// console.log( "Area (arguments as values): "+newCal);
// Q10


// function palindrome(word){
//     var reversed = "";
// for(var i =word.length -1;i>=0;i--){
//     reversed += word[i];
// }
// if(word===reversed){
//     return("Word is palindrome");
// }
// else{
//     return("Word is not palindrome");
// }
// }
// var value = palindrome(prompt("Enter a word"));
// console.log(value);
// Q11
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = words[0];
//     for (var i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// var str = "I am a programmer";
// var longestWord = findLongestWord(str);
// console.log("The longest word is: " + longestWord);
// Q12
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = words[0];
//     for (var i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// var str = "Web Development Tutorial";
// var longestWord = findLongestWord(str);
// console.log("The longest word is: " + longestWord);
// Q13
// function countvarterOccurrences(str, varter) {
//     var count = 0; 

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === varter) {
//             count++;
//         }
//     }
    
//     return count; 
// }

// var string = 'JSResourceS.com';
// var varter = 'o';

// var result = countvarterOccurrences(string, varter);
// console.log(`The varter '${varter}' occurs ${result} times in the string '${string}'.`); 
// Q14
// function calcCircumference(radius) {
//     var  circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     var  area = Math.PI * radius * radius;
//     console.log("The area is " + area);
// }

// calcCircumference(5);  
// calcArea(5); 


// Chapter :(43-48) (EVENTS)
// Q1
// function clicked(message){
//     alert("Onclick Call...")

// }
// clicked()
// Q2
// function showAlert(mobileName) {
//     alert(`Thanks for purchesing a phone from us.... \n ${mobileName}` );
// }
// function devareRow(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }
// Q5

// chapter :(38-42) (FUNCTIONS, SWITCH

//     STATEMENTS, WHILE... DO-
//     WHILE LOOPS)
// Q1
// function power(a, b) {
//     return Math.pow(a, b);
// }

// console.log(power(2, 3));

// Q2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLeapYear(2024));


// Q3
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var S = calculateS(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// console.log(calculateArea(3, 4, 5));
// Q4
// function average(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function percentage(totalMarks, maxMarks) {
//     return (totalMarks / maxMarks) * 100;
// }

// function mainFunction(marks1, marks2, marks3) {
//     var avg = average(marks1, marks2, marks3);
//     var totalMarks = marks1 + marks2 + marks3;
//     var percent = percentage(totalMarks, 300); 
//     console.log("Average:", avg);
//     console.log("Percentage:", percent + "%");
// }

// mainFunction(85, 90, 80); 

// Q5
// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(customIndexOf("hello", "e"));

// Q6
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(removeVowels("This is a test sentence.")); 


// Q7


// Q8
// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// function mainDistanceConversion(km) {
//     console.log("Meters:", toMeters(km));
//     console.log("Feet:", toFeet(km));
//     console.log("Inches:", toInches(km));
//     console.log("Centimeters:", toCentimeters(km));
// }

// mainDistanceConversion(5); 
// Q9
// function calculateOvertime(hoursWorked) {
//     if (hoursWorked > 40) {
//         return (hoursWorked - 40) * 12;
//     } else {
//         return 0;
//     }
// }

// console.log(calculateOvertime(45)); 


// Q10
// function distributionAmmount(amount){
// var hundred =Math.floor(amount/100);
// amount = amount%100
// var fifty = Math.floor(amount/50);
// amount = amount%50
// var ten = Math.floor(amount/10);
// amount = amount%10
// return `Hundreds:${hundred}, Fifties:${fifty}, Tens:${ten}`;

// }
// console.log(distributionAmmount(1230));






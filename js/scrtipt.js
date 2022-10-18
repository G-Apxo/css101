
// შეყტობინების გამოტანა
console.log("გამოთვალე გამოსახულება")
//არითმეტიკული ოპერაცია
var a = undefined

console.log(a)

var b =  13 + "13" ;
console.log(b) // 1313


//String სტრიქონს (ტექსტი)
var companyName = "13"
console.log(typeof companyName) //stirng
// number რიცხივითი მნიშვნელობა
var stundets = 17
console.log(typeof stundets) //number
//Boolean  ლოგიკური მნიშვნელობა True ან False
var isLecture = true;
console.log(typeof isLecture) //bolean
//undefined მნიშვნელობა არააქვს მინიჭებული

//null  განუსაზღვრელი მნიშვნელობა

// Nan not a number

//შეკრება

// var x = 10;
// var y = x + 50; // 60

//გამოკლება
var x= 10; 
var y = x - 50;
console.log(y)
//გაყოფა
var x= 10; 
var y = x / 50;
console.log(y)
//გამრავლება

var x= 10; 
var y = x * 50;
console.log(y)


// ნაშთი გაყოფისას
var x = 43;
var y = 7 ;
var z = x % y;

console.log(z) // 1

var x = 5;
var z = x++; // 6


 
var income = 100; 
var strIncome = "100";

var result1 = income == strIncome;
var result2 = income === strIncome;

console.log(result1)
console.log(result2)
 
var income = 100; 
var percent = 10 ;
var resutl = income > 50 && percent<8; //და კავშირი
console.log(resutl) //false

var income = 100; 
var isDeposit = true ;
var resutl = income > 50 || isDeposit ==false; //ან კავშირი
console.log(resutl)


var income = 100;
var result1 = !(income > 50 );
console.log (result1) 



var FirstName = "ტომი"

var LastName = "ჯერი" 

var fullname = FirstName + " " + LastName;

console.log(fullname)




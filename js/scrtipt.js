
// შეყტობინების გამოტანა
// console.log("გამოთვალე გამოსახულება")
// //არითმეტიკული ოპერაცია
// var a = undefined

// console.log(a)

// var b =  13 + "13" ;
// console.log(b) // 1313


// //String სტრიქონს (ტექსტი)
// var companyName = "13"
// console.log(typeof companyName) //stirng
// // number რიცხივითი მნიშვნელობა
// var stundets = 17
// console.log(typeof stundets) //number
// //Boolean  ლოგიკური მნიშვნელობა True ან False
// var isLecture = true;
// console.log(typeof isLecture) //bolean
//undefined მნიშვნელობა არააქვს მინიჭებული

//null  განუსაზღვრელი მნიშვნელობა

// Nan not a number

//შეკრება

// var x = 10;
// var y = x + 50; // 60

//გამოკლება
// var x= 10; 
// var y = x - 50;
// console.log(y)
// //გაყოფა
// var x= 10; 
// var y = x / 50;
// console.log(y)
// //გამრავლება

// var x= 10; 
// var y = x * 50;
// console.log(y)


// // ნაშთი გაყოფისას
// var x = 43;
// var y = 7 ;
// var z = x % y;

// console.log(z) // 1

// var x = 5;
// var z = x++; // 6


 
// var income = 100; 
// var strIncome = "100";

// var result1 = income == strIncome;
// var result2 = income === strIncome;

// console.log(result1)
// console.log(result2)
 
// var income = 100; 
// var percent = 10 ;
// var resutl = income > 50 && percent<8; //და კავშირი
// console.log(resutl) //false

// var income = 100; 
// var isDeposit = true ;
// var resutl = income > 50 || isDeposit ==false; //ან კავშირი
// console.log(resutl)


// var income = 100;
// var result1 = !(income > 50 );
// console.log (result1) 



// var FirstName = "ტომი"

// var LastName = "ჯერი" 

// var fullname = FirstName + " " + LastName;

// console.log(fullname)


// var strSum = prompt ("შეიყავნეთ ანაბარის თანხა 1000");
// var strPercent = prompt ("შეიყვანეთ საპროცენტო განაკვეთი");

// var sum = parseInt(strSum);
// var percent = parseInt(strPercent);

// sum = sum + sum * percent / 100;

// alert("პროცენტი დარიცხვის შემდეგ თანხა იქნება" + sum)


// var people = ["Tom" , "Alice" , "Sam"]

// people[0] = "Bob";

// console.log(people[0]) 


// var numbers1 = [1,2,3,4,5]; //ერთგანზომლიებიან

// var numbers2 = [[0,1,2], [3,4,5]] //ორგანზომილებიანი

// var people = [
//     ["Tom" , 25 , false], //0
//     ["Alice" , 26 , false], //1
//     ["Sam" , 27 , true] //2
// ]
// console.log(people[0][0]) //Tom
// console.log(people[2][2]) //true


// if ოპერატორი

// var income = 100; //საათში
// if (income > 150) {
//     var message= "კაი ხელფასი"
//     alert(message)
// }
// else{
//     alert("არ შეიშვება ოჯახში")
// }


// var income = 4001;
// if (income < 2000) {
//     alert("საშუალoze dabali")
// }
// else if (income >= 2000 && income <=4000) {
//     alert("sashualo xelpasi")
// }
// else {
//     alert("kai xelpasi")
// }


// var income = 200 ; 
// switch(income) {
//     case 100:
//         console.log("საშუალoze dabali")
//         break;
//     case 200 :
//         console.log("sashualo xelpasi")
//         break;
//     case 300 :
//         console.log("kai xelpasi")
//         break;
// }

// var people = ["Tom", "Alice" , "Bolb", "Sam"]
// console.log(people)


// for ([მრიცხველის ინიცილიზაცია], [პრიობა] [მრიცხველის შეცვლა])

// var people = ["Tom", "Alice" , "Bolb", "Sam"]
// for(var i = 0; i < people.length; i ++){
//    document.write(people[i] + "</br>")
// }
// // for (ინდექსი in მასივი)
// var people = ["Tom", "Alice" , "Bolb", "Sam"]
// for(var index in people){
//     document.write(people[index])
// }

// var arr = [4,5,6,7,15,45,76];
// console.log(arr.reverse())



// function ფუნქციის სახელი ([პარამეტრი]) {
//      ინსტრუქცია
// }

// function display() {
//     document.write('es aris js pirveli punqcia')
//   }
//   display();

// var display = function () {
//     document.write('es aris js pirveli punqcia')
// }
// display ();

// function goodMorning() {
//     document.write("dila mshvidobis")
// }
// function  goodEvning() {
//     document.write("sagamo mshvidobis")
//   }

//   var message = goodMorning();

//   message();

//   message = goodEvning();

//   message();


// function display(x) {
//     var z = x * x; 
//     document.write(x + z);
//  };
// display(5);


// function display (x,y) {
//     if ( y === undefined )
//     y=x;
//     var z = x*y;
//     document.write( x + "გამრვალებული" + y + "უდრის" + z );
// }
// // display(6) // 0, undefined, false , 36 , 12 , 
// display(6,4)


// function display() {
//     var z = 1;
//     for (var i = 0; i < arguments.length; i++)
//         z *= arguments[i];
//     document.write(z);
// }
// display(6) // 6
// display(6,4) // 24
// display(6,4,5) // 120


// var x = 5; 

// function displaySquare () { 
//     var z = x * x;
//     document.write(z)
//  }
//  displaySquare()

// function displaySquare () {
//     var z  = 10 ;
//     console.log(z)
// }
// displaySquare()
// console.log(z) //შეცდომა რადგანაც z არ არსებობს


// "use strict";
// function bar() {
//     foo = "25";
// }
// bar();
// console.log(foo);


// function getFactorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     else {
//         return n * getFactorial( n - 1 );
//     }
// }
// var result = getFactorial(4);

// console.log(result) //24


// var resutl = 4 * getFactorial(3)
// var resutl = 4 * 3 * getFactorial(2)
// var resutl = 4 * 3 * 2 * getFactorial(1)
// var resutl = 4 * 3 * 2 * 1 * getFactorial(0) //24 


function display(){
    console.log("დილა მშვიდობისა");
    display = function(){
        console.log("დღე მშვიდობისა");
    }
}

var displayMessage = display;
display() // დილა მშვიდობისა
display() // დღე მშვიდობისა"
displayMessage() // 
displayMessage() //

// Hoisting

console.log(foo) // undefined

var foo = "giorrgi"


var c = a * b ;

var a = 5;

var b = 3;

console.log(c) // NaN


var user = {} ;

user.name = "Tom"
user.age = 25;

console.log(user)
var user = {
    name : "Tom",
    age : 26,
    display : function() {
        console.log(this.name);
    }
}
user.display();
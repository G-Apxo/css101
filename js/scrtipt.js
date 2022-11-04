
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


// function display(){
//     console.log("დილა მშვიდობისა");
//     display = function(){
//         console.log("დღე მშვიდობისა");
//     }
// }

// var displayMessage = display;
// display() // დილა მშვიდობისა
// display() // დღე მშვიდობისა"
// displayMessage() // 
// displayMessage() //

// // Hoisting

// console.log(foo) // undefined

// var foo = "giorrgi"


// var c = a * b ;

// var a = 5;

// var b = 3;

// console.log(c) // NaN


// var user = {} ;

// user.name = "Tom"
// user.age = 25;

// console.log(user)
// var user = {
//     name : "Tom",
//     age : 26,
//     display : function() {
//         console.log(this.name);
//     }
// }
// user.display();



// var user = new Object();
//თუ ბაზიდან მოცემული ინფორმაცია არის პირდაპირ ობიექტი
// var user = {}
// user.name = "Tom";
// user.age = 25;

//     user.display = function() {
//         console.log(user.name);
//         console.log(user.age)
//     }

// user.display();
// თუ ბაზიდან მოცემული ინფორმაცია არის მასივი
// var user = {}
// user["name"] = "Tom";
// user["age"] = 25;

//     user["display"] = function() {
//         console.log(user.name);
//         console.log(user.age)
//     }
//     user["display"]();


// var user = {
//     name : "Tom",
//     age : 25,
//     display : function() {
//         console.log(this.name);
//         console.log(this.age)
//     }
// }
// user.display();

// var user = {} 
// user.name = "Tom";
// user.age = 25;

// user.display = function() {
//     console.log(this.name);
//     console.log(this.age)
// }
// console.log(user.name) // Tom
// delete user.name; // წაშლა
// console.log(user.name) // undefined


// var country = {
//     name: "Georgia",
//     language : "Georgian",
//     capital : {
//         name : "Tbilisi",
//         population : 1500000,
//         year : 1784
//     }
// };

// console.log(country.capital.name) // Tbilisi /წერტილის ნოტაცია
// console.log(country["capital"]["population"]) // მივართავთ სინტაქსიტ
// console.log(country.capital["population"]) // შერეული სახით


// var country = {
//     name:"შვეიცარია",
//     languages : ["გერმანული", "ფრანგული", "იტალიური"],
//     capital :{
//         name : "ბერნ",
//         population :1500000 
//     },
//     cities : [
//         {name: "ციურიხი",  population :45128132 },
//         {name: "ჟენევა",  population :31612376123 },
//         {name: "ბაზელი",  population :56471261 }
//     ]
// }

// // country.langues ყველა ელემეტნი
// document.write("<h3>შვეიცარიის ოფიცალური ენებეია</h3>")
// for (var i = 2; i <= country.languages.length; i--) {
//     document.write(country.languages[i] + "</br>")
// }

// var user = {}
// user.name = "Tom";
// user.age = 25;

// user.display = function() {
//     console.log(this.name);
//     console.log(this.age)
// }
// var hasNameProps = "name" in user;
// document.write(hasNameProps)

// function createUser(pName, pAge) {
//     return{
//         name:pName,
//         age: pAge,
//         displayInfo : function(){
//             document.write("saxeli" + this.name + "asaki" +this.age)
//         }
//     };
// };

// var tom = createUser("Tom" , 26);
// tom.displayInfo()

//Constuctors ობიექტის კონსტრუქტორები

// var tom = new Object();

// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("saxeli" + this.name + "asaki" +this.age)
//     }
// }
// var tom = new User("Tom" , 26)

// document.write(tom.name)

// Car type constructor
// function Car(mName, mYear) {
//     this.name = mName;
//     this.year = mYear;
//     this.getCarinfo = function() {
//         document.write("model" + this.name + "gamoshvebis weli" + this.year)
//     }
// }
// Car : [
//     {name: "lada",  year :1800 },
// ]
// User type
// function User (pName, pAge){
//       this.name = pName;
//       this.age = pAge;
//       this.driveCar = function(car) {
//         document.write(this.name + "atarebs" + car.name + car.year)
//       };
//       this.displayInfo = function(){
//         document.write("saxeli" + this.name + "asaki" + this.age)
//       }
// }
// // User : [
// //     {name: "Tomi",  age :26 },
// // ]

// var tom = new User("Tomi",26);
// tom.displayInfo();


// var lada = new Car ("lada", 1800);
// tom.driveCar(lada)


// prototye თვისება
// function User (pName, pAge){
//     this.name = pName; //ესენი რომლებიც იცვლება
//     this.age = pAge; //არა გლობალური
//     this.displayInfo = function(){
//       document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// //Hello არის მეთოდი
// User.prototype.hello = function(){
//     document.write(this.name + "says hello world") //გლობალური
// }
// //maxAge არის თვისება
// User.prototype.maxAge = 110; //გლობალური

// var tom = new User("Tom", 26);
// tom.hello()
// document.write(tom.maxAge)
// var giorgi = new User ("Giorgi", 24)
// giorgi.hello()
// document.write(giorgi.maxAge)


// ინკაფსულაცია

// function User (pName, pAge){
//     this.name = pName;
//     this.age = pAge; 
//     this.displayInfo = function(){
//       document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// var tom = new User("Tom" ,25)
// tom.name = 34 ;
// document.write(tom.name)

// function User (name, age) {
//     this.name = name;
//     var _age = age; //getter
//     this.displayInfo = function () {
//         document.write("saxeli" + this.name + "asaki" + _age)
//     };
//     this.getAge = function () {
//         return _age;
//       }
//             //setter
//       this.setAge = function (age) {
//         if (typeof age === "number" && age > 0 && age <110) {
//             return _age = age;
//         }
//         else{
//             alert("invalid parameters")
//         }
//       }
// }

// var tom = new User("Tom", 26);
// document.write(tom._age) // undefined

// document.write(tom.getAge()) // 26

// tom.setAge(32);

// document.write(tom.getAge());// 32

// tom.setAge("53") // invalid parameters  53 


//მემკვიდრეობა

// მომხმარებლის კონსრუქტორი
function User (name,age) {
    this.name = name;
    this.age = age;
    this.go = function () {
        document.write(this.name + "goes")
      };
    this.displayInfo = function () {
        document.write("saxeli" + this.name + "asaki" + this.age);
    }
}

User.prototype.maxage = 110;

//მომუშავის კონსტრუქტორი

function Employee(name,age,company) {
    User.call(this,name,age);
    this.company = company;
    this.displayInfo = function() {
        document.write("saxeli" + this.name + "asaki" + this.age + "company" + this.company);
    }
  }

  Employee.prototype = Object.create(User.prototype);

  var tom = new User("Tom" , 26)
  var bill = new Employee ("bill", 25 , "Google");

//   tom.go()
//   bill.go()
  tom.displayInfo()
  bill.displayInfo()


//   agruments : პარამეტრების მასივი
//   length : განსაზაღვრავს ფუნქციას რასაც ელოდება ფუნქცია
//   caller : განსაზღვრავს ფუნცციას რომლემაც წამოიწყო ფუნქციის შესრულება
//   name :ფუნქციის სახელი
//   prototype :ფუნქციის პროტოტიპი


// function add (x,y) {
//     return  x + y;
//   }
//   var result = add.call(this,3,8)
//   document.write(result)

  function add (x,y) {
    return  x + y;
  }
  var result = add.apply(null, [3,8]);
  document.write(result)

  this.alert("Global alert")


  "use strict";
  function foo() {
    var bar = "bar2"
    console.log(this.bar)
    }

    var bar = "bar1"
    foo() //
    var users = new Array()
    var people  = [ "test", ]
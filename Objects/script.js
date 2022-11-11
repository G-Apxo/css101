// ობიექტი Date და მისი მეთოდები

// const currentDate = new Date();
// document.write(currentDate)

// const myDate = new Date(0)
// document.write(myDate)

// const myDate = new Date(2022,10,8,20,18,47)
// document.write(myDate)

// getDate() // აბრუნებს თვის რიცხვს
// getDay() // აბრუნებს კვირის დღეს (ათვლა 0 დან 0-კვირა 6-შაბათი)
// getMonth() // აბრუნებს თვის ნომებრს (ათვლა იწყება 0 დან)
// toDateString() // აბურნებს სრულ თარიღს სტრინგის სახით
// toTimestring() // აბრუნებს სრილ დროს
// getHours() // აბუნრებს საათსი (0 23 ჩათვლით)
// getMinutes() // აბრუნებს წუთებს (0 59)
// getSeconds() //აბრუნებს წამებს (0 59)
// getMilliseconds() //აბუნრებნს მილიწამებს (0 - 999)



// const d = new Date();
// const day = d.getMilliseconds();
// document.write(day) 


const days = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი", "ხუთშაბათი","მცხეთობა","შაბათი"]
const months = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი",
                "ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"];

const myDate = new Date()
const fullDate = "დღეს" + myDate.getFullYear() + "წლის" + myDate.getDate() + " "
+ months[myDate.getMonth()] + "," + days[myDate.getDay()];

// document.write(fullDate)



// let welcome;
// const myHour = new Date();
// const hour = myHour.getHours();
// const minutes = myHour.getMinutes()
// const seconds = myHour.getSeconds()

// if (minutes < 10) {
//     minutes = "0" + minutes;
// }
// if (seconds < 10) {
//     seconds = "0" + seconds;
// }

// if (hour < 12) {
//     welcome = "დილამშვიდობის"
// }
// else if (hour < 17) {
//     welcome = "დღე მშვიდობის"
// }
// else{
//     welcome = "ღამე მშვიდობის"
// }
// document.write(welcome + "მიმდინარე დროა" + hour  + ":" + minutes + ":" + seconds);



const x = -25
// document.write(Math.abs(x)) // 25

const y = 37
// document.write(Math.abs(y)) // 37

const max = Math.max(19,45) // 45

const min = Math.min(33,24,28,56) //24

const celi1 = Math.ceil(19.19) // 20
console.log(celi1)

const negativeCeli = Math.ceil(-5.9) // -5

const floor = Math.floor(9.4) // 9 
console.log(floor)


const z = Math.round(5.5)//
console.log(z)

const rnd = Math.random()
console.log(rnd)

const names = [
    "apxo",
    "daviti",
    "tornike",
    "ana",
    "salome",
    "giorgi"
];
const names2 = [
    "apxo",
    "daviti",
    "tornike",
    "ana",
    "salome",
    "giorgi"
];
// const mynames = names[Math.floor(Math.random() * names.length)]
// const mynames2 = names2[Math.floor(Math.random() * names.length)]
// document.write(mynames + " " + mynames2)

const kvadrati = Math.pow(2,3) // 8

const square = Math.sqrt(9)

const sin = Math.sin(90); //
console.log(sin)

const a  = Math.log(1) // 0


var name = "Tom"

var name = new String("Tom")

const hello = "Hello world! goodbye world"
const key = "world"

const firstPos = hello.indexOf(key);
const lastPost = hello.lastIndexOf(key);
document.write(firstPos)
document.write(lastPost)
const header = document.getElementById("demo")
function getInnerHtml() {
  header.innerHTML =`
  <h1>test</h1>
  <p>rame</p>
  <p>rame</p>
  <p>rame</p>
  <ul>
    <li>test</li>
    <li>test</li>
    <li>test</li>
  </ul>
  `
  }
  getInnerHtml();

// DOM document object model

// BOM browser object model

// var headerElement  = document.getElementById('header');

// document.write("სათაურის ტექსტი" + headerElement.innerHTML);

// var pElements = document.getElementsByTagName('p');

// for (var i =0; i < pElements.length ; i++ ){
//     document.write("paragraph text" + pElements[i].innerText + "<br/>")
// }

const darkmode = () => {
    const element = document.body;
    element.classList.toggle('dark-mode')
    const x = document.querySelector(".chooser");
    x.style.display = "none";
}
const whitemode = () => {
    const element = document.body;
    element.classList.toggle('light-mode')
    const x = document.querySelector(".chooser");
    x.style.display = "none"; 
}


function myMove() {
        let id = null
        const elem = document.getElementById("animate")
        let pos = 0;
        id = setInterval (frame ,5)
    function frame () { 
        if (pos == 350) {
            clearInterval(id)
        }
        else{
            pos ++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

        }
     }
  }
console.log("scrip cargado!");

// // Libs ---------------
// // -----------------------
// // JQuery
// import $ from "jquery";
// // Uuid
import { v4 } from "uuid";

// // Imports Others ---------------
// // ------------------------------
import {showAlert} from './test-helpers/messages';
import * as Dog from './test-helpers/dog';
import * as Addition from './test-helpers/addition';
import { a } from './test-helpers/test'

// import printMe from "./print.js"; // unused
// import { cube } from './math.js';
// import menu from './menu.js'; // unused

// // https://webpack.github.io/docs/hot-module-replacement.html#api
// if (module.hot) {
//     module.hot.accept();
// }

//JS Vanilla
document.getElementById('btn-alert')
    .addEventListener('click',showAlert)


// // jQuery
$('#btn-jquery').click(()=> alert(v4()));

 
const dog = new Dog.default();
dog.bark(); // 'bark!'

console.log(Addition.sum(1,2));
console.log(Addition.substract(3,1));
console.log(Addition.divide(6,3));

// test
console.log(a())

// 给 app 标签再加一个 div 并且类名为 box
// var app = document.getElementById('app')
// var div = document.createElement('div')
// div.className = 'box'
// app.appendChild(div)


//////////////////////////////// ////////////
// function component(){
//     var element = document.createElement('pre');
//     element.innerHTML = [
//       'hello webpack',
//       '5 cubed is equal to ' + cube(5)
//     ].join('\n\n')
  
//     return element;
//   }
//   document.body.appendChild(component());
  
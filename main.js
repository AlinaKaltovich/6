/*https://learn.javascript.ru/array*/

/*var userPassword=prompt('Введите пороль');
const originPassword='12345';

if (userPassword===originPassword){
    alert('ok');
} else {
    alert('wrong password');
}

*/

/*
let task1 = parseInt (prompt ('Введите первую цифру' , ''));
let task2 = parseInt (prompt ('Введите вторую цифру' , ''));

alert(task1 + task2);
*/

//масив
/*
let arr=[1,2,3];
for(let i=0; i<arr.length; i+=1){
    console.info (arr[i]+1);
}
*/


/*
let arr = prompt ('Введите текст' ['']);


for (let i = 0; i < arr.length; i+=1);

var elem = arr.pop();
{console.info (last);}




/*
{
    console.info (arr.length);
}
*/
/*
let arr = prompt ('Введите число');
for (var i=0; i<arr.length; i+=1);

arr.join ();
alert (arr.lenght);



}*/



// var tablist = document.querySelectorAll ('.item');
// var tab = document.querySelector ('.menu');
// console.log (tablist, tab);



// for (var i=0; i<tablist.length; i++){
//     tablist[i].onclick = active;
// }
//     function active(){
//       this.classList.add('active');  
//     }



    // function act() {
    // tablist[i].classList.add('active');
    // }

// tad.addEventListener ('click', 
//     function (event) {event.target
//     HTMLDataListElement.indexof(event.target)
// ;})


// var item, subitem;

// window.onload = function(){
//     item = document.getElementsByClassName('item');
//     subitem = document.getElementsByClassName('subitem');
//     hidenSubitem();
// }

// function hidenSubitem() {
//     for (var i=0; i<subitem.length; i++){
//         subitem[i].classList.remove('active');
//         subitem[i].classList.add('hidden');    
//     }
// }

// document.getElementsByClassName('wrap').onclick = function(event){
//     var target = event.target;

//     if(target.className == 'item'){
//         for (var i=0; i<item.length; i++){
//             if(target == item [i]) {
//                 visiblSubitem(i);
//                 break;
//             }
//         }
//     }
// }
// function visiblSubitem() {
//     if(subitem[i].classList.contains('active')){
//         hidenSubitem(0);
//         subitem[i].classList.remove('hidden');
//         subitem[i].classList.add('active');

//     }
// }


// document.addEventListener('DOMContentLoaded', f1);

// function f1(){

// var wrap = document.querySelector ('.wrap');
// var item = document.querySelectorAll ('.item');
// var subitem = document.querySelectorAll ('.subitem');

// var show = function () {
//     subitem.classList.remove('.hidden');
//     subitem.classList.add('.ative');
// }

// item.addEventListener('click', function (evt) {
//     show();
// })


// console.log(subitem);
// }


// document.addEventLinstenr
// DOMContentLoaded
// querySelector
// classList


//L3

// Индекс массы тела


// var massa = prompt('Enter your weight');
// massa = parseInt (massa);
// var height = prompt('Enter your heigh');
// height = parseInt (height);


// console.log(massa, height);

// var r = massa/(height*height);
// console.log(r);

// if (r<=16){
//     alert ('Выраженный дефицит массы тела'); 
// }
// else if (r>18.5){
//     alert ('Недостаточная (дефицит) масса тела');
// }
// else if (r>24.99){
//     alert ('Норма');
// }
// else if (r>30){
//     alert ('Избыточная масса тела (предожирение)');
// }
// else if (r>35){
//     alert ('Ожирение');
// }
// else if (r>40){
//     alert ('Ожирение резкое');
// }
// else {
//     alert ('Очень резкое ожирение');
// }






// document.addEventListener('DOMContentLoaded', f1);

// function f1(){
//     var btnRes = document.querySelector ('#btn-res');

//     btnRes.addEventListener ('click', f2);
    
//     function f2(){
//         var mas = document.querySelector ('#width').value;
//         mas = parseInt (mas);
//         var h = document.querySelector ('#height').value;
//         h = parseInt (h);
//         var recomend = document.querySelector ('#recomend');
//         var r = mas/(h*h);
//         var rec
//         console.log(r);

//         if (r<=16){
//             rec = 'Выраженный дефицит массы тела';
//         }
//         else if (r>=18.5){
//             rec = 'Недостаточная (дефицит) масса тела';
//         }
//         else if (r>=24.99){
//             rec = 'Норма';
//         }
//         else if (r>=30){
//             rec = 'Избыточная масса тела (предожирение)';
//         }
//         else if (r>=35){
//             rec = 'Ожирение';
//         }
//         else if (r>=40){
//             rec = 'Ожирение резкое';
//         }
//         else {
//             rec = 'Очень резкое ожирение';
//         }

//         recomend.innerHTML = rec;    
//     }
// }

// Lesson 3

// var user1 = {
//     "name" : "A",

// };

// var user2 = {
//     "name" : "D",
    
// };

// var user3 = {
//     "name" : "N",
    
// };

// var user4 = {
//     "name" : "S",
    
// };

// var us = [user1, user2, user3, user4];

// for(var i=0; i<us.length; i++){
//     us.sort(user.name);
//     console.log (user);
// }


var b = [];
var a = [0, 2, 5, 7, 3, 2, 5, 5, 6];

for(var i=0; i<a.length; i++){

   if (b.indexOf( a[i] ) == -1){
       b.push(a[i]);
   }
}
console.log (b);














// function init(){
//     f1
//     f2
//     f3
// }

// document.addEventListener('DOMContentLoaded', init){}

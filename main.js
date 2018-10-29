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


var item, subitem;

window.onload = function(){
    item = document.getElementsByClassName('item');
    subitem = document.getElementsByClassName('subitem');
    hidenSubitem();
}

function hidenSubitem() {
    for (var i=0; i<subitem.length; i++){
        subitem[i].classList.remove('active');
        subitem[i].classList.add('hidden');    
    }
}

document.getElementsByClassName('wrap').onclick = function(event){
    var target = event.target;

    if(target.className == 'item'){
        for (var i=0; i<item.length; i++){
            if(target == item [i]) {
                visiblSubitem(i);
                break;
            }
        }
    }
}
function visiblSubitem() {
    if(subitem[i].classList.contains('active')){
        hidenSubitem(0);
        subitem[i].classList.remove('hidden');
        subitem[i].classList.add('active');

    }
}




// document.addEventLinstenr
// DOMContentLoaded
// querySelector
// classList
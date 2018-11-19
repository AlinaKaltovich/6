// http://code.mu/javascript
// https://developer.mozilla.org/ru/docs/Web/html/Element/input/radio




// Календарь

  

function calendar(){
    function calTime() {
        var date = new Date(); 
        var time = document.querySelector ('.time');
        time.innerText = date.toLocaleTimeString() + '  pm';
        setTimeout (calTime, 1000);
    }

    function calDateNow() {
        var date = new Date(); 
        var dateNow = document.querySelector ('.date');
        dateNow.innerText = date.toDateString();
    }

    function monthNow() {
        var date = new Date(); 
        var monthNow = document.querySelector ('.nav');
        monthNow.innerText = date.toLocaleString('en', {month: 'long'}) + ' ' + date.toLocaleString('en', {year: 'numeric'});
    }
        
    function numberStart() {
        
        var number = document.querySelectorAll ('.number');
        
        for (i=0; i<number.lenght; i++){
        var date = new Date();        
        number[i].innerText = date.getDate();
        
        number.pop();
        }
        console.log (number);
    }




calTime();
calDateNow();
monthNow();
numberStart();
}

document.addEventListener('DOMContentLoaded', calendar());



// calendar();
// var nav = document.querySelector ('.nav');



// const arrDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// //Слайдер с кнопкой

// // document.getElementById('next').onclick = sliderBtn;
// // var next=0;

// // function sliderBtn(){
// //     var wrapper = document.getElementById('wrapper');
// //     next = next - 150;

// //     if (next < -300){
// //         next = 0;
// //     }
// //     wrapper.style.left = next + 'px';
   
// // }








function tabShow(){

    var wrap = document.querySelector ('.wrap');
    var item = document.querySelectorAll ('.item-title');
    var subitem = document.querySelectorAll ('.subitem');

    wrap.addEventListener ('click', function(evt){  
        for (let i=0; i<item.length; i++){
            subitem [i].classList.add("hidden");
            subitem [i].classList.remove("active");

            if(evt.target === item[i]){
                subitem [i].classList.add("active");
                subitem [i].classList.remove("hidden");
                item[i].style.fontWeight = "bold";
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', tabShow());
// wrap.addEventListener ('click', f2, false);

// function f2(e){
    
//     for (var i=0; i<subitem.length; i++){
        
//         if (item == EventTarget){
//         subitem.classList.remove(".hidden");
//         subitem.classList.add(".ative");   
      
//     }
//         }

//     }


// }







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






document.addEventListener('DOMContentLoaded', f1);

function f1(){
    var btnRes = document.querySelector ('#btn-res');

    btnRes.addEventListener ('click', f2);
    
    function f2(){
        var mas = document.querySelector ('#width').value;
        mas = parseInt (mas);
        var h = document.querySelector ('#height').value;
        h = parseInt (h);
        var recomend = document.querySelector ('#recomend');
        var r = mas/(h*h);
        var rec
        console.log(r);

        if (r<=16){
            rec = 'Выраженный дефицит массы тела';
        }
        else if (r>=18.5){
            rec = 'Недостаточная (дефицит) масса тела';
        }
        else if (r>=24.99){
            rec = 'Норма';
        }
        else if (r>=30){
            rec = 'Избыточная масса тела (предожирение)';
        }
        else if (r>=35){
            rec = 'Ожирение';
        }
        else if (r>=40){
            rec = 'Ожирение резкое';
        }
        else {
            rec = 'Очень резкое ожирение';
        }

        recomend.innerHTML = rec;    
    }
}



// var b = [];
// var a = [0, 2, 5, 7, 3, 2, 5, 5, 6];

// for(var i=0; i<a.length; i++){

//    if (b.indexOf( a[i] ) == -1){
//        b.push(a[i]);
//    }
// }
// console.log (b);




function createMenu() {
    // numNewEl = parseInt (numNewEl);

    var ul = document.createElement('ul');

        ul.classList.add('menu'); 

        

        var title = document.createElement ('h2');
        title.innerText = 'Введите количество пунктом меню: ';
        title.style = 'color: #6939ee';
        document.body.appendChild(title);

        var input = document.createElement ('input');
        document.body.appendChild(input);

        var btn = document.createElement ('button');
        btn.innerText = 'Создать';
        document.body.appendChild(btn);

        var btnClear = document.createElement ('button');
        btnClear.innerText = 'Очистить';
        document.body.appendChild(btnClear);

        document.body.appendChild(ul);

        btn.addEventListener ('click', function() {
            createList(+input.value);
        });

        btnClear.addEventListener ('click', function() {
            ul.remove();
        });
         
        var link;
        var li;

    function createList(n) {
        for (let i=0; i<n; i++){
            
            li = document.createElement('li');
            li.classList.add('m-item');
            ul.appendChild(li);
            
            link = document.createElement('a');
            link.classList.add('item-link');
            link.innerText = 'Item';
            li.appendChild(link); 


            var btnRemove = document.createElement ('span');
            btnRemove.classList.add('btn-remove');
            btnRemove.innerText = 'x';
            li.appendChild(btnRemove);
        }   

            btnRemove.addEventListener ('click', function(evt) {
                for(var j=0; j<btnRemove.length; j++){
                    if(evt.target === btnRemove[j]){
                    ul.removeChild (li);
                    }
                }

            });
    }   
}


document.addEventListener('DOMContentLoaded', createMenu());

    
 
    // btnClear.addEventListener ('click', function() {
    //     ul.removeChild (li);
    // });

 






// function init(){
//     f1
//     f2
//     f3
// }

// document.addEventListener('DOMContentLoaded', init){}

function searchSearch() {
    var searchDiv = document.querySelector('.search');
    var search = document.querySelector('.search-input');
    var searchBtn = document.querySelector('.search-btn');
    var resultsWrap = document.querySelector('.search-form');
    console.log(resultsWrap);
    var choice = document.querySelector('.choice');

    var arrArr = 'aa, aah, aahed, aahing, aahs, aal, aalii, aaliis, aals, aardvark, aardvarks, aardwolf, aardwolves, aargh, aarrgh, aarrghh, aarti, aartis, aas, aasvogel, aasvogels, ab, aba, abac, abaca, abacas, abaci, aback, abacs, abacterial, abactinal, abactinally, abactor, abactors, abacus, abacuses, abaft, abaka, abakas, abalone, abalones, abamp, abampere, abamperes, abamps, aband, abanded, abanding, abandon, abandoned, abandonedly, abandonee, abandonees, abandoner, abandoners, abandoning, abandonment, abandonments, abandons, abandonware, abandonwares, abands, abapical, abas, abase, abased, abasedly, abasement, abasements, abaser, abasers, abases, abash, abashed, abashedly, abashes, abashing, abashless, abashment, abashments, abasia, abasias, abasing, abask, abatable, abate, abated, abatement, abatements, abater, abaters, abates, abating, abatis, abatises, abator, abators, abattis, abattises, abattoir, abattoirs, abattu, abature, abatures, abaxial, abaxile, abaya, abayas, abb, abba, abbacies, abbacy, abbas, abbatial, abbe, abbed, abbes, abbess, abbesses, abbey, abbeys, abbot, abbotcies, abbotcy, abbots, abbotship, abbotships, abbreviate, abbreviated, abbreviates, abbreviating, abbreviation, abbreviations, abbreviator, abbreviators, abbreviatory, abbreviature, abbreviatures, abbs, abcee, abcees, abcoulomb, abcoulombs, abdabs, abdicable, abdicant, abdicate, abdicated, abdicates, abdicating, abdication, abdications, abdicative, abdicator, abdicators, abdomen, abdomens, abdomina, abdominal, abdominally, abdominals, abdominoplasty, abdominous, abduce, abduced, abducens, abducent, abducentes, abduces, abducing, abduct, abducted, abductee, abductees, abducting, abduction, abductions, abductor, abductores, abductors, abducts, abeam, abear, abearing, abears, abecedarian, abecedarians, abed, abegging, abeigh, abele, abeles, abelia, abelian, abelias, abelmosk, abelmosks, aberdevine, aberdevines, abernethies, abernethy, aberrance, aberrances, aberrancies, aberrancy, aberrant, aberrantly, aberrants, aberrate, aberrated, aberrates, aberrating, aberration, aberrational, aberrations, abessive, abessives, abet, abetment, abetments, abets, abettal, abettals, abetted, abetter, abetters, abetting, abettor, abettors, abeyance, abeyances, abeyancies, abeyancy, abeyant, abfarad, abfarads, abhenries, abhenry, abhenrys, abhominable, abhor, abhorred, abhorrence, abhorrences, abhorrencies, abhorrency, abhorrent, abhorrently, abhorrer, abhorrers, abhorring, abhorrings, abhors, abid, abidance, abidances, abidden, abide, abided, abider, abiders, abides, abiding, abidingly, abidings, abies, abietic, abigail, abigails, abilities, ability, abiogeneses, abiogenesis, abiogenetic, abiogenetically, abiogenic, abiogenically, abiogenist, abiogenists, abiological, abioses, abiosis, abiotic, abiotically, abiotrophic, abiotrophies, abiotrophy, abirritant, abirritants, abirritate, abirritated, abirritates, abirritating, abitur, abiturient, abiturients, abiturs, abject, abjected, abjecting, abjection, abjections, abjectly, abjectness, abjectnesses, abjects, abjoint, abjointed, abjointing, abjoints, abjunction, abjunctions, abjuration, abjurations, abjure, abjured, abjurer, abjurers, abjures, abjuring, ablactation, ablactations, ablate, ablated, ablates, ablating, ablation, ablations, ablatitious, ablatival, ablative, ablatively, ablatives, ablator, ablators, ablaut, ablauts, ablaze, able, abled, ablegate, ablegates, ableism, ableisms, ableist, ableists, abler, ables, ablest, ablet, ablets, abling, ablings, ablins, abloom, ablow, abluent, abluents, ablush, abluted, ablution, ablutionary, ablutions, ablutomane, ablutomanes, ably, abmho, abmhos, abnegate, abnegated, abnegates, abnegating, abnegation, abnegations, abnegator, abnegators, abnormal, abnormalism, abnormalisms, abnormalities, abnormality, abnormally, abnormals, abnormities, abnormity, abnormous, abo, aboard, abode, aboded, abodement, abodements, abodes, aboding, abohm, abohms, aboideau, aboideaus, aboideaux, aboil, aboiteau, aboiteaus, aboiteaux, abolish, abolishable, abolished, abolisher, abolishers, abolishes, abolishing, abolishment, abolishments, abolition, abolitional, abolitionary, abolitionism, abolitionisms, abolitionist, abolitionists, abolitions, abolla, abollae, abollas, aboma, abomas, abomasa, abomasal, abomasi, abomasum, abomasus, abominable, abominableness, abominably, abominate, abominated, abominates, abominating, abomination, abominations, abominator, abominators, abondance, abondances, abonnement, abonnements, aboon, aboral, aborally, abord, aborded, abording, abords, abore, aborigen, aborigens, aborigin, aboriginal, aboriginalism, aboriginalisms, aboriginalities, aboriginality, aboriginally, aboriginals, aborigine, aborigines, aborigins, aborne, aborning, abort, aborted, abortee, abortees, aborter, aborters, aborticide, aborticides, abortifacient, abortifacients, aborting, abortion, abortional, abortionist, abortionists, abortions, abortive, abortively, abortiveness, abortivenesses, aborts, abortuaries, abortuary, abortus, abortuses, abos, abought, aboulia, aboulias, aboulic, abound, abounded, abounding, abounds, about, abouts, above, aboveboard, aboveground, aboves, abracadabra, abracadabras, abrachia, abrachias, abradable, abradant, abradants, abrade, abraded, abrader, abraders, abrades, abrading, abraid, abraided, abraiding, abraids, abram, abranchial, abranchiate, abrasax, abrasaxes, abrasion, abrasions, abrasive, abrasively, abrasiveness, abrasivenesses, abrasives, abraxas, abraxases, abray, abrayed, abraying, abrays, abrazo, abrazos, abreact, abreacted, abreacting, abreaction, abreactions, abreactive, abreacts, abreast, abrege, abreges, abri, abricock, abricocks, abridgable, abridge, abridgeable, abridged, abridgement, abridgements, abridger, abridgers, abridges, abridging, abridgment, abridgments, abrim, abrin, abrins, abris, abroach, abroad, abroads, abrogable, abrogate, abrogated, abrogates, abrogating, abrogation, abrogations, abrogative, abrogator, abrogators, abrooke, abrooked, abrookes, abrooking, abrosia, abrosias, abrupt, abrupter, abruptest, abruption, abruptions, abruptly, abruptness, abruptnesses, abrupts, abs, abscess, abscessed, abscesses, abscessing, abscind, abscinded, abscinding, abscinds, abscise, abscised, abscises, abscisic, abscisin, abscising, abscisins, absciss, abscissa, abscissae, abscissas, abscisse, abscisses, abscissin, abscissins, abscission, abscissions, abscond, absconded, abscondence, abscondences, absconder, absconders, absconding, absconds, abseil, abseiled, abseiling, abseilings, abseils, absence, absences, absent, absented, absentee, absenteeism, absenteeisms, absentees, absenter, absenters, absenting, absently, absentminded, absentmindedly, absentmindedness, absentmindednesses, absents, absey, abseys, absinth, absinthe, absinthes, absinthiated, absinthism, absinthisms, absinths, absit, absits, absolute, absolutely, absoluteness, absolutenesses, absoluter, absolutes, absolutest, absolution, absolutions, absolutise, absolutised, absolutises, absolutising, absolutism, absolutisms, absolutist, absolutistic, absolutists, absolutive, absolutize, absolutized, absolutizes, absolutizing, absolutory, absolvable, absolve, absolved, absolvent, absolvents, absolver, absolvers, absolves, absolving, absolvitor, absolvitors, absonant, absorb, absorbabilities, absorbability, absorbable, absorbance, absorbances, absorbancies, absorbancy, absorbant, absorbants, absorbate, absorbates, absorbed, absorbedly, absorbefacient, absorbefacients, absorbencies, absorbency, absorbent, absorbents, absorber, absorbers, absorbing, absorbingly, absorbs, absorptance, absorptances, absorptiometer, absorptiometers, absorption, absorptions, absorptive, absorptiveness, absorptivities, absorptivity, absquatulate, absquatulated, absquatulates, absquatulating, abstain, abstained, abstainer, abstainers, abstaining, abstains, abstemious, abstemiously, abstemiousness, abstemiousnesses, abstention, abstentionism, abstentionisms, abstentionist, abstentionists, abstentions, abstentious, absterge, absterged, abstergent, abstergents, absterges, absterging, abstersion, abstersions, abstersive, abstersives, abstinence, abstinences, abstinencies, abstinency, abstinent, abstinently, abstract, abstractable, abstracted, abstractedly, abstractedness, abstractednesses, abstracter, abstracters, abstractest, abstracting, abstraction, abstractional, abstractionism, abstractionisms, abstractionist, abstractionists, abstractions, abstractive, abstractively, abstractives, abstractly, abstractness, abstractnesses, abstractor, abstractors, abstracts, abstrict, abstricted, abstricting, abstriction, abstrictions, abstricts, abstruse'.split(', ');
    var results = [];


    function drowResalts(search){
        console.log(results);
    }



    search.addEventListener('keyup', function(){
        results = [];

        for (let i=0; i<arrArr.length; i++){
            if (arrArr[i].includes(search.value)){
                results.push(arrArr[i]);
            }
        }
        creatResultList(results);
    });

    function creatResultList(res){
        var ul = document.createElement('ul');
        ul.classList.add('choice');

        for (let i=0; i<res.length; i++){
            var li = document.createElement('li');
            li.classList.add('choice-link');
            ul.appendChild(li);
            li.innerText = res[i];
        
        }

        resultsWrap.appendChild(ul); 
        
    }
}
document.addEventListener('DOMContentLoaded', searchSearch())


function formReg(){ 

    var mistake = document.querySelector('.err');
           



    var mistakeItem = document.querySelectorAll('.err-item');
    var regForm = document.querySelector('#reg');
    // var arrMist;
    var regSubmit = document.querySelector('#reg-btn');
    var regReset = document.querySelector('#reset');

    var regName = document.querySelector('#reg-name');
    var regMail = document.querySelector('#reg-mail');
    var regPass = document.querySelector('#reg-pass');
    var regRepeatPass = document.querySelector('#reg-repeat-pass');
      
                    
    
    regSubmit.addEventListener('click', function(e){
    // regForm.addEventListener('click', function(e){
        e.preventDefault();
       
  

        // if (e.target.tagName ==='BUTTON' && e.target.getAttribute('id') === 'reg-btn'){
 
            // if (regName.hasAttribute('required') && (regName.value === '')) {
            //    let errItem = document.createElement('li');
            //     errItem.classList.add('err-item');
            //     mistake.appendChild(errItem); 
            //    errItem.innerText = 'Не заполнено поле Name.';
            // } else if (regName.hasAttribute('pattern')) {
            //         var pattern = regName.getAttribute('pattern');
            //         var reg = new RegExp(pattern);
            //         if (!reg.test(regName.value)){
            //             let errItem = document.createElement('li');
            //             errItem.classList.add('err-item');
            //             mistake.appendChild(errItem); 
            //             errItem.innerText = 'Не верно заполнено поле Name.';
            //         }
            // }
        
            // if (regMail.hasAttribute('required') && regMail.value === ''){
            //     let errItem = document.createElement('li');
            //     errItem.classList.add('err-item');
            //     mistake.appendChild(errItem); 
            //     errItem.innerText =  'Не заполненно поле e-mail.';
            // } else if (regMail.hasAttribute('pattern')) {
            //         var pattern = regMail.getAttribute('pattern');
            //         var reg = new RegExp(pattern);
            //         if (!reg.test(regMail.value.toUpperCase())){
            //             let errItem = document.createElement('li');
            //             errItem.classList.add('err-item');
            //             mistake.appendChild(errItem); 
            //             errItem.innerText = 'Не верно заполнено поле Email.';
            //         }
            // }

            if (regPass.hasAttribute('required') && regPass.value === '') {
                let errItem = document.createElement('li');
                errItem.classList.add('err-item');
                mistake.appendChild(errItem); 
                errItem.innerText = 'Не заполненно поле Password.';
            } 
            // else if (regPass.hasAttribute('pattern')) {
            //         var pattern = regPass.getAttribute('pattern');
            //         var reg = new RegExp(pattern);
            //         if (!reg.test(regPass.value.toUpperCase())){
            //             let errItem = document.createElement('li');
            //             errItem.classList.add('err-item');
            //             mistake.appendChild(errItem); 
            //             errItem.innerText = 'Пароль может содержать только буквы и или цифры.';
            //         }
            // } else if ((regPass.value <2) || (regPass.value >8)){
            //         let errItem = document.createElement('li');
            //         errItem.classList.add('err-item');
            //         mistake.appendChild(errItem); 
            //         errItem.innerText = 'Пароль не должне быть меньше 2 символов и больше 8.';
            // }

            else if ((regPass.value <2) || (regPass.value >8)){
                    let errItem = document.createElement('li');
                    errItem.classList.add('err-item');
                    mistake.appendChild(errItem); 
                    errItem.innerText = 'Пароль не должне быть меньше 2 символов и больше 8.';
            }




            // else {
            //     regSubmit.submit();
            // }

    

        // } 
        // else if (e.target.tagName === 'BUTTON' && e.target.getAttribute('id') === 'reset') {}
            

    });

}

formReg();

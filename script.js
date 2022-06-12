var celkem;
var dobaZapujceni;
var penize;
var emailInput;

function spocitej(){
    celkem = 0
    for (i = 0; i < 8; i++){ //Kdyz jsem na tohle prisel, zacal jsem se sam sebe bat.
        if (i == 0 || i % 2 == 0){
            if (document.f1.elements[i].checked == true){
                celkem += document.f1.elements[i].value * document.f1.elements[i + 1].value;
            } else {
                document.querySelector('.suma').innerHTML="0kc";
            }
        }
    }

    dobaZapujceni = parseInt(document.f2.doba.value);
    celkem *= dobaZapujceni;
    
    if (f2.nosic.value != 1){
        celkem *= f2.nosic.value;
    }

    penize = parseInt(document.f2.predstava.value);
    if (celkem == 0) {
        document.querySelector('.rozsudek').innerHTML='<span style=color:red;>Nejdrive si neco vyber!</span>';
    } else if (penize >= celkem){
        document.querySelector('.rozsudek').innerHTML='<span style=color:green;>To ti bude stacit!</span>';
    } else if (penize < celkem){
        document.querySelector('.rozsudek').innerHTML='<span style=color:red;>To je malo!</span>';
    } else {
        document.querySelector('.rozsudek').innerHTML='<span style=color:red;>Nebyla zadana castka.</span>';
    }
    
    document.querySelector('.suma').innerHTML=`${Math.round(celkem)}kc`;
}

function odesli(){
    emailInput = document.f2.mail.value;
    if( !emailInput.includes('@') || !emailInput.includes('.') ){
        document.querySelector('.msg').innerHTML='NEODESLANO'
    } else {
        document.querySelector('.msg').innerHTML=''
    }
}

function vycisti(){
    for (i = 0; i < 2; i++){
        document.forms[i].reset();
    }
    document.querySelector('.suma').innerHTML="0kc";
}

// ===========================================================================================================================
//                                             PRVNI (NOOB) VERZE BEZ FOR LOOPY
// ===========================================================================================================================

// var celkem;
// var dobaZapujceni;
// var penize;
// var emailInput;

// function spocitej(){

//     celkem = 0
//     if (f1.cenaH.checked == true){
//         celkem += f1.cenaH.value * f1.mnozstviH.value;
//     }

//     if (f1.cenaR.checked == true){
//         celkem += f1.cenaR.value * f1.mnozstviR.value;
//     }

//     if (f1.cenaM.checked == true){
//         celkem += f1.cenaM.value * f1.mnozstviM.value;
//     }

//     if (f1.cenaD.checked == true){
//         celkem += f1.cenaD.value * f1.mnozstviD.value;
//     } else {
//         document.querySelector('.suma').innerHTML="";
//     }

//     dobaZapujceni = parseInt(document.f2.doba.value);
//     celkem *= dobaZapujceni;
    
//     if (f2.nosic.value != 1){
//         celkem *= f2.nosic.value;
//     }

//     penize = parseInt(document.f2.predstava.value);
//     if (celkem == 0) {
//         document.querySelector('.rozsudek').innerHTML='<span style=color:red;>Nejdrive si neco vyber!</span>';
//     }
//     else if (penize >= celkem){
//         document.querySelector('.rozsudek').innerHTML='<span style=color:green;>To ti bude stacit!</span>';
//     } else {
//         document.querySelector('.rozsudek').innerHTML='<span style=color:red;>To je malo!</span>';
//     }
    
    
//     document.querySelector('.suma').innerHTML=`${Math.round(celkem)}kc`;
// }

// function odesli(){
//     emailInput = document.f2.mail.value;
//     if( !emailInput.includes('@') || !emailInput.includes('.') ){
//         document.querySelector('.msg').innerHTML='NEODESLANO'
//     } else {
//         document.querySelector('.msg').innerHTML=''
//     }
// }

// function vycisti(){
//     document.getElementById("form1").reset();
//     document.getElementById("form2").reset();
// }
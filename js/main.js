

var bgColor = ["blue","red","green","purple","#2d94c0"]

var i = 0

document.querySelector("button").addEventListener('mouseover',CheckBgColor)
document.querySelector("button").addEventListener('mouseout',showAlert)


// VARIANT 1
function tester(){
    i = i < bgColor.length ? ++i : 0
    document.querySelector("body").style.background = bgColor[i]
}

// VARIANT 2

function CheckBgColor(){

    if(i < bgColor.length){
        document.querySelector("body").style.background = bgColor[i]
    }else{
        i = 0
        document.querySelector("body").style.background = bgColor[i]
    }
    i++
}

// VARIANT 2 (anonim funksiya)
// document.querySelector("button").addEventListener('click',function(){
//     i = i < bgColor.length ? ++i : 0
//     document.querySelector("body").style.background = bgColor[i]
// })

function showAlert(){
    alert("Ustunden cekdiniz")
}

// // function CheckUser(){

// //     let username = 6 // int



// //     if(username === "6"){

// //         alert("stringdir")

// //     }else if(username === 6){

// //         alert("integerdir")

// //     }else{
        
// //         console.log("tapılmadı")

// //     }

//     // if(username == "azn"){
//     //     ch_p_tags_Bg()
//     // }else if(username == "dollar"){
//     //     alert("Dollar goturmuruk")
//     // }else{
//     //     alert("Taninmayan Valyuta")
//     // }



//     // switch(username) {
//     //     case "Ayxan":
//     //         ch_p_tags_Bg()
//     //         break;
//     //     case "Nadir":
//     //         ch_background()
//     //         break;
//     //     case "Murad":
//     //         console.log(username + "- doğum ili: 1995")
//     //     case "Xəyal":
//     //             console.log(username + "- doğum ili: 1991")
//     //             break;
//     //     default:
//     //         console.log("Ad tapılmadı")
//     //   }

// // }



// // function ch_p_tags_Bg(){

// //    let p =  document.querySelectorAll("p")

// //    for(let i = 0; i < p.length; i++){
// //         p[i].style.background = "red"
// //    }
// // }

// // function ch_background(){
// //     document.querySelector("body").style.background = "purple"
// // }



// // 6 int
// // switch (new Date().getDay()) {
// //     case 0:
// //     case 10:
// //     case 20:
// //       alert("Sunday");
// //       break;
// //     case 1:
// //       day = "Monday";
// //       break;
// //     case 2:
// //     case "6":
// //        alert("Tuesday");
// //       break;
// //     case 3:
// //       day = "Wednesday";
// //       break;
// //     case 4:
// //       day = "Thursday";
// //       break;
// //     case 5:
// //       day = "Friday";
// //       break;
// //     case 6:
// //       console.log("Saturday");
// //   }
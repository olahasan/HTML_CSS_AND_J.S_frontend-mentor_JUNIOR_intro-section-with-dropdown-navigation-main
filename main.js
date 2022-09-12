let Features= document.getElementById("Features");
let Company= document.getElementById("Company");
let box3= document.getElementById("box3");
let box4= document.getElementById("box4");
let list= document.getElementById("list");
let icon= document.getElementById("icon");
let buttons= document.getElementById("buttons");
console.log(Features);
console.log(Company);
console.log(box3);
console.log(box4);
console.log(list);
console.log(icon);
console.log(buttons);

Company.onclick = function(){
    // this.style.color ="black";
    console.log(box3);
    box3.classList.toggle("hidden");
}
Features.onclick = function(){
    console.log(box4);
    box4.classList.toggle("hidden");
}

icon.onclick = function(){
    list.style.display="block";
    buttons.style.display="block";
//     if( list.style.display="block" === true){
// console.log("tttt")
//     }
}
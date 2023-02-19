// let icons = document.querySelectorAll(".tasks i")
// let infoTasks = document.querySelectorAll(".tasks .info")
// console.log(icons);
// console.log(infoTasks);



// icons.forEach((i) => {
//     i.addEventListener("click", deleteIcons)
// })







// function deleteIcons() {
//     icons.forEach(() => {
//         this.classList.add("done")
//     })
//     infoTasks.forEach((e) => {
//         e.classList.add("done")
//     });

// }






let email = document.querySelector(".settings-page .email")
let changeBtn = document.querySelector(".settings-page .change-btn")

console.log(email);
console.log(changeBtn);


changeBtn.addEventListener("click",function(){
    email.removeAttribute("disabled")
    email.setAttribute("value", "");
    email.setAttribute("placeholder", "Enter Your Email");
    
})







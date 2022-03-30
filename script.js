
let myLeads = [];
// myLeads = JSON.parse(myLeads);
// console.log(typeof myLeads);
// myLeads.push("www.cnn.com");
// console.log(typeof myLeads);
// myLeads = JSON.stringify(myLeads);
// console.log(myLeads);
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("save");
const listEl = document.getElementById("list");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); //localStorage.getItem("myLeads",JSON.parse(myLeads)) doesnt work.Not sure why.
console.log(leadsFromLocalStorage);
const deleteBtn = document.getElementById("delete");
const saveTabBtn = document.getElementById("tab");

//For below, ask why if(leadsFromLocalStorage.length>0) caused error
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    // renderLeads()
    // renderLeads(myLeads)
    render(myLeads)
} else {
    console.log("No leads");
}
// const tabs= [
//     {url: "https://www.bbc.com/"}
// ]

saveTabBtn.addEventListener ("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        inputEl.value = ''
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads);  
    });
    // console.log(tabs[0].url);
    // console.log(myLeads);
    
    // console.log(localStorage.getItem("myLeads"));
})

// function renderLeads() { // Name changed during refactoring
    function render(leads) {
    let listItems = ""// When declared outside the function, returned repetitive members of array.Why?
    for (let i=0; i < leads.length; i++) {
        // listItems += '<li><a href="'+ myLeads[i] +'"target="_blank">' + myLeads[i] + '</a></li>';
        listItems += `<li>
                        <a href= ${leads[i]} target= "_blank"> ${leads[i]}
                        </a>
                    </li>`

        console.log(listItems);
       
//     const li = document.createElement("li");
//     li.textContent = myLeads[i];
//     listEl.append(li);  
    }
 listEl.innerHTML=listItems
 console.log(listItems);
}

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
// localStorage.setItem("secondLead","www.instagram.com")
// console.log(localStorage.getItem("secondLead"));
// localStorage.clear();
inputBtn.addEventListener("click", function() {
    console.log("Button clicked JS");
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = ''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"));
    render(myLeads);



})




// const contEl = document.getElementById("container");
// contEl.innerHTML = "<button>Buy!</button>";
// contEl.addEventListener ("click", function thanks (){
//     contEl.innerHTML += "<p>Thanks for buying<p>"
// })

// let currentViewers = null
// currentViewers = ["jane","maya"]
// currentViewers = null
// if (currentViewers) {
//     console.log("we have viewers");
// } else {
//     console.log("ma fish viewersss");
// }
// console.log(Boolean(""))


// function add(number1,number2) {
//     sum = number1 + number2;
//     return sum
// }
// console.log(add(3,4));
// add(9,102)
// console.log(sum);


// function getFirst(arr) {
//     return arr[0]
// } 
// getFirst ()

// let myCourses = ["Learn CSS animations","Introduction to UI/UX","Web Development for Newbies"]
// function logArray(courses) {
//     for (i=0; i<courses.length; i++) {
//         console.log(courses[i]);
//     }
// }
// logArray(myCourses)

// let myNum = 24
// localStorage.setItem("myNum",JSON.stringify(myNum))
// console.log(localStorage.getItem("myNum"));

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]
// let janeBtn = document.getElementById("jane")
// janeBtn.addEventListener("click",function () {
//     console.log(data[0].score);
// })

// let story = "The 5 best countries are"
// let country = ["Nigeria","Ghana","Togo","Benin","Burkina Faso"]
// let fruits = ["apple","orange"]
// function generateSentence(desc,arr) {
//     ``
//     for (i=0; i<arr.length ;i++) {
//         console.log(arr[i]);
//     }  
// }
// generateSentence()

// const things= [
//     "images/feet.jpg",
//     "images/mirror.jpg",
//     "images/sweater.jpg"
// ]
// let firstImage = document.getElementById("img-container")
// let secImage = document.getElementById("img2")
// let thirdImage = document.getElementById("img3")

// function renderImage() {
//     for (i=0; i < things.length; i++) {
//         firstImage.innerHTML+=`<img class="team-img" src="${things[i]}">`;
//     }
// }
// renderImage()

// let image = new Image();
// image.src = `${things[0]}`;
// document.body.appendChild(image)
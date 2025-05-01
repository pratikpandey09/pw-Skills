const words = ["POWERFUL", "FOCUSED", "PRACTICAL"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 100;
const pauseTime = 1500;
const element = document.getElementById("changing-word");

function typeEffect() {
    currentWord = words[wordIndex];

    if (isDeleting) {
    element.innerText = currentWord.substring(0, charIndex--)
    } else {
    element.innerText = currentWord.substring(0, charIndex++)
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true
    setTimeout(typeEffect, pauseTime);
    } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 300);
    } else {
    setTimeout(typeEffect, typingSpeed)
    }
}
typeEffect();


// nav bar me courses ke uper lagne wala animation
let tabs=document.querySelectorAll(".tabs")
const detail=document.querySelectorAll(".rightC_detail")
tabs.forEach((tab) => {
    tab.addEventListener("click",function(){
        const targetId = tab.getAttribute("data-target");

        detail.forEach((details) => {
            details.classList.add("hidden"); // sab hide karo
            details.style.opacity = "0.3"; // sabki opacity kam karo
        });

        document.getElementById(targetId).classList.remove("hidden"); // sirf target dikhana
        document.getElementById(targetId).style.opacity = "1"; // selected ki opacity 100%

    });
});

// DROPDOWN BUTTONS
let dropDownbtn =document.getElementById("DropDownbtn")
let dropDownMenu = document.getElementById("dropdownMenu")
let rotateButton = document.getElementById("rotateButton")
let coursebtn = document.getElementById("coursebtn")


dropDownbtn.addEventListener("mouseenter",function(){
    dropDownMenu.style.display="block"
    rotateButton.style.transform = "rotate(180deg)"

})
dropDownMenu.addEventListener("mouseleave",function(){
    dropDownMenu.style.display="none"
    rotateButton.style.transform = "rotate(0deg)"
})



// Function to make horizontal scrolling work for any section
function setupSlider(sliderId, leftBtnId, rightBtnId) {
    const slider = document.getElementById(sliderId); // Main scrolling container
    const leftBtn = document.getElementById(leftBtnId); // Left scroll button
    const rightBtn = document.getElementById(rightBtnId); // Right scroll button

    // Get the width of one course-card dynamically (course-card ka width milega)
    const courseWidth = slider.querySelector(".course-card").offsetWidth; 


    // Scroll left on clicking left arrow
    leftBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -courseWidth, behavior: "smooth" });
        leftBtn.style.opacity="100"
        rightBtn.style.opacity="40"
    });

    // Scroll right on clicking right arrow
    rightBtn.addEventListener("click", () => {
        slider.scrollBy({ left: courseWidth, behavior: "smooth" });
        rightBtn.style.opacity="100"
        leftBtn.style.opacity="40"
    });
}

// Call the function for multiple sections
// These call are for bigger screens buttons
setupSlider("sec3Slides", "sec3Btn1", "sec3Btn2");
setupSlider("sec2Slides", "sec2Btn1", "sec2Btn2");
setupSlider("sec1Slides", "sec1Btn1", "sec1Btn2");

// companies wala sections ke liye ye wo buttons hai jo small screens pe left aur right me dikh raha hai 
setupSlider("companiesSliderContainer","comapanies_SliderBtn1","comapanies_SliderBtn2");

// ye wala bhi companies ke liye hi hai lekin ye bigger screensn ke liye hai 
setupSlider("companiesSliderContainer","sliderBtn1","sliderBtn2");


// story wala section slide  karne ke liye
setupSlider("storySlider","storyBtn1","storyBtn2")




// FAQ section ke liye small screens ke liye
let questions=document.querySelectorAll(".Ques")
let answer=document.querySelectorAll(".ans")
let icons=document.querySelectorAll(".iconFAQ")

questions.forEach((ques,index)=>{
    ques.addEventListener("click",function(){
        
        answer.forEach((ans,i)=>{
            const icon = questions[i].querySelector(".iconFAQ");

            if (i === index) {
                // toggle clicked answer
                ans.classList.toggle("hidden");
                icon.classList.toggle("rotate-180");// rotate clicked icon
            } else {
                // hide all other answers
                ans.classList.add("hidden");
                icon.classList.remove("rotate-180");// rotate clicked icon
            }
        })
    })
})

// FAQ section for bigger screens
const tabQues = document.querySelectorAll(".Q1");
const tabAns = document.querySelectorAll(".ans1");

tabQues.forEach((tabbs) => {
    tabbs.addEventListener("click", function () {
        const targetId = tabbs.getAttribute("data-target");

        // Hide all answers and set opacity of all questions to 65%
        tabAns.forEach((details) => {
            details.classList.add("hidden");
            details.style.opacity = "0.3";
        });

        tabQues.forEach((q) => {
            q.classList.remove("active"); // remove opacity 1
        });

        // Show clicked answer and make it fully opaque
        const targetAns = document.getElementById(targetId);
        if (targetAns) {
            targetAns.classList.remove("hidden");
            targetAns.style.opacity = "1";
        }

        tabbs.classList.add("active"); // set clicked question opacity to 100%
    });
});

// small screens ka nav bar
var navBar=document.querySelector(".navBar")
var navBtn=document.querySelector(".navBtn")
var closeBtn=document.querySelector(".closeBtn")

navBtn.addEventListener("click",function(){
    navBar.classList.toggle("hidden")
    navBtn.style.display="none"
    closeBtn.style.display="block"
})

closeBtn.addEventListener("click",function(){
    navBar.classList.toggle("hidden")
    navBtn.style.display="block"
    closeBtn.style.display="none"
})
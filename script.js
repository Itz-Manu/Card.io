
// Go to home from anywhere

let content = document.getElementById("content");

let home = document.querySelector("#home");

home.addEventListener("click", ()=>{
    content.style.display = "block";
    faq.style.display = "none";         // All define later in program (Hoisting)
    order.style.display = "none";
    creator.style.display = "none";
});


// Faq Section controll

const question = document.querySelectorAll('.ques');

question.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});


// Card fliping

const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
let isFlipped = false;

document.querySelector("#card-flip-btn").addEventListener("click", ()=>{
    if (!isFlipped) {
        cardFront.style.transform = 'perspective(1000px) rotateY(-180deg)';
        cardBack.style.transform = 'perspective(1000px) rotateY(0deg)';
      } else {
        cardFront.style.transform = 'perspective(1000px) rotateY(0deg)';
        cardBack.style.transform = 'perspective(1000px) rotateY(180deg)';
      }
      
      isFlipped = !isFlipped;
})


// Card Designing

//  user-details

let username = document.querySelector("#card-user-name");
let name = document.querySelector("#user-name");

name.addEventListener("input", ()=>{
    username.textContent = name.value;
})

let userpostition = document.querySelector("#card-user-position");
let position = document.querySelector("#user-position");

position.addEventListener("input", ()=>{
    userpostition.textContent = position.value;
})

let useremail = document.querySelector("#card-user-email");
let email = document.querySelector("#user-email");

email.addEventListener("input", ()=>{
    useremail.textContent = email.value;
})

let usercontact = document.querySelector("#card-user-contact");
let contact = document.querySelector("#user-contact");

contact.addEventListener("input", ()=>{
    usercontact.textContent = contact.value;
})

let userlocation = document.querySelector("#card-user-location");
let locations = document.querySelector("#user-location");

locations.addEventListener("input", ()=>{
    userlocation.textContent = locations.value;
})


// company details

let usercompany = document.querySelector("#card-user-company");
let company = document.querySelector("#company-name");

company.addEventListener("input", ()=>{
    usercompany.textContent = company.value;
})


// This whole thmg given by AI

let companylogo = document.querySelector("#card-company-logo");
const logoPreview = document.getElementById("logo-preview");
const logo = document.getElementById("company-logo");

logo.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];         // if we select multiple file then target the 0 one
    if (selectedFile) {
        const reader = new FileReader();                // Its an method or API in JS that read the file data

        reader.onload = (e) => {
          logoPreview.src = e.target.result;            // It will set the src section in img tag
        };

        reader.readAsDataURL(selectedFile);
    }
});


// Now the color pallet

let front = document.querySelector(".card-front");
let back = document.querySelector(".card-back");

let color1 = document.getElementById("c1-design");
let color2 = document.getElementById("c2-design");


color1.addEventListener("click", (event)=>{
    front.id  = event.target.id;
    back.id = event.target.id;
})

color2.addEventListener("click", (event)=>{
    front.id  = event.target.id;
    back.id = event.target.id;
})



//  Here are the toggling section

// the whole content
// let content = document.getElementById("content");


// card designing section
let creator = document.getElementById("creator");
let createbtn = document.getElementById("hero-btn-create");

createbtn.addEventListener("click", ()=>{
    content.style.display = "none";
    creator.style.display = "block";
});


// Show Faq Section
let faq = document.getElementById("frequently");
let faqbtn = document.getElementById("faq-btn");

faqbtn.addEventListener("click", ()=>{
    content.style.display = "none";
    faq.style.display = "block";
});

// Go back btn in faq section
let goback =document.getElementById("faq-btn-back");

goback.addEventListener("click", ()=>{
    content.style.display = "block";
    faq.style.display = "none";
});


// Ordering section

let order = document.getElementById("ordering");
let orderbtn = document.getElementById("card-order-btn");

orderbtn.addEventListener("click", ()=>{
    order.style.display = "block";
    creator.style.display = "none";
})



// Sign in sign-up section

let signup = document.querySelector(".sign-up");
let signin = document.querySelector(".sign-in");


function signuptoggel(){
    if(signup.style.display === "block"){
        signup.style.display="none";
    }
    else{
        if(signin.style.display === "block"){
            signin.style.display="none";
            signup.style.display="block";
        }   
        else{
            signup.style.display="block";
        }
    }
}

let signupbtn = document.getElementById("sign-up-btn");
signupbtn.addEventListener("click", signuptoggel);


function signintoggel(){
    if(signin.style.display === "block"){
        signin.style.display="none";
    }
    else{
        if(signup.style.display == "block"){
            signup.style.display="none";
            signin.style.display="block";
        }   
        else{
            signin.style.display="block";
        }
    }
}


let signinbtn = document.getElementById("sign-in-btn");
signinbtn.addEventListener("click", signintoggel);


// Link toggel

//sign-in page
const toglesignup  = document.querySelector(".toggle-link-signup");
toglesignup .addEventListener("click", signuptoggel);

//sign-up page
const toglesignin = document.querySelector(".toggle-link-signin");
toglesignin.addEventListener("click", signintoggel);


// When click on the links then page present in center
//  AI Genrated code

const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').slice(1); // Remove the '#' symbol
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const windowHeight = window.innerHeight;
                    const sectionHeight = targetSection.getBoundingClientRect().height;
                    const offsetTop = targetSection.offsetTop;

                    const scrollToPosition = offsetTop - (windowHeight - sectionHeight) / 2;

                    window.scrollTo({
                        top: scrollToPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
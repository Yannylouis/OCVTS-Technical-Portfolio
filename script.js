let lastIndex =-1;
function showRandomproject(){
    let index;
do {
    index=Math.floor(Math.random()*projects.length);
}while (index===lastIndex);
lastIndex=index;
console.log("Today's featured project:"+ projects[index].title);
document.getElementById("featuredProject").innerHTML="Today's Featured Project:"+projects[index].title;
}
const rawInput= "Alex Morgan";
let trimmed= rawInput.trim();
console.log(trimmed);
let lowercase=trimmed.toLowerCase();
console.log(lowercase);
let cleaned=lowercase.replace(/[0-9]/g,"");
console.log(cleaned);
//Capitalize the first letter of each word
function capitalizeWords(str){
    return str.replace(/\b\w/g,letter=> letter.toUpperCase());
}
let formatted= capitalizeWords(cleaned);
console.log(formatted);
//Validate input
if(/^[a-zA-Z ]+$/.test(cleaned)){
    console.log("Valid input");
}else {
    console.log("Invalid input");
}
const now= new Date();
const formattedDate=now.toLocaleDateString("en-US",{
    month:"long",
    day:"numeric",
    year:"numeric"
});
document.getElementById("lastUpdated").textContent=
""+ formattedDate;
// Show relative time
const lastUpdatedTime = new Date();

function updateRelativeTime() {
    const seconds = Math.floor((Date.now() - lastUpdatedTime) / 1000);

    let timeText;

    if (seconds < 60) {
        timeText = "just now";
    } else if (seconds < 3600) {
        timeText = Math.floor(seconds / 60) + " minutes ago";
    } else {
        timeText = Math.floor(seconds / 3600) + " hours ago";
    }

    document.getElementById("relativeUpdated").textContent =
        "Updated " + timeText;
}

updateRelativeTime();
setInterval(updateRelativeTime, 60000);


// Time on site counter
const pageStartTime = Date.now();

function updateTimeOnSite() {
    const seconds = Math.floor((Date.now() - pageStartTime) / 1000);

    document.getElementById("timeOnSite").textContent =
        seconds + " seconds";
}

updateTimeOnSite();
setInterval(updateTimeOnSite, 1000);

// Define the welcome message function
function welcomeMessage() {
    alert("Thanks for exploring my portfolio!");
}

// Wait 5 seconds before showing the welcome message
setTimeout(welcomeMessage, 5000);


// MODDING 1: Rotate a tip every 10 seconds
const tips = [
    "Explore my projects!",
    "Check out my About Me section!",
    "Thanks for visiting my portfolio!"
];

let tipIndex = 0;

function rotateTips() {
    const tipElement = document.getElementById("visit-tip");

    if (tipElement) {
        tipElement.textContent = tips[tipIndex];
        tipIndex = (tipIndex + 1) % tips.length;
    }
}

setInterval(rotateTips, 10000);


// MODDING 2: Limited availability countdown
let countdown = 60;

function updateCountdown() {
    const timer = document.getElementById("countdown");

    if (timer) {
        timer.textContent = countdown;

        if (countdown > 0) {
            countdown--;
        } else {
            clearInterval(countdownInterval);
            timer.textContent = "Time expired!";
        }
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Select all navigation links that point to sections
const navLinks = document.querySelectorAll('nav a[href^="#"]');

// Add smooth scrolling to each navigation link
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// MODDING: Update the scroll progress bar
window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    document.getElementById("progress-bar").style.width = progress + "%";
});

// Print the entire portfolio
function printPortfolio() {
    window.print();
}


// MODDING: Print the resume
function downloadResume() {
    document.body.classList.add("print-resume");
    window.print();
}

// Remove the special printing mode afterward
window.addEventListener("afterprint", function() {
    document.body.classList.remove("print-resume");
});
const projects = [
    {
        image: "images/project1.jpg",
        title: "Project One",
        description: "This is my first project."
    },
    {
        image: "images/project2.jpg",
        title: "Project Two",
        description: "This is my second project."
    },
    {
        image: "images/project3.jpg",
        title: "Project Three",
        description: "This is my third project."
    },
    {
        image: "images/project4.jpg",
        title: "Project Four",
        description: "This is my fourth project."
    },
    {
        image: "images/project5.jpg",
        title: "Project Five",
        description: "This is my fifth project."
    }
];
showRandomproject();

const container = document.getElementById('projectsContainer');
const loadMoreBtn = document.getElementById('loadMore');

let displayedProjects = 0;
const batchSize = 3;

function renderProjects() {
    container.innerHTML = '';

    for (let i = 0; i < displayedProjects; i++) {
        const project = projects[i];

        const card = document.createElement('div');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;

        const title = document.createElement('h3');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);

        container.appendChild(card);
        card.draggable = true;

card.addEventListener('dragstart', function() {
    draggedCard = card;
});

card.addEventListener('dragover', function(event) {
    event.preventDefault();
});

card.addEventListener('drop', function(event) {
    event.preventDefault();

    if (draggedCard !== card) {
        container.insertBefore(draggedCard, card);
    }
});
    }
}
let draggedCard = null;

loadMoreBtn.addEventListener('click', function() {
    displayedProjects += batchSize;

    if (displayedProjects > projects.length) {
        displayedProjects = projects.length;
    }

    renderProjects();

    if (displayedProjects >= projects.length) {
        loadMoreBtn.style.display = 'none';
    }
});

displayedProjects = Math.min(batchSize, projects.length);
renderProjects();

if (displayedProjects >= projects.length) {
    loadMoreBtn.style.display = 'none';
}

const message = document.getElementById('message');
const charCount = document.getElementById('charCount');
const progressBar = document.getElementById('progressBar');
const submitBtn = document.getElementById('submitBtn');

const maxLength = 500;

message.addEventListener('input', function() {
    const usedCharacters = this.value.length;

    charCount.textContent = usedCharacters;

    const percentage = (usedCharacters / maxLength) * 100;

    progressBar.style.width = percentage + '%';

    if (usedCharacters > 450) {
        charCount.style.color = 'red';
        progressBar.style.backgroundColor = 'red';
    } else {
        charCount.style.color = 'black';
        progressBar.style.backgroundColor = 'blue';
    }

    if (usedCharacters >= maxLength) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
});

window.addEventListener('scroll', function() {
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const matchingLink = document.querySelector(
                `nav a[href="#${section.id}"]`
            );

            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
});

const nav = document.querySelector('nav');
const indicator = document.querySelector('.nav-indicator');

function moveIndicator(link) {
    indicator.style.width = link.offsetWidth + 'px';
    indicator.style.left = link.offsetLeft + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        moveIndicator(this);
    });
});
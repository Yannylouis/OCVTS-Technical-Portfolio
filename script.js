const projects= [
    {title: "Portfolio Website"},
    {title: "Space Adventure Game"},
    {title: "Travel Website"}
];
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
showRandomproject();

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
const footer = document.createElement("footer");
footer.classList.add("footer");
document.body.appendChild(footer);

let today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement('p');
const crtSymbol = '\u00A9';
copyright.innerText = `${crtSymbol} Swetha Kanneganti ${thisYear}`;


let findFooter = document.querySelector(".footer");
findFooter.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "GitHub", "SQL", "Agile/Scrum", "Python"];
const skillsSection = document.getElementById("Skills");
const skillsList= skillsSection.querySelector("ul");

for(let i of skills){
    let skill = document.createElement('li');
    skill.innerText = i;
    skillsList.appendChild(skill);
}





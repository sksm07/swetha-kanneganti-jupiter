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

let messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    let form = event.target;
    let user_name = form.userName.value;
    let email = form.usersEmail.value;
    let message = form.usersMessage.value;
    
    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${user_name}</a>\n
                            <span>${message}</span>`;
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type","remove");
    removeButton.addEventListener("click", (e)=>{
        const entry = e.target.parentNode;
        entry.remove();
        
    });
    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    

    messageForm.reset();
});




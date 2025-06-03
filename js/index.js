const footer = document.createElement("footer");
footer.classList.add("footer");
document.body.appendChild(footer);

let today = new Date();
let thisYear = today.getFullYear();

// Create a copyright paragraph and add it to footer
const copyright = document.createElement('p');
const crtSymbol = '\u00A9';
copyright.innerText = `${crtSymbol} Swetha Kanneganti ${thisYear}`;

//append copyright to footer
let findFooter = document.querySelector(".footer");
findFooter.appendChild(copyright);

//Define skills array to display
let skills = ["JavaScript", "HTML", "CSS", "GitHub", "SQL", "Agile/Scrum", "Python"];
const skillsSection = document.getElementById("Skills");
const skillsList= skillsSection.querySelector("ul");

for(let i of skills){
    let skill = document.createElement('li');
    skill.innerText = i;
    skillsList.appendChild(skill);
}

// Handle form submissions for messages
let messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    let form = event.target;
    let user_name = form.usersName.value;
    let email = form.usersEmail.value;
    let message = form.usersMessage.value;
    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    
    newMessage.innerHTML = `<a href="mailto:${email}">${user_name}</a>\n
                            <span>${message}</span>`;

    //remove button 

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type","button");
    removeButton.addEventListener("click", (e)=>{
        const entry = e.target.parentNode;
        entry.remove();
        
    });
    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    

    messageForm.reset();
});

//fetching github repositories

fetch("https://api.github.com/users/sksm07/repos")

    .then(response => {
        if(!response.ok){
            throw new Error("Fetch request for projects has failed");
        }
        return response.json();
    })

    .then(data=>{
        let repositories = data;        
        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.getElementsByTagName('ul')[0];
        
        // Loop through the data and display each item
        for (let i=0; i<repositories.length; i++){
            let project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })

    .catch(err => window.alert(err));






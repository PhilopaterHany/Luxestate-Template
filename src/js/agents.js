const agentsHolder = document.querySelector(
    ".agents .container .agents-holder"
);

fetch("../json/agents.json")
    .then((response) => response.json())
    .then((agents) => {
        agents.map((agent) => {
            let agentDiv = document.createElement("div");
            agentDiv.className ="agent wow animate__animated animate__jackInTheBox";
            agentsHolder.appendChild(agentDiv);

            let imageDiv = document.createElement("div");
            imageDiv.className = "image";
            agentDiv.appendChild(imageDiv);

            let agentImage = document.createElement("img");
            agentImage.src = agent.photo;
            agentImage.alt = agent.name;
            imageDiv.appendChild(agentImage);

            let textDiv = document.createElement("text");
            textDiv.className = "text";
            agentDiv.appendChild(textDiv);

            let jobTitle = document.createElement("h4");
            jobTitle.innerHTML = agent.job;
            textDiv.appendChild(jobTitle);

            let agentName = document.createElement("h6");
            agentName.innerHTML = `${agent.gender === "male" ? "Mr" : "Mrs"}. ${agent.name}`;
            textDiv.appendChild(agentName);

            let socialMediaBox = document.createElement("div");
            socialMediaBox.className = "social-media";
            textDiv.appendChild(socialMediaBox);

            function visualizeLinks(type, title, icon) {
                let a = document.createElement("a");
                a.href = type;
                a.title = title;
                a.target = "_blank";
                socialMediaBox.appendChild(a);

                let ico = document.createElement("i");
                ico.className = icon;
                a.appendChild(ico);
            }

            visualizeLinks(
                `https://twitter.com/${agent.twitUser}`,
                `${agent.name}'s Twitter`,
                "fa-brands fa-twitter"
            );
            visualizeLinks(
                `https://github.com/${agent.githubUser}`,
                `${agent.name}'s Github`,
                "fa-brands fa-github"
            );
            visualizeLinks(
                `https://www.linkedin.com/in/${agent.linkedinUser}`,
                `${agent.name}'s Linkedin`,
                "fa-brands fa-linkedin-in"
            );
        });
    });

// aboutSection
const aboutPopupBox = document.getElementById("about-popup-box");
function toggleAboutSection () {
    aboutPopupBox.classList.toggle("popup");
}

// workSection
const workPopupBox = document.getElementById("work-popup-box");
function toggleWorkSection () {
    workPopupBox.classList.toggle("popup");
}

// skillSection
const skillPopupBox = document.getElementById("skill-popup-box");
function toggleSkillSection () {
    skillPopupBox.classList.toggle("popup");
}

// contactSection

const contactPopupBox = document.getElementById("contact-popup-box");
function toggleContactSection () {
    contactPopupBox.classList.toggle("popup");
}

// applying about info from json

fetch("./aboutInfo.json")
.then(function (response) {
    return response.json();
})
.then(function (aboutInfos) {
    let aboutPlaceholder = document.getElementById("aboutPlaceholder");
    let about = "";
    for (let aboutInfo of aboutInfos) {
        about += `
            <li>
                ${aboutInfo.school} <${aboutInfo.years}>
                <hr />
                ${aboutInfo.programName}
            </li>
        `
    }
    aboutPlaceholder.innerHTML = about;
});

// applying work info from json

fetch("./projectsInfo.json")
.then(function (response) {
    return response.json();
})
.then(function (works) {
    let workPlaceholder = document.getElementById("workPlaceholder");
    let eachWork = "";
    for (let work of works) {
        eachWork += `
        <div class="row each-work">
            <div class="col-md-8">
                <img src="${work.projectImg}" alt="${work.projectName}" class="work-img" onclick="showWorkDescriptionSection()">
            </div>

            <div class="col-md-4">
                <div class="work-name">
                    ${work.projectName}
                    
                </div>
                <p>${work.language}</p>
                <a href="${work.projectLink}" class="btn btn-primary">
                    ${work.buttonText}
                </a>
            </div>
        </div>
        <hr>
        `;
    }

    workPlaceholder.innerHTML = eachWork;
});

// applying achievements info from json

fetch("./achievementsInfo.json")
.then(function (response) {
    return response.json();
})
.then(function (achievements) {
    let achievementPlaceholder = document.getElementById("achievementPlaceholder");
    let eachAchievement = "";
    for (let achievement of achievements) {
        eachAchievement += `
        <div class="row each-work">
            <div class="col-md-8">
                <img src="${achievement.achievementImg}" alt="${achievement.achievementName}" class="work-img" onclick="showWorkDescriptionSection()">
            </div>

            <div class="col-md-4">
                <div class="work-name">
                    ${achievement.achievementName}
                    
                </div>
                <a href="${achievement.achievementLink}" class="btn btn-primary">
                    ${achievement.buttonText}
                </a>
            </div>
        </div>
        <hr>
        `;

        
    }

    achievementPlaceholder.innerHTML = eachAchievement;
});

// applying skill info from json

fetch("./skillsInfo.json")
.then(function (response) {
    return response.json();
})
.then(function (skills) {
    let skillPlaceholder = document.getElementById("skillPlaceholder");
    eachSkill = "";
    for (let skill of skills) {
        eachSkill += `
            <div class="col-3 each-skill">
                <img src="${skill.imgSrc}" alt="${skill.name}" width="25px">
                <p>${skill.name}</p>
            </div>
        `;
    }

    skillPlaceholder.innerHTML = eachSkill;
})
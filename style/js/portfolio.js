portfolio = [
  makeProject(
    "WHACK-Bot",
    "Best Hack, WHACK 2018",
    "./img/projects/whackbot.png",
    "A chat-bot that delivers preventative mental health care via Facebook Messenger.",
    ["Python", "Flask", "Facebook Developer Tools"],
    "https://github.com/angelinahli/whack-2018/"
  ),
  makeProject(
    "The Bachelor and Race",
    "",
    "./img/projects/bachelor.png",
    "A Dash-based data visualization exploring the intersection between the ABC Bachelor franchise and race.",
    ["Python", "Dash", "Flask", "Pandas"],
    "https://bachelor-and-race.herokuapp.com/"
  ),
  makeProject(
    "Crossword Extravaganza",
    "Final Project, MIT 6.031 - Elements of Software Construction",
    "./img/projects/crossword.png",
    "A thread-safe, interactive crossword solving game, where users compete to solve a crossword puzzle together.",
    ["Java"],
    ""
  ),
  makeProject(
    "Better Than Tutor Trac",
    "Final Project, Wellesley CS 304 - Databases with Web Interfaces",
    "./img/projects/bttt.png",
    "An app to efficiently log visits to tutor drop-in office hours. Inspired by the 'TutorTrac' software used at Wellesley's Pforzheimer Learning and Teaching Center.",
    ["Python", "JavaScript", "MySQL", "Flask"],
    "https://github.com/angelinahli/tt3/"
  ),
  makeProject(
    "Meet Me",
    "Best Hack, SisterHacks 2018",
    "./img/projects/meet_me.png",
    "A web application that helps users plan events based on their existing calendars.",
    ["Python", "Flask"],
    "https://github.com/angelinahli/meet-me/"
  ),
  makeProject(
    "Rain Run",
    "Final Project, Wellesley CS 230 - Data Structures",
    "./img/projects/rain_run.png",
    "An interactive, multi-panel game where the user navigates via keystrokes and dodges progressively faster falling rain drops.",
    ["Java"],
    "https://github.com/angelinahli/rain-run/"
  ),
  makeProject(
    "Hangman Solver",
    "",
    "./img/projects/hangman_solver.png",
    "A minimalist Flask app that uses text-frequency analysis to solve hangman words.",
    ["Python", "Flask"],
    "https://hangman-solver.herokuapp.com/"
  )
]

function makeProject(name, subtitle, imageSrc, description, technologies, link) {
  return {
    name: name,
    subtitle: subtitle,
    imageSrc: imageSrc,
    description: description,
    technologies: technologies,
    link: link
  }
}

function getRow(project) {
  var row = document.createElement("div");
  row.setAttribute("class", "row row-project");

  var leftCol = document.createElement("div");
  leftCol.setAttribute("class", "col-lg-6 col-md-6 mx-auto");

  var rightCol = document.createElement("div");
  rightCol.setAttribute("class", "col-lg-6 col-md-6 mx-auto");

  var image = `<img src="${project.imageSrc}" alt="${project.name}" class="img-fluid rounded">`
  var title = `<h4>${project.name}</h4>`;
  var subtitle = `<p class="lead">${project.subtitle}</p>`;
  var desc = `<p>${project.description}</p>`;
  var tech = `<p class="card-text"><i class="fa fa-wrench"></i> ${project.technologies.join(", ")}</p>`;
  var btn = `<a href="${project.link}" type="button" class="btn btn-primary">View Project</a>`;

  var rightColHTML = title;
  if(project.subtitle) { rightColHTML += subtitle; }
  rightColHTML += desc + tech;
  if(project.link) { rightColHTML += btn; }

  $(leftCol).html( image );
  $(rightCol).html( rightColHTML );

  row.appendChild(leftCol);
  row.appendChild(rightCol);

  return row;
}

function addPortfolio() {
  var container = document.getElementById("portfolioContent");
  
  for(const project of portfolio) {
    $(container).append( getRow(project) );
  }
}

addPortfolio();


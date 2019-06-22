portfolio = [
  makeProject(
    "WHACK-Bot",
    "Best Hack, WHACK 2018",
    "./img/projects/whackbot.png",
    "A chat-bot that delivers preventative mental health care via Facebook Messenger.",
    ["Python", "Flask", "Facebook Developer Tools"],
    "https://github.com/angelinahli/whack-2018/",
    true
  ),
  makeProject(
    "The Bachelor and Race",
    "",
    "./img/projects/bachelor.png",
    "A Dash-based data visualization exploring the intersection between the ABC Bachelor franchise and race.",
    ["Python", "Dash", "Flask", "Pandas"],
    "https://bachelor-and-race.herokuapp.com/",
    false
  ),
  makeProject(
    "Crossword Extravaganza",
    "Final Project, MIT 6.031 - Elements of Software Construction",
    "./img/projects/crossword.png",
    "A thread-safe, interactive crossword solving game, where users compete to solve a crossword puzzle together.",
    ["Java"],
    "",
    false
  ),
  makeProject(
    "Better Than Tutor Trac",
    "Final Project, Wellesley CS 304 - Databases with Web Interfaces",
    "./img/projects/bttt.png",
    "An app to efficiently log visits to tutor drop-in office hours. Inspired by the 'TutorTrac' software used at Wellesley's Pforzheimer Learning and Teaching Center.",
    ["Python", "JavaScript", "MySQL", "Flask"],
    "https://github.com/angelinahli/tt3/",
    false
  ),
  makeProject(
    "Meet Me",
    "Best Hack, SisterHacks 2018",
    "./img/projects/meet_me.png",
    "A web application that helps users plan events based on their existing calendars.",
    ["Python", "Flask"],
    "https://github.com/angelinahli/meet-me/",
    false
  ),
  makeProject(
    "Rain Run",
    "Final Project, Wellesley CS 230 - Data Structures",
    "./img/projects/rain_run.png",
    "An interactive, multi-panel game where the user navigates via keystrokes and dodges progressively faster falling rain drops.",
    ["Java"],
    "https://github.com/angelinahli/rain-run/",
    false
  ),
  makeProject(
    "Hangman Solver",
    "",
    "./img/projects/hangman_solver.png",
    "A minimalist Flask app that uses text-frequency analysis to solve hangman words.",
    ["Python", "Flask"],
    "https://hangman-solver.herokuapp.com/",
    false
  )
]

function makeProject(name, subtitle, imageSrc, description, technologies, link, active) {
  return {
    name: name,
    subtitle: subtitle,
    imageSrc: imageSrc,
    description: description,
    technologies: technologies,
    link: link,
    active: active
  }
}

function getCarouselItem(project) {
  carouselItem = document.createElement("div");
  if(project.active) { carouselItem.setAttribute("class", "carousel-item active"); }
  else { carouselItem.setAttribute("class", "carousel-item"); }

  card = document.createElement("div");
  card.setAttribute("class", "card bg-dark text-light");

  cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card-img-top");
  cardImg.setAttribute("src", project.imageSrc);
  cardImg.setAttribute("alt", project.name);

  cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  title = `<h5 class="card-title">${project.name}</h5>`;
  subtitle = `<h6 class="card-subtitle text-muted">${project.subtitle}</h6>`;
  desc = `<p class="card-text">${project.description}</p>`;
  tech = `<p class="card-text">Technologies used: ${project.technologies.join(", ")}</p>`;
  btn = `<a href="${project.link}" target="_blank" class="btn btn-primary">Go to project</a>`;

  cardBody.innerHTML += title;
  if(project.subtitle) { cardBody.innerHTML += subtitle; }
  cardBody.innerHTML += `<hr>`;
  cardBody.innerHTML += desc;
  cardBody.innerHTML += tech;
  if(project.link) { cardBody.innerHTML += btn; }

  card.appendChild(cardImg);
  card.appendChild(cardBody);

  carouselItem.appendChild(card);
  return carouselItem;
}

function getNavButton(carouselId, dataSlide, label) {
  btn = document.createElement("a");
  btn.setAttribute("class", `carousel-control-${dataSlide}`);
  btn.setAttribute("href", `#${carouselId}`);
  btn.setAttribute("role", "button");
  btn.setAttribute("data-slide", dataSlide);

  icon = document.createElement("span");
  icon.setAttribute("class", `carousel-control-${dataSlide}-icon`);
  icon.setAttribute("aria-hidden", "true");

  sr = document.createElement("span");
  sr.setAttribute("class", "sr-only");
  sr.innerHTML = label;

  btn.appendChild(icon);
  btn.appendChild(sr);

  return btn;
}

function addCarousel() {
  contentWrapper = document.getElementById("portfolioContent");

  carousel = document.createElement("div");
  carouselId = "carouselPortfolio";
  carousel.setAttribute("id", carouselId);
  carousel.setAttribute("class", "carousel slide carousel-fade");
  carousel.setAttribute("data-ride", "carousel");
  carousel.setAttribute("data-interval", "false");

  carouselInner = document.createElement("div");
  carouselInner.setAttribute("class", "carouselInner");
  for(const project of portfolio) {
    carouselInner.appendChild( getCarouselItem(project) );
  }

  carousel.appendChild(carouselInner);

  contentWrapper.appendChild(carousel);
  contentWrapper.appendChild( getNavButton(carouselId, "prev", "Previous") );
  contentWrapper.appendChild( getNavButton(carouselId, "next", "Next") );
}

addCarousel();


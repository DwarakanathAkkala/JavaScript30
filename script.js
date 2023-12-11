const data = [
    {
        title: "JavaScript Drumkit",
        subtitle: "Drumkit with keys using JavaScript",
        image: './01 - JavaScript Drumkit/design.png',
        link: './01 - JavaScript Drumkit/'
    },
    {
        title: "CSS + JS Clock",
        subtitle: "Simple Clock",
        image: './02 - JS Clock/design.png',
        link: './02 - JS Clock/'
    },
    {
        title: "Scope CSS variables",
        subtitle: "Update CSS variables with JS",
        image: './03 - Update CSS variable using JS/design.png',
        link: './03 - Update CSS variable using JS/'
    },
];

const section = document.querySelector('.projects');

data.forEach(ele => {
    section.innerHTML += `
    <div class="card">
        <img src="${ele.image}" alt="Card Image 1">
        <div>
            <h5>${ele.title}</h5>
            <p>${ele.subtitle}</p>
            <a href="${ele.link}"> Check out <i class="uil uil-arrow-up-right"></i></a>
        </div>
    </div>`;
});
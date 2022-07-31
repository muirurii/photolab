const introTextCont = document.querySelector(".intro p");

const introText = `Our HD lenses await to capture your, memories with the best shots.`;

const withSpan = [...introText].map((letter, index) => {
    return `<span class="fade-text" style='animation-delay:${index * 40}ms;'>${letter === "," ? "</br>" : letter}</span>`;
});

introTextCont.innerHTML = withSpan.join("");

//Gallery

const imageContainers = document.querySelectorAll(".image");

const imageObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            } else {
                entry.target.classList.remove("reveal");
            }
        });
    }, {
        threshold: 0.3,
    }
);

imageContainers.forEach((cont) => imageObserver.observe(cont));

const serviceContainers = document.querySelectorAll("#services article");

const serviceObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-service");
            } else {
                entry.target.classList.remove("show-service");
            }
        });
    }, {
        threshold: 0.3,
    }
);

serviceContainers.forEach((cont) => serviceObserver.observe(cont));
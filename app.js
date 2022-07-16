const introTextCont = document.querySelector(".intro-text p");

const introText = `Life is a collection of all your moments.We offer competent photography and editing services.Our HD lenses await to capture your best memories with the best shots.`;

const withSpan = [...introText].map((letter, index) => {
    return `<span style='animation-delay:${index * 20}ms;'>${letter}</span>${
        letter === "." ? "</br>" : ""
      }`;
});

const callToAction = document.querySelector(".cta");
const totalTime = introText.length * 20;

callToAction.style.animationDelay = `${totalTime}ms`;
callToAction.style.animationDuration = "300ms";

introTextCont.innerHTML = withSpan.join("");

/*
    Gallery
*/

// Scroll effect

const gallery = document.getElementById("gallery");

const galleryObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const scroll = gallery.clientHeight - window.innerHeight - 300;
                console.log(entry.target.clientTop);
                // window.scrollTo(0, scroll);
                console.log(scroll);
            }
        });
    }, {
        threshold: 0.1,
    }
);

galleryObserver.observe(gallery);

//Images animation

const imageContainers = document.querySelectorAll(".image");

const imageObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                // imageObserver.unobserve(entry.target);
            } else {
                entry.target.classList.remove("reveal");
            }
        });
    }, {
        threshold: 0.5,
    }
);

imageContainers.forEach((cont) => imageObserver.observe(cont));

//Zoom in

const zoomInBtns = document.querySelectorAll(".zoom-in");
const zoomedCont = document.querySelector(".zoomed");
const zoomOutBtn = zoomedCont.querySelector(".zoom-out");
// const images = document.querySelectorAll('.image img');

const setImage = (src) => (zoomedCont.querySelector("img").src = src);

const handleZoomIn = (e) => {
    const src = e.target.previousElementSibling.src;
    setImage(src);
    zoomedCont.classList.add("show-image");
};

zoomInBtns.forEach((button) => {
    button.addEventListener("click", handleZoomIn);
});

const handleZoomOut = () => {
    zoomedCont.classList.remove("show-image");
    setImage("");
};

zoomOutBtn.addEventListener("click", handleZoomOut);

/*
Booking
*/

//Form change

const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".prev");
const forms = document.querySelectorAll(".form-group");
const steps = document.querySelectorAll(".step");

const handleStep = (activeEl) => {
    const index = Array.from(forms).findIndex((element) => element === activeEl);
    document.querySelector(".active").classList.remove("active");
    steps[index].classList.add("active");
};

const validateForm = form => {
    const inputs = [...form.querySelectorAll('input'), ...form.querySelectorAll('select')];
    const invalid = inputs.some(i => i.value.trim().length < 1);
    return invalid;
}

const handeNextForm = (e) => {
    e.preventDefault();
    const curentActiveForm = e.target.parentElement.parentElement;
    const validator = validateForm(curentActiveForm);
    console.log(validator)
    if (validator) return;
    curentActiveForm.className = "form-group";
    const activeForm = curentActiveForm.nextElementSibling;
    activeForm.className = "form-group active right";
    handleStep(activeForm);
};

nextBtn.forEach((button) => button.addEventListener("click", handeNextForm));

const handlePrevForm = (e) => {
    e.preventDefault();
    const curentActiveForm = e.target.parentElement.parentElement;
    curentActiveForm.className = "form-group";
    const activeForm = curentActiveForm.previousElementSibling;
    activeForm.className = "form-group active left";
    handleStep(activeForm);
};

prevBtn.forEach((button) => button.addEventListener("click", handlePrevForm));

//submit

const form = document.querySelector('.booking-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm()
})
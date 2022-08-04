//Menu
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    const isMenuOpen = menu.classList.contains("open-menu");
    if (isMenuOpen) {
        menu.classList.remove("open-menu");
    } else {
        menu.classList.add("open-menu");
    }
});

//Hero

const introTextCont = document.querySelector(".intro p");

const introText = `Our HD lenses await to capture your, memories with the best shots.`;

const withSpan = [...introText].map((letter, index) => {
    return `<span class="opacity-0" style='animation: text 200ms linear forwards; animation-delay:${
    index * 40
  }ms;'>${letter === "," ? "</br>" : letter}</span>`;
});

introTextCont.innerHTML = withSpan.join("");


//Accent

const heroAccent = document.querySelector(".hero-accent");

const accentObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(3)
                entry.target.classList.add("animate")
            } else {
                console.log(6)
                entry.target.classList.remove("animate");
            }
        });
    }, {
        threshold: 0.4,
    }
);

accentObserver.observe(heroAccent);

//About

const aboutCont = document.querySelectorAll(".about-card");

const aboutObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelector('img').classList.add("show-image");
            } else {
                entry.target.querySelector('img').classList.remove("show-image");
            }
        });
    }, {
        threshold: 0.4,
    }
);

aboutCont.forEach((cont) => aboutObserver.observe(cont));

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
        threshold: 0.4,
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

//Booking

const bookingForm = document.querySelector(".book");
const inputs = bookingForm.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        if (e.target.value) {
            e.target.nextElementSibling.classList.add("-translate-y-16");
        } else {
            e.target.nextElementSibling.classList.remove("-translate-y-16");
        }
    });
});

//Scroll to booking

const bookingBtns = document.querySelectorAll("#services button");

bookingBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        const selectService = e.target.getAttribute("data-service-val");
        scrollToBooking();
        bookingForm
            .querySelector(`input[value=${selectService}]`)
            .setAttribute("checked", true);
    });
});

const scrollToBooking = () => {
    const s = bookingForm.parentElement.offsetTop;
    window.scrollTo(0, s)
};

document.querySelector(".cta").addEventListener("click", scrollToBooking);
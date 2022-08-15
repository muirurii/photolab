//Menu
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
let isClicked = false;

function closeMenu() {
    menu.classList.toggle("open-menu");
    menuBtn.classList.toggle("btn-open");
}

menuBtn.addEventListener("click", () => {
    closeMenu();
    if (isClicked) return;
    menu.classList.add("transition-all");
    menu.classList.add("duration-300");
    menu.classList.add("ease-in-out");
    isClicked = true;
});

menu.addEventListener("click", () => {
    window.innerWidth >= 640 ? null : closeMenu();
});

const menuItems = menu.querySelectorAll("span");

function generateSpans(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const delay = `${50 * i}ms`;
        result += `<span class="group-hover:text-secondary sm:group-hover:bounce inline-block transition-colors origin-left ease-linear duration-300" style="transition-delay:${delay}; animation-delay:${delay};" >${
      str[i] === " " ? "&nbsp;" : str[i]
    }</span>`;
    }
    return result;
}

menuItems.forEach((item) => {
    const text = item.textContent;
    item.innerHTML = generateSpans(text);
    item.parentElement.parentElement.style.transitionDuration = `${
    text.length * 50 + 600
  }ms`;
});

//Hero

const introTextCont = document.querySelector(".intro p");

const introText = `Our HD lenses await to capture your, moments with the best shots.`;

const withSpan = [...introText].map((letter, index) => {
    return `<span class="opacity-0" style='animation: text 200ms linear forwards; animation-delay:${
    index * 40
  }ms;'>${letter === "," ? "</br>" : letter}</span>`;
});

introTextCont.innerHTML = withSpan.join("");

//Accent

const heroAccent = document.querySelector(".hero-accent");

const accentObserver = new IntersectionObserver(
    (entries) =>
    entries.forEach((entry) => {
        entry.isIntersecting ?
            entry.target.classList.add("animate") :
            entry.target.classList.remove("animate");
    }), {
        threshold: 0.4,
    }
);

accentObserver.observe(heroAccent);

//Header scroll

const mark = document.querySelector(".hero");
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");

const headerObserver = new IntersectionObserver(
    (entries) =>
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.add("scrolled");
            toTop.classList.add("show-to-top");
        } else {
            header.classList.remove("scrolled");
            toTop.classList.remove("show-to-top");
        }
    }), {
        threshold: 0.1,
    }
);

headerObserver.observe(mark);
toTop.addEventListener("click", () => window.scrollTo(0, 0));

//About

const aboutCont = document.querySelectorAll(".about-card");

const aboutObserver = new IntersectionObserver(
    (entries) =>
    entries.forEach((entry) => {
        entry.isIntersecting ?
            entry.target.querySelector("img").classList.add("show-image") :
            entry.target.querySelector("img").classList.remove("show-image");
    }), {
        threshold: 0.4,
    }
);

aboutCont.forEach((cont) => aboutObserver.observe(cont));

//Gallery

const imageContainers = document.querySelectorAll(".image");

const imageObserver = new IntersectionObserver(
    (entries) =>
    entries.forEach((entry) => {
        entry.isIntersecting ?
            entry.target.classList.add("reveal") :
            entry.target.classList.remove("reveal");
    }), {
        threshold: 0.1,
    }
);

imageContainers.forEach((cont) => imageObserver.observe(cont));

const serviceContainers = document.querySelectorAll("#services article");

const serviceObserver = new IntersectionObserver(
    (entries) =>
    entries.forEach((entry) => {
        entry.isIntersecting ?
            entry.target.classList.add("show-service") :
            entry.target.classList.remove("show-service");
    }), {
        threshold: 0.3,
    }
);

serviceContainers.forEach((cont) => serviceObserver.observe(cont));

//Booking

const bookingForm = document.querySelector(".book");
const inputs = bookingForm.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        e.target.value ?
            e.target.nextElementSibling.classList.add("-translate-y-16") :
            e.target.nextElementSibling.classList.remove("-translate-y-16");
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
    const fromTop = bookingForm.parentElement.parentElement.offsetTop;
    window.scrollTo(0, fromTop);
};

document.querySelector(".cta").addEventListener("click", scrollToBooking);

//Testimonials

const customers = document.querySelectorAll(".customer");
const switchBtns = Array.from(document.querySelectorAll(".switch"));
let intervalIndex = 0;
let interval;

function autoOscillate(i = intervalIndex) {
    clearInterval(interval);
    interval = setInterval(() => autoOscillate(), 3000);
    intervalIndex = intervalIndex >= 2 ? 0 : ++intervalIndex;
    const activeBtn = document.querySelector(".current-btn");
    const nextBtn = switchBtns[intervalIndex];
    activeBtn.classList.remove("current-btn");
    nextBtn.classList.add("current-btn");
    const currTransfOrigin =
        intervalIndex > i ? "translate-x-full" : "-translate-x-full";
    const activeCard = document.querySelector(".current");
    activeCard.classList.remove("current");
    activeCard.classList.remove("translate-x-full");
    activeCard.classList.remove("-translate-x-full");
    customers[intervalIndex].classList.add("current");
    customers[intervalIndex].classList.add(currTransfOrigin);
}

autoOscillate(null);

function switchCards(e) {
    const prevIndex = intervalIndex;
    const currIndex = switchBtns.findIndex((btn) => btn === e.target);
    if (intervalIndex === currIndex) return;
    intervalIndex = currIndex - 1;
    autoOscillate(prevIndex);
}

switchBtns.forEach((button) => {
    button.addEventListener("click", switchCards);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".loader").classList.add("scale-y-0");
});
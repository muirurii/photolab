const introTextCont = document.querySelector(".intro p");

const introText = `Our HD lenses await to capture your, memories with the best shots.`;

const withSpan = [...introText].map((letter, index) => {
    return `<span style='animation-delay:${index * 20}ms;'>${letter === "," ? "</br>" : letter}</span>`;
});

introTextCont.innerHTML = withSpan.join("");
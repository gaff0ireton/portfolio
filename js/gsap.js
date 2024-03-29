// Hero text animations
// const tl = gsap.timeline();

// tl.from("#hero-logo", {
//     scale: 0,
//     duration: 0.6,
// })
//     .from("#tagline-text", {
//         text: "",
//         duration: 1,
//     })
//     .from("#date-text", {
//         text: "",
//         duration: 1,
//     });

const sectionTitles = gsap.utils.toArray(".titleBox");

sectionTitles.forEach((sectionTitle) => {
    const tl_Gallery = gsap.timeline({
        scrollTrigger: {
            trigger: sectionTitle,
            start: "top 70%",
            end: "+=400",
        },
    });

    const q = gsap.utils.selector(sectionTitle);
    const groups = q(".code");

    groups.forEach((group) => {
        tl_Gallery.from(group, { text: textJumble(10), duration: 0.4 }, ">");
    });

});

const aboutSec = document.querySelectorAll(".aboutText");

const as_Gallery = gsap.timeline({
    scrollTrigger: {
        trigger: aboutSec,
        start: "top 50%",
        end: "+=400",
    }
});

const asGroups = document.querySelectorAll(".TextTyping");

asGroups.forEach((atItem) => {
    as_Gallery.from(atItem, { text: textJumble(35), duration: 0.4 }, ">");
});

function textJumble(length) {
    let result = "";
    const characters = `!"£$%^&*()SYSTEM_+{}:@<>?,./;'[]¬¦#~ERROR`;
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


// Pre-order sliding
// const editionCards = document.querySelectorAll(".edition");

// for (let card of editionCards) {
//     card.addEventListener("click", function () {
//         for (let openCard of editionCards) {
//             openCard.classList.remove("open");
//         }
//         this.classList.add("open");
//     });
// }

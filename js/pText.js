let arr = [];

function TypingInit() {
    document.querySelectorAll('.js_typing').forEach((element, i) => {
        arr[i] = new ShuffleText(element);
    });
}

function TypingAnime() {
    document.querySelectorAll(".js_typing").forEach((element, i) => {
        const elemPos = element.offsetTop - 50;
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scroll >= elemPos - windowHeight) {
            if (!element.classList.contains("endAnime")) {
                arr[i].start();
                arr[i].duration = 800;
                element.classList.add("endAnime");
            }
        } else {
            element.classList.remove("endAnime");
        }
    });
}

window.addEventListener('scroll', function () {
    TypingAnime();
});

window.addEventListener('load', function () {
    TypingInit();
    TypingAnime();
});
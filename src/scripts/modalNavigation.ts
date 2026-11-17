export function setupModalNavigation(modals: NodeListOf<HTMLDialogElement>) {
    modals.forEach((modal, index) => {

        const btns = modal.querySelectorAll<HTMLButtonElement>(
            '.worksModal__next, .worksModal__prev'
        );

        btns.forEach((btn) => {

            btn.addEventListener('click', () => {
                modal.close();
                const nextIndex = btn.classList.contains('worksModal__next') ? (index + 1) % modals.length : (index - 1 + modals.length) % modals.length;

                modals[nextIndex].showModal();
            })
        })
    });
}



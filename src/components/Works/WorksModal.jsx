import { useEffect, useRef } from "react";

export default function WorksModal({ works, state, setShow, clickedIndex, nextFunc, prevFunc }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (state) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [state]);

    return (
        <dialog className="worksModal" ref={dialogRef}>
            <article className="worksModal__inner" key={works[clickedIndex].id} data-work-id={works[clickedIndex].id}>
                <div className="worksModal__header">
                    <button className="worksModal__back" type="button"
                        onClick={() => setShow(false)}>
                        ◀︎BACK
                    </button>
                    <p className="worksModal__number">
                        <span>{String(clickedIndex + 1).padStart(2, '0')}</span>
                        <span>/{String(works.length).padStart(2, '0')}</span>
                    </p>
                </div>
                <div className="worksModal__body">
                    <div className="worksModal__img">
                        <img src={works[clickedIndex].image} alt={works[clickedIndex].title} />
                    </div>
                    <div className="worksModal__textBox">
                        <hgroup className="worksModal__heading">
                            <p className="worksModal__label">{works[clickedIndex].category}</p>
                            <h3 className="worksModal__title">{works[clickedIndex].title}</h3>
                            <p className="worksModal__client">{works[clickedIndex].client}</p>
                        </hgroup>
                        <dl className="worksModal__detail">
                            <div>
                                <dt>role</dt>
                                <dd>{works[clickedIndex].role.join(' / ')}</dd>
                            </div>
                            <div>
                                <dt>year</dt>
                                <dd>{works[clickedIndex].year}</dd>
                            </div>
                            <div>
                                <dt>tech</dt>
                                <dd>{works[clickedIndex].tech.join(' / ')}</dd>
                            </div>
                        </dl>
                        <p className="worksModal__caption">{works[clickedIndex].description}</p>
                        <a href={works[clickedIndex].url} className="view-site" target="_blank">
                            view site
                        </a>
                    </div>
                </div>
                <div className="worksModal__nav" aria-label="作品の切り替え">
                    <button
                        className="worksModal__prev"
                        type="button"
                        onClick={prevFunc}>
                        PREV
                    </button>
                    <button
                        className="worksModal__next"
                        type="button"
                        onClick={nextFunc}>
                        NEXT
                    </button>
                </div>
            </article>
        </dialog>
    )
}
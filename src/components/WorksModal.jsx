import { useEffect, useRef } from "react";

export default function WorksModal({ works, state, setShow, clickedIndex }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (state) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [state]);

    useEffect(() => {
        console.log(clickedIndex);
        const work = works[clickedIndex];

    }, [clickedIndex])

    return (
        <dialog className="worksModal" ref={dialogRef}>
            {works.map((work, index, array) => {
                return (
                    <article className="worksModal__inner" key={work.id} data-work-id={work.id}>
                        <div className="worksModal__header">
                            <button className="worksModal__back" type="button"
                                onClick={() => setShow(false)}>
                                BACK
                            </button>
                            <p className="worksModal__number">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <span>/{String(array.length).padStart(2, '0')}</span>
                            </p>
                        </div>
                        <div className="worksModal__body">
                            <div className="worksModal__img">
                                <img src={work.image} alt={work.title} />
                            </div>
                            <div className="worksModal__textBox">
                                <hgroup className="worksModal__heading">
                                    <p className="worksModal__label">{work.category}</p>
                                    <h3 className="worksModal__title">{work.title}</h3>
                                    <p className="worksModal__client">{work.client}</p>
                                </hgroup>
                                <dl className="worksModal__detail">
                                    <div>
                                        <dt>role</dt>
                                        <dd>{work.role.join(' / ')}</dd>
                                    </div>
                                    <div>
                                        <dt>year</dt>
                                        <dd>{work.year}</dd>
                                    </div>
                                    <div>
                                        <dt>tech</dt>
                                        <dd>{work.tech.join(' / ')}</dd>
                                    </div>
                                </dl>
                                <p className="worksModal__caption">{work.description}</p>
                                <a href={work.url} className="view-site" target="_blank">
                                    view site
                                </a>
                            </div>
                        </div>
                        <div className="worksModal__nav" aria-label="作品の切り替え">
                            <button className="worksModal__prev" type="button">
                                PREV
                            </button>
                            <button className="worksModal__next" type="button">
                                NEXT
                            </button>
                        </div>
                    </article>
                );
            })}
        </dialog>
    )
}
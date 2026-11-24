import { useState } from "react";
import WorksModal from "./WorksModal";
import { works } from "../../data/works";
const featuredWorks = works.slice(0, 5);

export default function Works({ works }) {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % works.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + works.length) % works.length);
    };

    return (
        <div className="works">
            {
                works.map((work, index, array) => {
                    return (
                        <article className="worksCard" key={work.id}>
                            <span className="corner corner--tl" />
                            <span className="corner corner--tr" />
                            <span className="corner corner--bl" />
                            <span className="corner corner--br" />

                            <p className="worksCard__number">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <span>/{String(array.length).padStart(2, '0')}</span>
                            </p>

                            <div className="worksCard__image">
                                <img src={work.image} alt={work.title} />
                            </div>

                            <div className="worksCard__content">
                                <hgroup className="worksCard__heading">
                                    <p className="worksCard__label">{work.category}</p>
                                    <h3 className="worksCard__title">{work.title}</h3>
                                    <p className="worksCard__client">{work.client}</p>
                                </hgroup>
                                <dl className="worksCard__detail">
                                    <div>
                                        <dt>role</dt>
                                        <dd>{work.role}</dd>
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
                                <p className="worksCard__caption">{work.description}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setShow(true)
                                    setCurrentIndex(index)
                                }}
                                className="view-project" data-work-id={work.id}>
                                view project
                            </button>
                        </article>
                    );
                })
            }
            <WorksModal works={featuredWorks} state={show} setShow={setShow} clickedIndex={currentIndex} nextFunc={handleNext} prevFunc={handlePrev} />
        </div>
    )
}

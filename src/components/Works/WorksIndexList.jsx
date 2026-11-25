import { useState } from 'react'
import WorksModal from './WorksModal';


export default function WorksIndexList({ works }) {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % works.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + works.length) % works.length);
    };

    return (
        <>
            <div className="worksIndex__inner">
                {
                    works.map((work, index) => {
                        return (
                            <article
                                className="worksIndex__item view-project"
                                data-work-id={work.id}
                                onClick={() => {
                                    setShow(true)
                                    setCurrentIndex(index)
                                }}
                                key={work.id}>
                                <div className="worksIndex__image">
                                    <img src={work.image} alt={work.title} />
                                </div>
                                <p className="workIndex__label">{work.category}</p>
                                <h3 className="worksIndex__name">{work.title}</h3>
                                <div className="worksIndex__tech">{work.tech.join(' / ')}</div>
                            </article>
                        );
                    })
                }
            </div>
            <WorksModal
                works={works}
                state={show}
                setShow={setShow}
                clickedIndex={currentIndex}
                nextFunc={handleNext}
                prevFunc={handlePrev} />
        </>
    )
}

export default function Works({ works }) {
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
                            <button type="button" className="view-project" data-work-id={work.id}>
                                view project
                            </button>
                        </article>
                    );
                })
            }
        </div>
    )
}

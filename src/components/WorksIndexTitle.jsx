import React from 'react'

export default function WorksIndexTitle({ title, subTitle }) {
    return (
        <h3 className="worksIndex__heading">
            <span className="glitch-text-02 worksIndex__icon" aria-hidden="true">
                〼
            </span>
            <span className="glitch-text-02 worksIndex__title">{title}</span>
            <span className="worksIndex__subtitle">{subTitle}</span>
        </h3>
    )
}

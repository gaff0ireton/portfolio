import React from 'react'

export default function WorksIndexTitle({ title, subTitle }) {
    return (
        <h3 class="worksIndex__heading">
            <span class="glitch-text-02 worksIndex__icon" aria-hidden="true">
                〼
            </span>
            <span class="glitch-text-02 worksIndex__title">{title}</span>
            <span class="worksIndex__subtitle">{subTitle}</span>
        </h3>
    )
}


import { useEffect, useState, useRef } from 'react'
import { sectionList } from '../data/sections'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRef = useRef(null);
    const navRef = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickClose = () => {
        setIsOpen(false)
    }

    // * エスケープキー押下で、ナビゲーション非表示
    // * button要素をキーボード操作可に

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    // * スクロールで、ナビゲーション非表示

    useEffect(() => {
        function handleScroll() {
            setIsOpen(false);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    // * ナビゲーション外部クリックで、ナビゲーション非表示

    useEffect(() => {
        function handleOutsideClick(event) {
            if (!navRef.current?.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <nav className={isOpen ? 'side-nav is-open' : 'side-nav'} ref={navRef}>
            <div className="side-nav__tab">
                <button
                    className="side-nav__button"
                    type="button"
                    aria-controls="side-nav-panel"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'ナビゲーションを閉じる' : 'ナビゲーションを開く'}
                    ref={buttonRef}
                    onClick={handleClick}
                >
                    NAVIGATION = CLICK TO OPEN
                </button>
            </div>

            <div
                className="side-nav__body"
                id="side-nav-panel"
                aria-hidden={!isOpen}
                inert={!isOpen}
            >
                <header><p>navigation</p></header>
                <ul>
                    {
                        sectionList.map((section, index) => (
                            <li key={section.id}>
                                <span className="number" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <a href={`#${section.id}`} data-text={section.title} onClick={handleClickClose}>
                                    {section.title}
                                </a>
                                <span className="line" aria-hidden="true" />
                            </li>
                        ))
                    }
                </ul>
                <footer><p>let's build<br />something great.</p></footer>
            </div>
        </nav>
    )
}

import { useMemo, useState } from "react";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurger = (action = null) => {
        switch (action) {
            case false:
                setIsBurgerOpen(false);
                break;
            case true:
                setIsBurgerOpen(true);
                break;
            default:
                setIsBurgerOpen((currentState) => !currentState);
                break;
        }
    };

    const generateAnimationDelay = () => {};

    const links = useMemo(() => {
        return [
            {
                title: "About me",
                link: "#about",
            },
            {
                title: "Skills",
                link: "#skills",
            },
            {
                title: "Portfolio",
                link: "#portfolio",
            },
            {
                title: "Contact me",
                link: "#contact",
                inverted: true,
            },
        ];
    }, []);

    return (
        <div className="Header">
            <div className={`Header__burger ${isBurgerOpen ? "Header__burger--open" : ""}`} onClick={handleBurger}>
                <span></span>
            </div>

            <ul className="Header__links">
                {links.map((link) => {
                    let linkIndex = links.findIndex((searchedLink) => searchedLink === link);
                    let animationTime = (linkIndex + 2) * 0.5;

                    return (
                        <li
                            tabIndex={linkIndex + 1}
                            key={link.title}
                            className={`Header__links-item ${link.inverted ? "Header__links-item--inverted" : ""}`}
                            style={{ transition: `left ${animationTime}s cubic-bezier(0, 0, 0.29, 0.94)` }}
                        >
                            <a className="Header__link" href={link.link} onClick={() => handleBurger(false)}>
                                {link.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Header;

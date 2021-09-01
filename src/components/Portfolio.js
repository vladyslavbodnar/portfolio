import { useMemo } from "react";

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

const Portfolio = () => {
    const portfolioItems = useMemo(() => {
        return [
            {
                title: "Weather",
                description: "Weather app. Using React",
                liveLink: "https://vladyslavbodnar.github.io/8-100---weather",
                sourceLink: "https://github.com/vladyslavbodnar/8-100---weather",
                image: "/images/weather.jpg"
            },
            {
                title: "Grid",
                description: "HTML + CSS coding",
                liveLink: "https://vladyslavbodnar.github.io/3-100---grid",
                sourceLink: "https://github.com/vladyslavbodnar/3-100---grid",
                image: "/images/grid.jpg"
            },
        ]
    }, [])

    return (
        <div className="Portfolio" id="portfolio">
            <div className="Portfolio__wrapper">
                <h2 className="Portfolio__title">Portfolio</h2>
                <div className="Portfolio__items">
                    {portfolioItems.map(portfolioItem => {
                        return (
                            <div className="Portfolio__item">
                                <div className="Portfolio__item-container">
                                    <h2 className="Portfolio__item-title">{portfolioItem.title}</h2>
                                    <p className="Portfolio__item-description">{portfolioItem.description}</p>
                                    <div className="Portfolio__item-link-container">
                                        <a className="Portfolio__item-link" href={portfolioItem.sourceLink} target="_blank" title="Souce code"><GitHubIcon /></a>
                                        <a className="Portfolio__item-link" href={portfolioItem.liveLink} target="_blank" title="Live version"><LinkIcon /></a>
                                    </div>
                                </div>
                                
                                <div className="Portfolio__item-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL + portfolioItem.image})`}}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio

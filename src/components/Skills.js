import { useMemo } from "react";

const Skills = () => {
    const skills = useMemo(() => {
        return [
            {
                title: "HTML",
                image: "/images/html5.png",
                type: "using",
            },
            {
                title: "CSS",
                image: "/images/css3.png",
                type: "using",
            },
            {
                title: "JavaScript",
                image: "/images/javascript.jpg",
                type: "using",
            },
            {
                title: "React",
                image: "/images/react.png",
                type: "using",
            },
            {
                title: "Redux",
                image: "/images/redux.png",
                type: "using",
            },
            {
                title: "Next",
                image: "/images/nextjs.svg",
                type: "using",
            },
            {
                title: "Git",
                image: "/images/git.png",
                type: "using",
            },
            {
                title: "Webpack",
                image: "/images/webpack.png",
                type: "using",
            },
            {
                title: "English B1",
                image: "/images/english.svg",
                type: "other",
            },
            {
                title: "Ukrainian C2",
                image: "/images/ukrainian.png",
                type: "other",
            },
            {
                title: "Russian C1",
                image: "/images/russian.png",
                type: "other",
            },
        ];
    }, []);

    return (
        <div className="Skills" id="skills">
            <h2 className="Skills__title">Skills</h2>

            <div className="Skills__items-wrapper">
                <h3 className="Skills__subtitle">Using now:</h3>
                <ul className="Skills__items">
                    {skills.map((skill) => {
                        if (skill.type === "using") {
                            return (
                                <li key={skill.title} className="Skills__item">
                                    <img className="Skills__item-image" src={process.env.PUBLIC_URL + skill.image} alt={skill.title} />
                                    <h3 className="Skills__item-title">{skill.title}</h3>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className="Skills__items-wrapper">
                <h3 className="Skills__subtitle">Learning:</h3>
                <ul className="Skills__items">
                    {!skills.find(skill => skill.type === "learning") ? <h3 style={{margin: 0}}>Many things..</h3> : null}
                    {skills.map((skill) => {
                        if (skill.type === "learning") {
                            return (
                                <li key={skill.title} className="Skills__item">
                                    <img className="Skills__item-image" src={process.env.PUBLIC_URL + skill.image} alt={skill.title} />
                                    <h3 className="Skills__item-title">{skill.title}</h3>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className="Skills__items-wrapper">
                <h3 className="Skills__subtitle">Other skills:</h3>
                <ul className="Skills__items">
                    {skills.map((skill) => {
                        if (skill.type === "other") {
                            return (
                                <li key={skill.title} className="Skills__item">
                                    <img className="Skills__item-image" src={process.env.PUBLIC_URL + skill.image} alt={skill.title} />
                                    <h3 className="Skills__item-title">{skill.title}</h3>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Skills;

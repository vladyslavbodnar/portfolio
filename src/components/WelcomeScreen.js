import snowBackground from "../assets/images/bukovel.jpg";
import emailLogo from "../assets/images/email.svg";
import githubLogo from "../assets/images/github.svg";
import linkedinLogo from "../assets/images/linkedin.svg";

const WelcomeScreen = () => {
    return (
        <div
            className="Welcome-screen"
            style={{
                backgroundImage: `url(${snowBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundAttachment: "fixed",
                width: "100%",
                minHeight: "100vh"
            }}
        >
            {/* make two different filters on background lighter and darken */}
            <h2 className="Welcome-screen__greetings">Hi, I am</h2>
            <h1 className="Welcome-screen__name">Vladyslav Bodnar</h1>
            <h3 className="Welcome-screen__role">Front-end Developer</h3>
            <p className="Welcome-screen__break-line"></p>
            <ul className="Welcome-screen__links">
                <li><a href="https://github.com/vladyslavbodnar" target="_blank"><img src={githubLogo} alt="GitHub" /></a></li>
                <li><a href="mailto:kinakth@gmail.com" target="_blank"><img src={emailLogo} alt="Email" /></a></li>
                <li><a href="https://linkedin.com/in/vladyslavbodnar" target="_blank"><img src={linkedinLogo} alt="LinkedIn" /></a></li>
            </ul>
        </div>
    )
}

export default WelcomeScreen

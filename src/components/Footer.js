import emailLogo from "../assets/images/email.svg";
import githubLogo from "../assets/images/github.svg";
import linkedinLogo from "../assets/images/linkedin.svg";

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Footer = () => {
    return (
        <footer className="Footer">
            <a
            href="#welcomeScreen"
            className="Footer__back-to-top"
            >
                <DoubleArrowIcon className="Footer__back-top-top-arrow" />
                Back to top
            </a>
            <div className="Footer__links">
                <a href="https://github.com/vladyslavbodnar" target="_blank"><img src={githubLogo} alt="GitHub" /></a>
                <a href="mailto:kinakth@gmail.com" target="_blank"><img src={emailLogo} alt="Email" /></a>
                <a href="https://linkedin.com/in/vladyslavbodnar" target="_blank"><img src={linkedinLogo} alt="LinkedIn" /></a>
            </div>
        </footer>
    )
}

export default Footer

import Avatar from "../../assets/avatar.png";
import IntagramLogo from "../../assets/instagram-logo.png";
import GitHubLogo from "../../assets/github-logo.png";
import LinkedInLogo from "../../assets/linkedin-logo.png";
import ArrowDown from "../../assets/arrow-down.png"

import {
    Container
} from "./styles";

const Home = () => {
    return (
        <Container data-section="home" id="home">
            <div className="content">
                <div className="image">
                    <img className="avatar" src={Avatar} alt="My picture" />
                </div>
                <div className="summary">
                    <h1 className="title">Vinicius Martins</h1>
                    <p className="description">Developer full-stack</p>
                    <div className="social-networks">
                        <a href="https://www.linkedin.com/in/vinicius-martins-0401381a0/">
                            <img className="social" src={LinkedInLogo} alt="my linkedin" />
                        </a>
                        <a href="https://www.instagram.com/is.not.defined/">
                            <img className="social" src={IntagramLogo} alt="my instagram" />
                        </a>
                        <a href="https://github.com/viniciusll">
                            <img className="social" src={GitHubLogo} alt="my github" />
                        </a>
                    </div>
                </div>
            </div>
            <a href="#projects" className="arrow-down-btn">
                <img className="arrow-down" src={ArrowDown} alt="go to next section" />
            </a>
        </Container>
    );
}

export default Home;
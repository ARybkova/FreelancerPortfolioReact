import "./style.css";
import gitHubIcon from "./gitHub-black.svg";

const ButtonGitHub = function ({link}) {
    return (
        <a href={link} rel="noreferrer" target="_blank" className="btn-outline">
            <img src={gitHubIcon} alt="" />
            GitHub repo
        </a>
    );
};

export default ButtonGitHub;
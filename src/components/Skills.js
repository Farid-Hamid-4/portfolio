// Components
import Icon from "../components/Icon.js";

// Data files
import iconsList from "../data/iconsData.js";

// Styling
import "../App.css";
import "./Skills.css";

export default function Skills() {
    return (
        <section id="skills-section">
            <div className="skills-container">
                <div className="skills-title"><h1 className="low-highlight">My Skills</h1></div>
                <div className="icons">
                    {Object.entries(iconsList).map(([iconKey, iconValue]) => (
                        <Icon key={iconKey} iconKey={iconKey} iconValue={iconValue}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
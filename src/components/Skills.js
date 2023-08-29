// Components
import Icon from "../components/Icon.js";

// Data files
import iconsList from "../data/iconsData.js";

// Styling
import "../styles/Global.css";
import "../styles/Skills.css";

export default function Skills() {
    return (
        <section id="skills-section">
            <div id="skills-container" className="section-margins">
                <h1 className="section-title">My Skills</h1>
                <ul id="icons">
                    {Object.entries(iconsList).map(([iconKey, iconValue]) => (
                        <Icon key={iconKey} iconKey={iconKey} iconValue={iconValue}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}
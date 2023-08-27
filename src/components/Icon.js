// Import from library
import { useState } from "react";

export default function Icon({ iconKey, iconValue }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <i key={iconKey} className={`devicon-${iconKey} ${isHovered ? "colored" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p>{iconValue}</p>
        </i>
    );
}
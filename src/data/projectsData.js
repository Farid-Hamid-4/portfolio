import vibefy from "../assets/images/vibefy.png";
import uogCourseMapping from "../assets/images/uog-course-mapping.png";
import imageProcessor from "../assets/images/image-processor.png";

const projectsList = [
    {
        "type":"FULL-STACK WEB APPLICATION", 
        "name":"Vibefy", 
        "technologies":{
            "javascript-plain": "JavaScript", 
            "react-original": "React", 
            "nodejs-plain": "Node.js",
            "amazonwebservices-original": "AWS", 
            "bootstrap-plain": "Bootstrap",
            "html5-plain": "HTML5", 
            "css3-plain": "CSS3",
        },
        "github":"https://github.com/Farid-Hamid-4/vibefy",
        "URL":"https://main.d2xqpnct98klit.amplifyapp.com/",
        "description":"Vibefy is a React-based web application that allows users to discover and explore music tracks, albums, and artists using the Spotify Web API. Users can search for songs or artists, and generate playlists containing similar tracks.",
        "image":vibefy,
    },
    {
        "type":"FULL-STACK WEB APPLICATION",
        "name":"UoG Course Mapping",
        "technologies":{
            "python-plain": "Python",
            "javascript-plain": "JavaScript", 
            "react-original": "React", 
            "nodejs-plain": "Node.js",
            "flask-original": "Flask",
            "nginx-original": "Nginx",
            "bootstrap-plain": "Bootstrap", 
            "html5-plain": "HTML5", 
            "css3-plain": "CSS3",
        },
        "github":"https://github.com/Farid-Hamid-4/uog-course-mapping",
        "URL":"",
        "description":"A program to search and filter course offerings at the University of Guelph. Graphs majors and programs for University of Guelph, and subjects for McGill.",
        "image":uogCourseMapping,
    },
    {                    
        "type":"BACKEND PROJECT",
        "name":"Image Processor",
        "technologies":{
            "python-plain": "Python",
            "docker-plain": "Docker",
        },
        "github":"https://github.com/Farid-Hamid-4/image-processor",
        "URL":"",
        "description":"This Python project provides functionalities to sharpen or apply noise removal to an image. It utilizes the Nvidia Warp library for efficient parallel computation.",
        "image":imageProcessor,
    }
];

export default projectsList;
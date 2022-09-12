import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiPython,
  DiDjango,
  DiGit,
  DiDart,
  DiSass
} from "react-icons/di";

import "../styles/components/technologies.sass"

const technologies = [
  { id: "html", name: "HTML5", sobre:"1111", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", sobre:"2222", icon: <DiCss3 /> },
  { id: "sass", name: "Sass", sobre:"3333", icon: <DiSass /> },
  { id: "js", name: "JavaScript", sobre:"4444", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", sobre:"5555", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", sobre:"6666",icon: <DiReact /> },
  { id: "dart", name: "Dart", sobre:"9999", icon: <DiDart /> },
  { id: "python", name: "Python", sobre:"7777", icon: <DiPython /> },
  { id: "django", name: "Django", sobre:"8888", icon: <DiDjango /> },
  { id: "git", name: "Git",sobre:"1010", icon: <DiGit /> },
  
];

const Technologies = () => {
  return (
    <section className="technologies">
      <h2>
        Tecnologias
      </h2>
      <div className="tech-grid">
        {technologies.map((tech) =>(
          <div className="tech-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
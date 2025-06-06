import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
  { name: 'React', image: '/react.svg' },
  { name: 'Java', image: '/java.svg' },
  { name: 'CSS', image: '/css3.svg' },
  { name: 'HTML', image: '/html5.svg' },
  { name: 'Python', image: '/Python.png' },
  { name: 'Github', image : '/github.svg'},
  { name:'Typescript',image:'typescript.svg'},
  { name: 'JavaScript', image: '/javascript.svg' },
  { name: 'MySQL',image:'mysql.svg'},
];

  return (
    <section className="skills-section" id="habilidades">
      <h2>Minhas Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillsSection;
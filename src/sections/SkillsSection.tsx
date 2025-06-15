// import React from 'react';
// import { motion } from 'framer-motion'; // Importe o motion
// import './SkillsSection.css';

// interface Skill {
//   name: string;
//   image: string;
// }

// const SkillsSection = () => {
//   const skills: Skill[] = [
//     { name: 'React', image: '/react.svg' },
//     { name: 'Java', image: '/java.svg' },
//     { name: 'CSS', image: '/css3.svg' },
//     { name: 'C++', image: '/c++.svg' },
//     { name: 'HTML', image: '/html5.svg' },
//     { name: 'Python', image: '/python.png' },
//     { name: 'Github', image: '/github.svg' },
//     { name: 'AWS', image: '/aws.svg' },
//     { name: 'Typescript', image: 'typescript.svg' },
//     { name: 'JavaScript', image: '/javascript.svg' },
//     { name: 'MySQL', image: '/mysql.svg' },
//   ];

//   return (
//     <section className="skills-section" id="habilidades">
//       <h2>Minhas Habilidades</h2>
//       <div className="skills-container">
//         {skills.map((skill, index) => (
//           // Adicione o motion.div aqui envolvendo cada item
//           <motion.div
//             key={index}
//             className="skill-item"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ 
//               duration: 0.6, 
//               delay: index * 0.1 
//             }}
//           >
//             <img src={skill.image} alt={skill.name} className="skill-icon" />
//             <span>{skill.name}</span>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

// SkillsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

interface Skill {
  name: string;
  image: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
   { name: 'React', image: '/react.svg' },
    { name: 'Java', image: '/java.svg' },
    { name: 'CSS', image: '/css3.svg' },
    { name: 'C++', image: '/c++.svg' },
    { name: 'HTML', image: '/html5.svg' },
    { name: 'Python', image: '/python.png' },
    { name: 'Github', image: '/github.svg' },
    { name: 'AWS', image: '/aws.svg' },
    { name: 'Typescript', image: 'typescript.svg' },
    { name: 'JavaScript', image: '/javascript.svg' },
    { name: 'MySQL', image: '/mysql.svg' },
  ];

  return (
    <section data-aos="fade-down" className="skills-section" id="habilidades">
      <div className="skills-strip">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={skill.image} alt={skill.name} className="skill-icon" />
          </motion.div>
        ))}
      </div>

      <div className="central-symbol">
        <div className="glow-circle">
          <span className="symbol">Habilidades</span> {/* ou outro símbolo personalizado */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

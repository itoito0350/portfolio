import React from 'react';
import {SkillsContainer, CategoryContainer,Skill,Icon, SectionTitle } from "../styles/SkillsStyles";
import { SiDjango, SiPandas } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { FaReact, FaHtml5, FaCss3Alt, FaNode, FaDocker, FaJava, FaPython, FaFigma, FaGithub, FaDatabase, FaAndroid, FaUnity, FaBootstrap } from 'react-icons/fa';



const Skills = () => {
  const coreSkills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'PostgreSQL', icon: <FaDatabase /> },
  ];

  const toolsAndOthers = [
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'PySpark', icon: <FaCode /> },
    { name: 'Android Studio', icon: <FaAndroid /> },
    { name: 'Unity', icon: <FaUnity /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
  ];

  return (
    <SkillsContainer>
      <div>
        <SectionTitle><span> Core Skills</span> </SectionTitle>
        <CategoryContainer>
          {coreSkills.map((skill, index) => (
            <Skill key={index}>
              <Icon>{skill.icon}</Icon>
              {skill.name}
            </Skill>
          ))}
        </CategoryContainer>
      </div>

      <div>
        <SectionTitle><span> Tools & Others</span></SectionTitle>
        <CategoryContainer>
          {toolsAndOthers.map((skill, index) => (
            <Skill key={index}>
              <Icon>{skill.icon}</Icon>
              {skill.name}
            </Skill>
          ))}
        </CategoryContainer>
      </div>
    </SkillsContainer>
  );
};

export default Skills;


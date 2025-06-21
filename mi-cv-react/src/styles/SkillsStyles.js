import styled from 'styled-components';

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: black;
  border-radius: 10px;
  
  margin: auto;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  width: 80%;
`;

const Skill = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 300;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  transition: 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 255, 144, 0.2);
  
  &:hover {
    background-color: #4e8477;
    color: black;
    transform: translateY(-5px) scale(1.05);
  }
`;

const Icon = styled.div`
  font-size: 1.2rem;
`;

const SectionTitle = styled.h3`
  color: #b3b3b3;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding:40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  span {
    display: inline-block;
    transform: scaleY(0.6); 
  }
`;
export {SkillsContainer, CategoryContainer,Skill,Icon, SectionTitle };
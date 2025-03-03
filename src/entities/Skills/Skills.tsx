import Badge from '@shared/components/Badge/Badge';
import { COLORS, FONT_SIZE, BREAKPOINTS, SHADOWS } from '@shared/const/styleConstants';
import React from 'react';
import styled from 'styled-components';

import skillsData from './skills.json';

interface SkillType {
  name: string;
  bgColor?: string;
  textColor?: string;
}

interface CategoryType {
  name: string;
  skills: SkillType[];
}

interface SkillsData {
  categories: CategoryType[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CategoryRow = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${COLORS.white};
  border-radius: 8px;
  box-shadow: ${SHADOWS.sm};
  align-items: center;

  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const CategoryName = styled.div`
  font-weight: 600;
  font-size: ${FONT_SIZE.lg};
  min-width: 150px;
  color: ${COLORS.textDark};

  @media (max-width: ${BREAKPOINTS.md}) {
    margin-bottom: 0.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex: 1;
`;

const Skills: React.FC = () => {
  const data: SkillsData = skillsData;

  return (
    <Container>
      {data.categories.map((category, index) => (
        <CategoryRow key={index}>
          <CategoryName>{category.name}:</CategoryName>
          <SkillsContainer>
            {category.skills.map((skill, skillIndex) => (
              <Badge key={skillIndex} bgColor={skill.bgColor} textColor={skill.textColor}>
                {skill.name}
              </Badge>
            ))}
          </SkillsContainer>
        </CategoryRow>
      ))}
    </Container>
  );
};

export default Skills;

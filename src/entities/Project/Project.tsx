import Ballons from '@shared/assets/ballon.png';
import {
  COLORS,
  FONT_SIZE,
  SPACING,
  SHADOWS,
  BORDER_RADIUS,
  BREAKPOINTS,
} from '@shared/const/styleConstants';
import React, { useState } from 'react';
import styled from 'styled-components';

import projectsData from './project.json';

interface ProjectItem {
  title: string;
  period: string;
  organization: string;
  description: string;
  achievements: string[];
  learnings: string[];
  skills: string[];
  isFeatured: boolean;
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectsData {
  projects: ProjectItem[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING[6]};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${SPACING[4]};
`;

const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? COLORS.primary : COLORS.white)};
  color: ${(props) => (props.active ? COLORS.white : COLORS.textDark)};
  border: 1px solid ${(props) => (props.active ? COLORS.primary : COLORS.gray300)};
  border-radius: ${BORDER_RADIUS.md};
  padding: ${SPACING[2]} ${SPACING[4]};
  font-size: ${FONT_SIZE.sm};
  cursor: pointer;
  transition: all 0.2s;
  margin-left: ${SPACING[2]};

  &:hover {
    background-color: ${(props) => (props.active ? COLORS.primaryDark : COLORS.gray100)};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${SPACING[6]};

  @media (max-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div<{ isFeatured: boolean }>`
  background-color: ${COLORS.white};
  border-radius: ${BORDER_RADIUS.lg};
  box-shadow: ${SHADOWS.sm};
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border-top: ${(props) => (props.isFeatured ? `4px solid ${COLORS.primary}` : 'none')};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${SHADOWS.md};
  }
`;

const ProjectImageContainer = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${SPACING[3]};
  right: ${SPACING[3]};
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding: ${SPACING[1]} ${SPACING[2]};
  border-radius: ${BORDER_RADIUS.md};
  font-size: ${FONT_SIZE.xs};
  font-weight: 500;
`;

const ProjectContent = styled.div`
  padding: ${SPACING[5]};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  margin-bottom: ${SPACING[4]};
`;

const ProjectTitle = styled.h3`
  font-size: ${FONT_SIZE.xl};
  font-weight: 600;
  color: ${COLORS.textDark};
  margin-bottom: ${SPACING[2]};
`;

const ProjectMeta = styled.div`
  font-size: ${FONT_SIZE.sm};
  color: ${COLORS.gray500};
  margin-bottom: ${SPACING[1]};
`;

const ProjectDescription = styled.p`
  font-size: ${FONT_SIZE.md};
  line-height: 1.6;
  color: ${COLORS.textDark};
  margin-bottom: ${SPACING[4]};
`;

const SectionTitle = styled.h4`
  font-size: ${FONT_SIZE.md};
  font-weight: 600;
  color: ${COLORS.textDark};
  margin-bottom: ${SPACING[2]};
  margin-top: ${SPACING[4]};

  &:first-of-type {
    margin-top: 0;
  }
`;

const List = styled.ul`
  padding-left: ${SPACING[5]};
  margin-bottom: ${SPACING[4]};
`;

const ListItem = styled.li`
  margin-bottom: ${SPACING[2]};
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACING[2]};
  margin-top: auto;
  padding-top: ${SPACING[4]};
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: ${SPACING[1]} ${SPACING[2]};
  background-color: ${COLORS.gray100};
  border-radius: ${BORDER_RADIUS.md};
  font-size: ${FONT_SIZE.xs};
  color: ${COLORS.gray700};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: ${SPACING[3]};
  margin-top: ${SPACING[4]};
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${SPACING[2]} ${SPACING[3]};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray300};
  border-radius: ${BORDER_RADIUS.md};
  color: ${COLORS.textDark};
  font-size: ${FONT_SIZE.sm};
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background-color: ${COLORS.gray100};
    border-color: ${COLORS.gray400};
  }

  svg {
    margin-right: ${SPACING[2]};
  }
`;

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z"
      fill="currentColor"
    />
  </svg>
);

const DemoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
  </svg>
);

const Projects: React.FC = () => {
  const data: ProjectsData = projectsData;
  const [showFeaturedOnly, setShowFeaturedOnly] = useState<boolean>(true);

  const filteredProjects = showFeaturedOnly
    ? data.projects.filter((project) => project.isFeatured)
    : data.projects;

  return (
    <Container>
      <FilterContainer>
        <FilterButton active={showFeaturedOnly} onClick={() => setShowFeaturedOnly(true)}>
          주요 프로젝트
        </FilterButton>
        <FilterButton active={!showFeaturedOnly} onClick={() => setShowFeaturedOnly(false)}>
          전체 프로젝트
        </FilterButton>
      </FilterContainer>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} isFeatured={project.isFeatured}>
            {project.imageUrl && (
              <ProjectImageContainer>
                <ProjectImage src={Ballons} alt={project.title} />
                {project.isFeatured && <FeaturedBadge>주요 프로젝트</FeaturedBadge>}
              </ProjectImageContainer>
            )}

            <ProjectContent>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectMeta>
                  {project.period} | {project.organization}
                </ProjectMeta>
              </ProjectHeader>

              <ProjectDescription>{project.description}</ProjectDescription>

              <SectionTitle>주요 성과</SectionTitle>
              <List>
                {project.achievements.map((achievement, achievementIndex) => (
                  <ListItem key={achievementIndex}>{achievement}</ListItem>
                ))}
              </List>

              <SectionTitle>배운 점</SectionTitle>
              <List>
                {project.learnings.map((learning, learningIndex) => (
                  <ListItem key={learningIndex}>{learning}</ListItem>
                ))}
              </List>

              {(project.githubUrl || project.demoUrl) && (
                <LinkContainer>
                  {project.githubUrl && (
                    <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon /> GitHub
                    </LinkButton>
                  )}
                  {project.demoUrl && (
                    <LinkButton href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <DemoIcon /> 데모
                    </LinkButton>
                  )}
                </LinkContainer>
              )}

              <SkillsContainer>
                {project.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex}>{skill}</SkillTag>
                ))}
              </SkillsContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;

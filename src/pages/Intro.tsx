import Career from '@entities/Career/Carrer';
import Introduce from '@entities/Introduce/Introduce';
import PersonalInfo from '@entities/PersonalInfo/PersonalInfo';
import Project from '@entities/Project/Project';
import Skills from '@entities/Skills/Skills';
import Header from '@shared/components/Header/Header';
import { COLORS, FONT_SIZE, BREAKPOINTS, SPACING } from '@shared/const/styleConstants';
import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Noto Sans KR', sans-serif;
  }
  
  body {
    background-color: ${COLORS.background};
    color: ${COLORS.textDark};
    line-height: 1.5;
  }

  ul, ol {
    padding-left: 1.5rem;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  padding: 4rem 0;
  border-bottom: 1px solid ${COLORS.gray200};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    padding: 3rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${FONT_SIZE['3xl']};
  color: ${COLORS.textDark};
  margin-bottom: ${SPACING[8]};
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${COLORS.primary};
    margin-top: 0.5rem;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: ${FONT_SIZE['2xl']};
    margin-bottom: ${SPACING[6]};
  }
`;

// Section 타입 정의
interface SectionRef {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement | null>;
}

const Intro: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const careerRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  // 섹션 정보 배열
  const sections: SectionRef[] = [
    { id: 'about', name: '소개', ref: aboutRef },
    { id: 'skills', name: '기술 스택', ref: skillsRef },
    { id: 'career', name: '경력', ref: careerRef },
    { id: 'projects', name: '프로젝트', ref: projectsRef },
  ];

  return (
    <>
      <GlobalStyle />
      <Header sections={sections} />
      <AppContainer>
        <Section id="about" ref={aboutRef}>
          <SectionTitle>소개</SectionTitle>
          <PersonalInfo />
          <Introduce />
        </Section>

        <Section id="skills" ref={skillsRef}>
          <SectionTitle>기술 스택</SectionTitle>
          <Skills />
        </Section>

        <Section id="career" ref={careerRef}>
          <SectionTitle>경력</SectionTitle>
          <Career />
        </Section>

        <Section id="projects" ref={projectsRef}>
          <SectionTitle>프로젝트</SectionTitle>
          <Project />
        </Section>
      </AppContainer>
    </>
  );
};

export default Intro;

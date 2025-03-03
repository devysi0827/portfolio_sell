import Ballons from '@shared/assets/ballon.png';
import {
  COLORS,
  FONT_SIZE,
  SPACING,
  BREAKPOINTS,
  BORDER_RADIUS,
  SHADOWS,
} from '@shared/const/styleConstants';
import React from 'react';
import styled from 'styled-components';

import careerData from './carrer.json';

interface CareerItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  logo?: string;
}

interface CareerData {
  careers: CareerItem[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING[6]};
`;

const TimelineContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: ${COLORS.gray200};

    @media (max-width: ${BREAKPOINTS.md}) {
      left: 12px;
    }
  }
`;

const CareerItemContainer = styled.div`
  display: flex;
  padding-left: 40px;
  position: relative;
  margin-bottom: ${SPACING[8]};

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 9px;
    top: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${COLORS.primary};
    border: 3px solid ${COLORS.white};
    z-index: 1;
    box-shadow: ${SHADOWS.sm};

    @media (max-width: ${BREAKPOINTS.md}) {
      left: 6px;
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    padding-left: 30px;
  }
`;

const CareerCard = styled.div`
  background-color: ${COLORS.white};
  border-radius: ${BORDER_RADIUS.lg};
  box-shadow: ${SHADOWS.sm};
  padding: ${SPACING[6]};
  width: 100%;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${SHADOWS.md};
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    padding: ${SPACING[4]};
  }
`;

const CardHeader = styled.div`
  display: flex;
  margin-bottom: ${SPACING[4]};

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    gap: ${SPACING[3]};
  }
`;

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-right: ${SPACING[4]};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray200};
  border-radius: ${BORDER_RADIUS.md};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 50px;
    height: 50px;
    margin-right: 0;
    margin-bottom: ${SPACING[2]};
  }
`;

const Logo = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: ${FONT_SIZE.xl};
  font-weight: 600;
  color: ${COLORS.textDark};
  margin-bottom: ${SPACING[1]};
`;

const PositionPeriod = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${SPACING[2]};

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${SPACING[1]};
  }
`;

const Position = styled.div`
  font-size: ${FONT_SIZE.md};
  font-weight: 500;
  color: ${COLORS.primary};
`;

const Period = styled.div`
  font-size: ${FONT_SIZE.sm};
  color: ${COLORS.gray500};
  display: flex;
  align-items: center;

  &::before {
    content: '•';
    margin: 0 ${SPACING[2]};

    @media (max-width: ${BREAKPOINTS.sm}) {
      display: none;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-top: -${SPACING[1]};
  }
`;

const Description = styled.p`
  font-size: ${FONT_SIZE.md};
  line-height: 1.6;
  color: ${COLORS.textDark};
  margin-bottom: ${SPACING[4]};
`;

const SectionTitle = styled.h4`
  font-size: ${FONT_SIZE.md};
  font-weight: 600;
  color: ${COLORS.textDark};
  margin-bottom: ${SPACING[3]};
  margin-top: ${SPACING[4]};
`;

const AchievementList = styled.ul`
  margin-bottom: ${SPACING[4]};
  padding-left: ${SPACING[5]};
`;

const AchievementItem = styled.li`
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
  margin-top: ${SPACING[2]};
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: ${SPACING[1]} ${SPACING[2]};
  background-color: ${COLORS.gray100};
  border-radius: ${BORDER_RADIUS.md};
  font-size: ${FONT_SIZE.xs};
  color: ${COLORS.gray700};
`;

const Career: React.FC = () => {
  const data: CareerData = careerData;

  return (
    <Container>
      <TimelineContainer>
        {data.careers.map((career, index) => (
          <CareerItemContainer key={index}>
            <CareerCard>
              <CardHeader>
                <LogoContainer>
                  {career.logo ? (
                    <Logo src={career.logo} alt={career.company} />
                  ) : (
                    <Logo src={Ballons} alt={career.company} />
                  )}
                </LogoContainer>

                <HeaderContent>
                  <CompanyName>{career.company}</CompanyName>
                  <PositionPeriod>
                    <Position>{career.position}</Position>
                    <Period>{career.period}</Period>
                  </PositionPeriod>
                </HeaderContent>
              </CardHeader>

              <Description>{career.description}</Description>

              <SectionTitle>주요 성과</SectionTitle>
              <AchievementList>
                {career.achievements.map((achievement, achievementIndex) => (
                  <AchievementItem key={achievementIndex}>{achievement}</AchievementItem>
                ))}
              </AchievementList>

              <SectionTitle>사용 기술</SectionTitle>
              <SkillsContainer>
                {career.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex}>{skill}</SkillTag>
                ))}
              </SkillsContainer>
            </CareerCard>
          </CareerItemContainer>
        ))}
      </TimelineContainer>
    </Container>
  );
};

export default Career;

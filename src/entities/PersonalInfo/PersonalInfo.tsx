import { COLORS, FONT_SIZE, SPACING, BREAKPOINTS } from '@shared/const/styleConstants';
import React from 'react';
import styled from 'styled-components';

import personalInfoData from './info.json';

interface PersonalInfoData {
  name: string;
  profileImage: string;
  phone: string;
  birthdate: string;
  email: string;
  github: string;
  blog: string;
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

// const ProfileImage = styled.img`
//   width: 180px;
//   height: 180px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 4px solid ${COLORS.primary};
//   box-shadow: ${SHADOWS.md};

//   @media (max-width: ${BREAKPOINTS.md}) {
//     width: 150px;
//     height: 150px;
//     margin: 0 auto;
//   }
// `;

const InfoContainer = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: ${FONT_SIZE['4xl']};
  font-weight: 700;
  color: ${COLORS.textDark};
  margin-bottom: 1rem;

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: ${FONT_SIZE['3xl']};
    text-align: center;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${SPACING[4]};

  @media (max-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  min-width: 100px;
  color: ${COLORS.gray500};

  @media (max-width: ${BREAKPOINTS.md}) {
    min-width: 90px;
  }
`;

const InfoValue = styled.span`
  color: ${COLORS.textDark};
`;

const InfoLink = styled.a`
  color: ${COLORS.primary};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
    color: ${COLORS.primaryDark};
  }
`;

const PersonalInfo: React.FC = () => {
  const data: PersonalInfoData = personalInfoData;

  return (
    <Container>
      {/* <ProfileImage src={data.profileImage} alt={data.name} /> */}

      <InfoContainer>
        <Name>{data.name}</Name>

        <InfoList>
          <InfoItem>
            <InfoLabel>연락처:</InfoLabel>
            <InfoValue>{data.phone}</InfoValue>
          </InfoItem>

          <InfoItem>
            <InfoLabel>생년월일:</InfoLabel>
            <InfoValue>{data.birthdate}</InfoValue>
          </InfoItem>

          <InfoItem>
            <InfoLabel>이메일:</InfoLabel>
            <InfoValue>
              <InfoLink href={`mailto:${data.email}`}>{data.email}</InfoLink>
            </InfoValue>
          </InfoItem>

          <InfoItem>
            <InfoLabel>GitHub:</InfoLabel>
            <InfoValue>
              <InfoLink href={data.github} target="_blank" rel="noopener noreferrer">
                {data.github.replace('https://', '')}
              </InfoLink>
            </InfoValue>
          </InfoItem>

          <InfoItem>
            <InfoLabel>블로그:</InfoLabel>
            <InfoValue>
              <InfoLink href={data.blog} target="_blank" rel="noopener noreferrer">
                {data.blog.replace('https://', '')}
              </InfoLink>
            </InfoValue>
          </InfoItem>
        </InfoList>
      </InfoContainer>
    </Container>
  );
};

export default PersonalInfo;

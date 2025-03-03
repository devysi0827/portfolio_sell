import { COLORS, FONT_SIZE, SPACING, SHADOWS, BORDER_RADIUS } from '@shared/const/styleConstants';
import React from 'react';
import styled from 'styled-components';

import introduceData from './Introduce.json';

interface IntroduceData {
  introduces: string[];
}

const Container = styled.div`
  margin-top: ${SPACING[8]};
`;

// const Title = styled.h3`
//   font-size: ${FONT_SIZE.xl};
//   font-weight: 600;
//   color: ${COLORS.textDark};
//   margin-bottom: ${SPACING[4]};
//   position: relative;

//   &:after {
//     content: '';
//     display: block;
//     width: 40px;
//     height: 2px;
//     background-color: ${COLORS.primary};
//     margin-top: ${SPACING[2]};
//   }
// `;

const IntroduceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING[4]};
`;

const IntroduceItem = styled.div`
  background-color: ${COLORS.white};
  border-radius: ${BORDER_RADIUS.lg};
  padding: ${SPACING[5]};
  box-shadow: ${SHADOWS.sm};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border-left: 4px solid ${COLORS.primary};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${SHADOWS.md};
  }
`;

const IntroduceText = styled.p`
  font-size: ${FONT_SIZE.md};
  line-height: 1.7;
  color: ${COLORS.textDark};
  position: relative;
`;

const Introduce: React.FC = () => {
  const data: IntroduceData = introduceData;

  return (
    <Container>
      {/* <Title>자기소개</Title> */}
      <IntroduceList>
        {data.introduces.map((introduce, index) => (
          <IntroduceItem key={index}>
            <IntroduceText>{introduce}</IntroduceText>
          </IntroduceItem>
        ))}
      </IntroduceList>
    </Container>
  );
};

export default Introduce;

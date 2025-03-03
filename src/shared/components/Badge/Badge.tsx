import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const BadgeContainer = styled.span<{ bgColor?: string; textColor?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  background-color: ${(props) => props.bgColor || '#4A6CF7'};
  color: ${(props) => props.textColor || '#FFFFFF'};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Badge: React.FC<BadgeProps> = ({ children, bgColor, textColor }) => {
  return (
    <BadgeContainer bgColor={bgColor} textColor={textColor}>
      {children}
    </BadgeContainer>
  );
};

export default Badge;

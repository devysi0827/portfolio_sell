import { COLORS, FONT_SIZE, BREAKPOINTS, SHADOWS } from '@shared/const/styleConstants';
import { scrollToElement, scrollToTop } from '@shared/utils/scrollUtils';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import headerData from './Header.json';

interface HeaderProps {
  sections: {
    id: string;
    name: string;
    ref: React.RefObject<HTMLElement | null>;
  }[];
}

interface NavProps {
  $isOpen: boolean;
}

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${COLORS.white};
  box-shadow: ${SHADOWS.sm};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${BREAKPOINTS.md}) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled.h1`
  font-size: ${FONT_SIZE.xl};
  font-weight: 700;
  color: ${COLORS.primary};
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: ${FONT_SIZE.lg};
  }
`;

const Nav = styled.nav<NavProps>`
  display: flex;

  @media (max-width: ${BREAKPOINTS.md}) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${COLORS.white};
    box-shadow: ${SHADOWS.md};
    padding: 1rem 0;
  }
`;

const NavItem = styled.a`
  margin-left: 2rem;
  color: ${COLORS.textDark};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${COLORS.primary};
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    margin: 0.5rem 1rem;
    padding: 0.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${COLORS.textDark};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.md}) {
    display: block;
  }
`;

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 섹션으로 스크롤하는 함수 - 커스텀 스크롤 유틸리티 사용
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      // 헤더 높이를 고려한 오프셋 조정 (필요에 따라 값 조정)
      const headerOffset = -70;
      // 커스텀 스크롤 함수 사용 (더 빠른 애니메이션)
      scrollToElement(ref.current, headerOffset, 250); // 250ms로 설정하여 빠른 스크롤 구현
      setIsMenuOpen(false);
    }
  };

  return (
    <HeaderContainer
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : COLORS.white,
        boxShadow: scrolled ? SHADOWS.md : SHADOWS.sm,
      }}
    >
      <HeaderInner>
        <Logo onClick={() => scrollToTop(250)}>{headerData.title}</Logo>

        <MobileMenuButton onClick={toggleMenu} aria-label="메뉴 열기">
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>

        <Nav $isOpen={isMenuOpen}>
          {sections.map((section) => (
            <NavItem
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.ref);
              }}
            >
              {section.name}
            </NavItem>
          ))}
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;

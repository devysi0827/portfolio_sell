// 색상 변수
export const COLORS = {
  // 주요 브랜드 색상
  primary: '#4A6CF7',
  primaryDark: '#3E5FCC',
  primaryLight: '#8EA4F6',

  // 보조 색상
  secondary: '#0EA5E9',
  secondaryDark: '#0284C7',
  secondaryLight: '#7DD3FC',

  // 배경 색상
  background: '#F9FAFB',
  backgroundDark: '#F3F4F6',
  backgroundLight: '#FFFFFF',

  // 텍스트 색상
  textDark: '#1F2937',
  textMedium: '#6B7280',
  textLight: '#9CA3AF',

  // UI 요소 색상
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',

  // 알림 색상
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',

  // 카테고리별 색상
  frontend: '#4A6CF7', // 프론트엔드
  backend: '#0EA5E9', // 백엔드
  database: '#8B5CF6', // 데이터베이스
  devops: '#F97316', // 데브옵스
  design: '#EC4899', // 디자인/UI
  tools: '#10B981', // 기타 도구
};

// 폰트 사이즈
export const FONT_SIZE = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
};

// 폰트 두께
export const FONT_WEIGHT = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

// 간격 (마진, 패딩 등)
export const SPACING = {
  px: '1px',
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 288px
  80: '20rem', // 320px
  96: '24rem', // 384px
};

// 반응형 디자인을 위한 중단점
export const BREAKPOINTS = {
  sm: '640px', // 모바일
  md: '768px', // 태블릿
  lg: '1024px', // 작은 데스크탑
  xl: '1280px', // 큰 데스크탑
  '2xl': '1536px', // 초대형 화면
};

// z-index 값
export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// 그림자 효과
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

// 테두리 반경 (border-radius)
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem', // 2px
  md: '0.25rem', // 4px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px', // 원형
};

// 애니메이션 및 트랜지션
export const TRANSITIONS = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
};

// 줄 높이 (line-height)
export const LINE_HEIGHT = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

// 불투명도 (opacity)
export const OPACITY = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
};

export default {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
  BREAKPOINTS,
  Z_INDEX,
  SHADOWS,
  BORDER_RADIUS,
  TRANSITIONS,
  LINE_HEIGHT,
  OPACITY,
};

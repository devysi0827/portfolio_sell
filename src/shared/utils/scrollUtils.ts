/**
 * 더 빠른 스크롤 애니메이션을 위한 유틸리티 함수
 * @param element 스크롤할 대상 요소
 * @param offset 헤더 높이 등을 고려한 오프셋(픽셀)
 * @param duration 애니메이션 지속 시간(밀리초)
 */
export const scrollToElement = (
  element: HTMLElement,
  offset: number = 0,
  duration: number = 300
): void => {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset + offset;

  const startTime = performance.now();
  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;

  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = easeInOutQuad(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * 페이지 최상단으로 스크롤하는 함수
 * @param duration 애니메이션 지속 시간(밀리초)
 */
export const scrollToTop = (duration: number = 300): void => {
  const startTime = performance.now();
  const startPosition = window.pageYOffset;

  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = easeInOutQuad(progress);

    window.scrollTo(0, startPosition * (1 - easeProgress));

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

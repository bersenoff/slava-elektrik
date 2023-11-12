import { useState, useLayoutEffect } from 'react';

const useBreakpoints = (): { isMobile: boolean; isTablet: boolean; isDesktop: boolean; } => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useLayoutEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      setIsMobile(width <= 767);
      setIsTablet(width >= 768 && width <= 1365);
      setIsDesktop(width >= 1366);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useBreakpoints;

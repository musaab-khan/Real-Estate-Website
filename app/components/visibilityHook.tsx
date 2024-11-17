import { useEffect, useState } from 'react';

const visibilityHook = (selector: string='.zoomer', threshold: number = 0.65) => {
  const [visibleElements, setVisibleElements] = useState<Record<string, boolean>>({});

  const handleScroll = () => {
    const elements = document.querySelectorAll(selector);
    const newVisibilityState: Record<string, boolean> = {};

    elements.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const appearingHeight = window.innerHeight * threshold;

        // Determine if the element is visible
        newVisibilityState[index] = rect.top <= appearingHeight;
      }
    });

    setVisibleElements(newVisibilityState);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector, threshold]);

  return visibleElements;
};

export default visibilityHook;

import { useEffect, useState } from 'react';

const useVisibilityHook = (selector: string='.zoomer', threshold: number) => {
  const [visibleElements, setVisibleElements] = useState<Record<string, boolean>>({});

  const handleScroll = () => {
    const elements = document.querySelectorAll(selector);
    console.log(`Found ${elements.length} elements for selector: ${selector}`);
    const newVisibilityState: Record<string, boolean> = {};

    elements.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const appearingHeight = window.innerHeight*threshold;

        newVisibilityState[index] = rect.top <= appearingHeight;
        
      }
    });

    setVisibleElements(newVisibilityState);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector, threshold]);

  return visibleElements;
};

export default useVisibilityHook;

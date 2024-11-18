import { useEffect, useState } from 'react';

const visibilityHook = (selector: string='.zoomer', threshold: number) => {
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
        if(index==0){
          console.log(rect.top)
        }
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

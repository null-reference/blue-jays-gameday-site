import { useEffect, RefObject, useState } from 'react';

const useScrollPaddingTop = (ref: RefObject<HTMLElement | null>) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const updateScrollPaddingTop = () => {
      if (ref.current) {
        const height = ref.current.clientHeight;
        const computedStyle = window.getComputedStyle(ref.current);
        const isFixed = computedStyle.position === 'fixed';

        if (isFixed) {
          // set scroll padding top and adjust scroll position
          document.documentElement.style.scrollPaddingTop = `${height}px`;
        } else {
          document.documentElement.style.scrollPaddingTop = '0';
        }

        // set initialized one time
        setInitialized(true);
      }
    };

    requestAnimationFrame(updateScrollPaddingTop);

    // recalculate on resize
    window.addEventListener('resize', updateScrollPaddingTop);
    return () => {
      window.removeEventListener('resize', updateScrollPaddingTop);
    };
  }, [ref]);

  useEffect(() => {
    if (!initialized) {
      return;
    }

    const hash = window.location.hash;
    if (hash) {
      // we only want to navigate on first scroll in this case; otherwise, it's annoying
      // the page will jump to the target element as you scroll around on mobile.
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ block: 'start' });
      }
    }
  }, [initialized]);
};

export default useScrollPaddingTop;

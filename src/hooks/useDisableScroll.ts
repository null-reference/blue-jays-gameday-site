import { useEffect } from 'react';

const useDisableScroll = (shouldDisable: boolean) => {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    // only disable scroll if it's not already disabled
    if (shouldDisable && originalOverflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    } else if (!shouldDisable && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = originalOverflow;
    }

    // clean up on component unmount or when shouldDisable changes
    return () => {
      if (shouldDisable && document.body.style.overflow === 'hidden') {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [shouldDisable]);
};

export default useDisableScroll;

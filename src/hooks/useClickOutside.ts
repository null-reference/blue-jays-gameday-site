import { useEffect, RefObject } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  active: boolean,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (active) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    // cleanup function to remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback, active]);
};

export default useClickOutside;

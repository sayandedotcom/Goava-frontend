import React, {useState, useEffect} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NewTooltip from '../../lib/tooltip';

const ScrollTop = () => {
  const [goToTop, setgoToTop] = useState(false);
  const showBtn = () => {
    if (window.scrollY > 200) {
      setgoToTop(true);
    } else {
      setgoToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', showBtn);
    return () => {
      window.removeEventListener('scroll', showBtn);
    };
  }, []);

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {goToTop && (
        <NewTooltip title='Scroll to top'>
          <button
            onClick={toTop}
            className='fixed right-4 top-[calc(100vh-6rem)] z-[1000] flex cursor-pointer items-center justify-center rounded-[50%] border-none bg-black p-2'
            aria-label='Click here to scroll to top'>
            <KeyboardArrowUpIcon
              className='z-10 text-white'
              style={{fontSize: '2rem'}}
            />
          </button>
        </NewTooltip>
      )}
    </>
  );
};

export default ScrollTop;

import React, {useState, useEffect} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NewTooltip from '../tooltip/tooltip';

const GoTop = () => {
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
        <div className='z-40 bg-black'>
          <NewTooltip title='Scroll to top'>
            <button
              onClick={toTop}
              className='fixed z-50 flex rounded-[50%] bg-white p-2'
              aria-label='Click here to scroll to top'>
              <KeyboardArrowUpIcon
                className='z-10 text-white'
                style={{fontSize: '2rem'}}
              />
            </button>
          </NewTooltip>
        </div>
      )}
    </>
  );
};

export default GoTop;

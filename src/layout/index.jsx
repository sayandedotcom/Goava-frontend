import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fullProgress, initialProgress} from '../store/loaderSlice.js';
import LoadingBar from 'react-top-loading-bar';
import {ToastContainer} from 'react-toastify';
import Navbar from 'layout/navbar/index.jsx';
import Footer from 'layout/footer/index.jsx';
import ScrollTop from 'layout/scrollTop/scrollTop.jsx';

const Layout = ({children}) => {
  const dispatch = useDispatch();
  const {progress} = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(fullProgress());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <LoadingBar
        color='#000000'
        height={6}
        loaderSpeed={1000}
        progress={progress}
        onLoaderFinished={() => dispatch(initialProgress())}
      />
      <Navbar />
      <div style={{marginTop: '100px', paddingTop: '0.6rem'}}>{children}</div>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Layout;

import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { fullProgress, initialProgress } from "../../redux/loaderSlice.js";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { progress } = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  return (
    <>
      <LoadingBar
        color="#000000"
        height={6}
        loaderSpeed={1000}
        progress={progress}
        onLoaderFinished={() => dispatch(initialProgress())}
      />
      <Navbar />
      <div style={{ marginTop: "100px", paddingTop: "1rem" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

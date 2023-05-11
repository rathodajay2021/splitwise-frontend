//CORE
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//CUSTOM
import { ContentWrapper, WebsiteWrapper } from "./Website.style";
import { getWindowDimensions } from "Helpers/Utils";
import Route from "Routes/Route";

const Website = () => {
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WebsiteWrapper>
      <ContentWrapper
        $bottomBarHeight={isLoggedIn ? 60 : 0}
        $windowHeight={windowDimensions.height}
      >
        <Route />
      </ContentWrapper>
      {/* {isLoggedIn && <BottomBar />} */}
    </WebsiteWrapper>
  );
};

export default Website;

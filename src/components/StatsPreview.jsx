import React, { useEffect, useState } from "react";
import "./statsPreview.css";
import "animate.css";

function StatsPreview() {
  const [animateContent, setAnimateContent] = useState("");
  const [animateImg, setAnimateImg] = useState("");
  const [animateBg, setAnimateBg] = useState("");

  useEffect(() => {
    
    setTimeout(() => {
      setAnimateContent("animate__animated animate__fadeInLeft");
    }, 1000);
    setTimeout(() => {
      setAnimateImg("animate__animated animate__fadeInRight");
    }, 2000);
    setTimeout(() => {
      setAnimateBg("animate__animated animate__fadeInRight");
    }, 2500);
  }, []);

  return (
    <div className="statsPreview">
      <div className="statsPreviewWrapper animate__animated animate__fadeInDown">
        <div className="statsPreviewWrapperLeft">
          {animateContent && (
            <div className={`statsPreviewWrapperLeftContent ${animateContent}`}>
              <h1 className="statsPreviewWrapperLeftTitle">
                Get <span className="titleInsights">insights</span> that help
                your business grow.
              </h1>
              <p className="statsPreviewWrapperLeftDesc">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <div className="statsPreviewWrapperLeftBottom">
                <div className="statsPreviewWrapperLeftBottomCard">
                  <h3 className="statsPreviewWrapperLeftBottomCardTitle">
                    10k+
                  </h3>
                  <p className="statsPreviewWrapperLeftBottomCardDesc">
                    Companies
                  </p>
                </div>
                <div className="statsPreviewWrapperLeftBottomCard">
                  <h3 className="statsPreviewWrapperLeftBottomCardTitle">
                    314
                  </h3>
                  <p className="statsPreviewWrapperLeftBottomCardDesc">
                    Templates
                  </p>
                </div>
                <div className="statsPreviewWrapperLeftBottomCard">
                  <h3 className="statsPreviewWrapperLeftBottomCardTitle">
                    12M+
                  </h3>
                  <p className="statsPreviewWrapperLeftBottomCardDesc">
                    Queries
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="statPreviewWrapperRight">
          {animateBg && <div className={`bannerBg ${animateBg}`}></div>}

          {animateImg && (
            <img
              src="assets/images/image-header-desktop.jpg"
              className={`statPreviewWrapperRightImg ${animateImg}`}
            />
          )}

          {animateImg && (
            <img
              src="assets/images/image-header-mobile.jpg"
              className={`statPreviewWrapperRightImgMobile ${animateImg}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default StatsPreview;

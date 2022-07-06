import React, { useState, useEffect, useRef } from "react";

import { SlideBox, SlideContainer, SlideImg, Wrap } from "./style";

const [pic1, pic2, pic3] = [
  "https://user-images.githubusercontent.com/87058243/177100773-e94ba4e3-cea7-4701-9973-1c814da0bd92.png",
  "https://user-images.githubusercontent.com/87058243/177100785-85cfda8f-6dca-4510-aa2a-e0bf15d39be3.png",
  "https://user-images.githubusercontent.com/87058243/177100790-07c51962-92e5-478b-beda-baa4ed47e814.png",
];
function Slider() {
  const [currentPic, setCurrentPic] = useState(1);
  const [picList, setPicList] = useState([pic1, pic2, pic3]);
  const animation = "all 0.5s ease-in-out";
  const [effect, setEffect] = useState(animation);

  const nextSlide = () => {
    if (currentPic >= picList.length - 2) {
      setCurrentPic((prev) => ++prev);
      setTimeout(() => {
        setEffect("none");
        setCurrentPic(1);
      }, 500);
    } else {
      setCurrentPic((prev) => ++prev);
    }
    setEffect(animation);
  };

  const prevSlide = () => {
    if (currentPic <= 1) {
      setCurrentPic((prev) => prev - 1);
      setTimeout(() => {
        setEffect("none");
        setCurrentPic(picList.length - 2);
      }, 500);
    } else {
      setCurrentPic((prev) => prev - 1);
    }
    setEffect(animation);
  };

  useEffect(() => {
    setPicList([picList[picList.length - 1], ...picList, picList[0]]);
  }, []);

  return (
    <>
      <Wrap>
        <SlideContainer
          length={picList.length}
          currentPic={currentPic}
          effect={effect}
        >
          {picList.map((value, idx) => {
            return (
              <SlideBox key={value + idx}>
                <SlideImg src={value} />
              </SlideBox>
            );
          })}
        </SlideContainer>
      </Wrap>

      <button onClick={prevSlide}>prev</button>
      <button onClick={nextSlide}>next</button>
    </>
  );
}

export default Slider;

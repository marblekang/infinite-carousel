import React, { useState, useEffect } from "react";
import { SlideBox, SlideContainer, SlideImg, Wrap } from "./style";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const picArr = [
  "https://user-images.githubusercontent.com/87058243/177100773-e94ba4e3-cea7-4701-9973-1c814da0bd92.png",
  "https://user-images.githubusercontent.com/87058243/177100785-85cfda8f-6dca-4510-aa2a-e0bf15d39be3.png",
  "https://user-images.githubusercontent.com/87058243/177100790-07c51962-92e5-478b-beda-baa4ed47e814.png",
];

function Slider() {
  const animation = "all 0.5s ease-in-out";
  const [currentPic, setCurrentPic] = useState(1);
  const [effect, setEffect] = useState(animation);
  const makeNewDataArray = (arr) => {
    const dataStart = arr[0];
    const dataEnd = arr[arr.length - 1];
    const modifiedArray = [dataEnd, ...arr, dataStart];
    return modifiedArray;
  };

  const nextSlide = () => {
    setCurrentPic((prev) => {
      if (prev >= makeNewDataArray(picArr).length - 2) {
        setTimeout(() => {
          setEffect("none");
          setCurrentPic(1);
        }, 500);
        return prev + 1;
      } else {
        return prev + 1;
      }
    });
    setEffect(animation);
  };

  const prevSlide = () => {
    setCurrentPic((prev) => {
      if (prev <= 1) {
        setTimeout(() => {
          setEffect("none");
          setCurrentPic(makeNewDataArray(picArr).length - 2);
        }, 500);
        return prev - 1;
      } else {
        return prev - 1;
      }
    });
    setEffect(animation);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Wrap>
        <SlideContainer
          length={makeNewDataArray(picArr).length}
          currentPic={currentPic}
          effect={effect}
        >
          {makeNewDataArray(picArr).map((value, idx) => {
            return (
              <SlideBox key={value + idx}>
                <SlideImg src={value} />
              </SlideBox>
            );
          })}
        </SlideContainer>
        <MdKeyboardArrowLeft onClick={prevSlide} className="prevButton" />
        <MdKeyboardArrowRight onClick={nextSlide} className="nextButton" />
      </Wrap>
    </>
  );
}

export default Slider;

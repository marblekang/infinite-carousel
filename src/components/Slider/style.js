import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
export const Wrap = styled.div`
  overflow: hidden;
  .prevButton {
    position: absolute;
    top: 95px;
    left: 0px;
    color: wheat;
  }

  .nextButton {
    position: absolute;
    top: 95px;
    right: 0px;
    color: wheat;
  }
`;

export const SlideContainer = styled.div`
  width: ${({ length }) => length}00vw;
  transform: translateX(-${({ currentPic }) => currentPic}00vw);
  transition: ${({ effect }) => effect};
`;

export const SlideBox = styled.div`
  width: 100vw;
  height: 200px;
  float: left;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

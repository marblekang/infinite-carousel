import styled from "styled-components";

export const Wrap = styled.div`
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  width: ${({ length }) => length}00vw;
  transform: translateX(-${({ currentPic }) => currentPic}00vw);
  transition: ${({ effect }) => effect};
`;

//transition: ${({ effect }) => effect};
export const SlideBox = styled.div`
  width: 100vw;
  float: left;
`;

export const SlideImg = styled.img`
  width: 100%;
`;

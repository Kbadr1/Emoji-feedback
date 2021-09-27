import styled from "styled-components";

export const EmojiContainer = styled.div`
  cursor: pointer;
  margin: 0 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 85px;
  margin-top: 20px;
`;

export const EmojiFace = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  transition: 0.5s ease-in-out;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  visibility: ${(props) => props.visibility};
`;

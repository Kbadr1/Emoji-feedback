import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.h2`
  margin: 0;
`;

export const Reactions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  text-align: center;
  background-color: white;
  width: 600px;
  height: 400px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border: 0;
  font-size: 16px;
  padding: 10px 40px;
  border-radius: 5px;
  font-weight: 600;
  transition: 0.5s ease-in-out;
  cursor: ${(props) => props.cursor};
`;

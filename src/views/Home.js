import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

function Home() {
  return (
    <StyledHome>
      <h1>Leef.</h1>
      <LoginForm />
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

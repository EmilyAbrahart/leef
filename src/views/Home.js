import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../state/actions/authActions";

function Home({ getUser, authState: { isLoggedIn } }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/plants");
    }
  }, [navigate, isLoggedIn]);

  return (
    <StyledHome>
      <h1>Leef.</h1>
      <LoginForm />
    </StyledHome>
  );
}

export default connect((state) => state, { getUser })(Home);

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

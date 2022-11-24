import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../state/actions/authActions";

function LoginForm({loginUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input label="Email" type='email' onChange={(e) => setEmail(e.target.value)} />
        <input label="Password" type='password' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default connect((state) => state,  {loginUser} )(LoginForm);

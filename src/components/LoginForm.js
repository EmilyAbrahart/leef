import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(username, password);
    
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input label="Username" onChange={(e) => setUsername(e.target.value)} />
        <input label="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

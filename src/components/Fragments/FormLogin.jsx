import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useRef } from "react";
import { useEffect } from "react";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        setLoginFailed(response.response.data);
        console.log(response.response.data);
      }
    });
  };

  // use ref
  const usernameRef = useRef(null);

  // use effect
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        ref={usernameRef}
      />
      <div className="mb-6">
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
        />
      </div>
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 font-bold mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;

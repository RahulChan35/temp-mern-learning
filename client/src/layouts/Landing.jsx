import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <nav>
        <NavLink to="register">Register</NavLink>
        <p>or</p>
        <NavLink to="login">Login</NavLink>
      </nav>
    </>
  );
};

export default Landing;

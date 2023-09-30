import axios from "axios";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post("/api/v1/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Login = () => {
  return (
    <>
      <h3>Sign In Page</h3>
      <Form method="post" action="/login">
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" placeholder="Enter email" required />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" placeholder="Enter password" />
        <br />

        <button type="submit">Login</button>
      </Form>
    </>
  );
};

export default Login;

import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post("/api/v1/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Register = () => {
  return (
    <>
      <h3>Sign Up Form</h3>
      <Form method="post" action="/register">
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" placeholder="Enter name" required />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" placeholder="Enter email" required />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </Form>
    </>
  );
};

export default Register;

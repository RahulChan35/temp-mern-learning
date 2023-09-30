import axios from "axios";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const createItemAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post("/api/v1/items", data);
    toast.success("Item Added Successfully");
    return redirect("/dashboard");
  } catch (error) {
    return error;
  }
};

const ItemCreate = () => {
  return (
    <>
      <Form method="post" action="/dashboard/create-item">
        <label htmlFor="title">Item : </label>
        <input type="text" name="title" placeholder="Enter item" required />
        <button type="submit">Add</button>
      </Form>
    </>
  );
};

export default ItemCreate;

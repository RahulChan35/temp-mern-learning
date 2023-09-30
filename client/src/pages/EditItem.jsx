import { useLoaderData } from "react-router-dom";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

export const editItemLoader = async ({ params }) => {
  try {
    const { data } = await axios.get(`/api/v1/items/${params.id}`);
    return data;
  } catch (error) {
    return redirect("/dashboard/all-jobs");
  }
};

export const editItemAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedData = Object.fromEntries(formData);
  try {
    await axios.patch(`/api/v1/items/${params.id}`, updatedData);
    return redirect("/dashboard");
  } catch (error) {
    return error;
  }
};

const EditItem = () => {
  const item = useLoaderData();
  return (
    <Form method="post">
      <label htmlFor="title">Edit Item : </label>
      <input type="text" name="title" defaultValue={item.title} />
      <button type="submit">Edit</button>
    </Form>
  );
};

export default EditItem;

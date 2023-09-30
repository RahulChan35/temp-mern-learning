import axios from "axios";
import { redirect } from "react-router-dom";

export const deleteItemAction = async ({ params }) => {
  try {
    await axios.delete(`/api/v1/items/${params.id}`);
  } catch (error) {
    console.log(error);
  }
  return redirect("/dashboard");
};

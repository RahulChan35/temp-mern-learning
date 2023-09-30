import { Form, Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useContext, createContext } from "react";

export const itemsLoader = async () => {
  try {
    const data = await axios.get("/api/v1/items");
    return data;
  } catch (error) {
    return error;
  }
};

const AllItemsContext = createContext();

const AllItems = () => {
  const { data } = useLoaderData();
  return (
    <AllItemsContext.Provider value={{ data }}>
      <h3>All Items</h3>
      {data.map((item) => {
        const { _id, title } = item;
        return (
          <div key={_id}>
            <h4>{title}</h4>
            <Link to={`/dashboard/edit-item/${_id}`}>
              <button>Edit</button>
            </Link>
            <Form method="post" action={`/dashboard/delete-item/${_id}`}>
              <button type="submit">Delete</button>
            </Form>
          </div>
        );
      })}
    </AllItemsContext.Provider>
  );
};

export const useAllItemsContext = () => {
  useContext(AllItemsContext);
};

export default AllItems;

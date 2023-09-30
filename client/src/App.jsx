import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Register, { registerAction } from "./pages/Register";
import Login, { loginAction } from "./pages/Login";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import ItemCreate, { createItemAction } from "./pages/ItemCreate";
import AllItems, { itemsLoader } from "./pages/AllItems";
import Landing from "./layouts/Landing";
import EditItem, { editItemAction, editItemLoader } from "./pages/EditItem";
import { deleteItemAction } from "./pages/DeleteItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="register" element={<Register />} action={registerAction} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="dashboard" element={<Dashboard />} loader={dashboardLoader}>
        <Route index element={<AllItems />} loader={itemsLoader} />
        <Route
          path="create-item"
          element={<ItemCreate />}
          action={createItemAction}
        />
        <Route
          path="edit-item/:id"
          element={<EditItem />}
          action={editItemAction}
          loader={editItemLoader}
        />
        <Route path="delete-item/:id" action={deleteItemAction} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

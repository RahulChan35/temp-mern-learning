import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h2 className="title">To Do List App</h2>

      <Outlet />
    </>
  );
};

export default RootLayout;

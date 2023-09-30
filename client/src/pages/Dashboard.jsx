import {
  NavLink,
  Outlet,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";
import { createContext, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const dashboardLoader = async () => {
  try {
    const { data } = await axios.get("/api/v1/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useLoaderData();

  const logoutUser = async () => {
    navigate("/");
    toast.success("Loggin Out");
    await axios.get("/api/v1/auth/logout");
  };

  return (
    <DashboardContext.Provider value={{ user }}>
      <p>{user.name + "'s "}Dashboard</p>
      <nav>
        <NavLink to="create-item">Create Item</NavLink>
        <br />
        <NavLink to="/dashboard">All Items</NavLink>
      </nav>

      <button onClick={logoutUser}>Logout</button>

      <Outlet context={{ user }} />
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  useContext(DashboardContext);
};

export default Dashboard;

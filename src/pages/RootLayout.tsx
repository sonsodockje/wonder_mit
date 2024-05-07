import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default RootLayout;

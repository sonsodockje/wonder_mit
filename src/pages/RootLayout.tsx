import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <Outlet />
      </div>
      <div>푸터</div>
    </>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <Outlet />
      </div>
      <div className=" bg-color-blue">푸터</div>
    </>
  );
};

export default RootLayout;

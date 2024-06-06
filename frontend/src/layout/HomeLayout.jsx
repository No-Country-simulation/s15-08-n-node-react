import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";

const HomeLayout = () => {
  return (
    <main className="bg-[#06071B] flex justify-center">
      <header className="text-white w-full h-16 absolute content-center">
        <Navbar />
      </header>
      <Outlet />
    </main>
  );
};

export default HomeLayout;
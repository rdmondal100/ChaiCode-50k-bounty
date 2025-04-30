import { Outlet } from "react-router-dom";


import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default RootLayout;

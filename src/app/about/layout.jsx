import Navbar from "../Components/Navbar";

export const metadata = {
  title: "ABOUT",
};

export default function AboutLayout({ children }) {
  return (
     <div className="min-h-screen bg-gray-900 text-white">
          <Navbar/> 
      {children}
    </div>
      );
}

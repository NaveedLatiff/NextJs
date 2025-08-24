import Navbar from "../Components/Navbar";

export const metadata = {
  title: "ABOUT",
};

export default function AboutLayout({ children }) {
  return (
     <div className="min-h-screen ">
          <Navbar/> 
      {children}
    </div>
      );
}

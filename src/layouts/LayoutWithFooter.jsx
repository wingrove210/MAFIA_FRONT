import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutWithHeaderFooter = ({ children }) => (
    <>
      <Header/>
        <main className="h-auto w-[100vw]">{children}</main>
      <Footer />
    </>
  );
export default LayoutWithHeaderFooter;  
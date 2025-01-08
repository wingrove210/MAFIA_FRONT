import Header from "../Header";
import Footer from "../Footer";

const LayoutWithHeaderFooter = ({ children }) => (
    <>
      <Header />
      <main className="h-auto w-[100vw]">{children}</main>
      <Footer />
    </>
  );
export default LayoutWithHeaderFooter;  
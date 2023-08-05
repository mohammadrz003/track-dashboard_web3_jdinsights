import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-md pb-6">{children}</div>
    </>
  );
};

export default Layout;

import Header from '../header/header.component';
import Footer from './footer.component';
import { Outlet } from 'react-router';
import Aside from './aside.component';

const Layout = ({ title }) => {
  return (
    <>
      <Header title={title} />
      <div className="container-fluid container-xl mx-auto main-container row d-lg-flex flex-row-reverse justify-content-center">
        <div className="col-12 col-md-8 col-xl-9">
          <Outlet />
        </div>
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

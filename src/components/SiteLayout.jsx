import { Outlet } from 'react-router-dom';
import Header from './SiteHeader';
import Footer from './SiteFooter';

function Layout() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
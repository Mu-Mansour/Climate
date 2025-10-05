import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
      <header className='border-t backdrop-blur py-8 supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          <p>ssssssssssssss</p>
        </div>
      </header>
      <main className='min-h-screen container mx-auto px-4 py-8'>
        <Outlet />
      </main>
      <footer className='border-t backdrop-blur py-8 supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          <p>ssssssssssssss</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

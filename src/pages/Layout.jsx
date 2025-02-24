import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className='min-w-full min-h-full flex flex-col bg-[#161616]'>
            <Navbar />
            <div className="p-4 h-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;

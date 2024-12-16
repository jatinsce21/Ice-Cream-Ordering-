import React from 'react';
import AdminHeader from './components/Admin Components/AdminHeader/Header';
import AddProduct from './components/Admin Components/AddProducts/index.jsx';
import Footer from './components/Common Components/Footer';
import Banner from './components/Common Components/Banner';
import Products from './components/Common Components/Products/index.jsx';
import UserManagement from './components/Admin Components/UserManagement';
import VendorManagement from './components/Admin Components/VendorManagement';

const AdminDashboard = () => (
  <div>
    <Banner />
    <AdminHeader />
    <AddProduct />
    <UserManagement />
    <VendorManagement />
    <Products />
    <Footer />
  </div>
);

export default AdminDashboard;

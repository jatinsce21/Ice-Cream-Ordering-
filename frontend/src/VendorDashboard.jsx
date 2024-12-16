import React from 'react';
import VendorHeader from './components/Vendor Components/VendorHeader/Header';
import AddProducts from './components/Admin Components/AddProducts';
import Banner from './components/Common Components/Banner';
import Products from './components/Common Components/Products';
import Footer from './components/Common Components/Footer';
import OrderStatusManagement from './components/Vendor Components/OrderStatusManagement';

const VendorDashboard = () => (
  <div>
    <VendorHeader />
    <Banner />
    <AddProducts />
    <Products />
    <OrderStatusManagement />
    <Footer />
  </div>
);

export default VendorDashboard;

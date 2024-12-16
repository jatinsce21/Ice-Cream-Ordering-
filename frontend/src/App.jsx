// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import UserDashboard from './UserDashboard';
import VendorDashboard from './VendorDashboard';
import AdminDashboard from './AdminDashboard';
import Product from './pages/User Pages/Products';
import Categories from './pages/User Pages/Categories';
import OrderStatus from './pages/User Pages/OrderStatus';
import AddProductVendor from './pages/Vendor Pages/AddProduct';
import AddProduct from './pages/Admin Pages/AddProducts';
import UsersManagement from './pages/Admin Pages/UserManagementPage';
import VendorsManagement from './pages/Admin Pages/VendorManagementPage';
import OrderStatusManagementPage from './pages/Vendor Pages/OrderStatusManagementPage';
import CategoryManagementPage from './pages/Admin Pages/CategoryManagementPage';
import ReviewPage from './pages/User Pages/ReviewPage';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* User Pages */}
        <Route path="/user/product" element={<Product />} />
        <Route path="/user/categories" element={<Categories />} />
        <Route path="/user/order" element={<OrderStatus />} />
        <Route path="/user/review" element={<ReviewPage />} />

        {/* Vendor Pages */}
        <Route path="/vendor/add-product" element={<AddProductVendor />} />
        <Route
          path="/vendor/manage-order-status"
          element={<OrderStatusManagementPage />}
        />

        {/* Admin Pages */}
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/user-management" element={<UsersManagement />} />
        <Route
          path="/admin/vendor-management"
          element={<VendorsManagement />}
        />
        <Route
          path="/admin/manage-categories"
          element={<CategoryManagementPage />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

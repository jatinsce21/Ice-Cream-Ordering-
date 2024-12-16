import React, { useState } from 'react';
import './OrderStatusManagement.css';

const OrderStatusManagement = () => {
  // Sample data for orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      product: 'Chocolate Cup Ice-Cream',
      status: 'Pending',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      product: 'Mango Sundae Ice-Cream',
      status: 'Shipped',
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      product: 'Mango Stick Ice-Cream',
      status: 'Delivered',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="order-status-management">
      <h1 className="heading">Order Status Management</h1>
      <table className="management-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatusManagement;

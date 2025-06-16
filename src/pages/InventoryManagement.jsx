
import React from "react";
import { Package, AlertTriangle, TrendingUp, RefreshCw } from "lucide-react";
import DataCard from "../components/DataCard";
import './InventoryManagement.css';

const InventoryManagement = () => {
  const inventory = [
    { id: 1, item: "Towels", category: "Linens", stock: 450, minStock: 200, price: 15, status: "In Stock" },
    { id: 2, item: "Bed Sheets", category: "Linens", stock: 180, minStock: 150, price: 25, status: "Low Stock" },
    { id: 3, item: "Toilet Paper", category: "Amenities", stock: 89, minStock: 100, price: 12, status: "Critical" },
    { id: 4, item: "Shampoo", category: "Amenities", stock: 320, minStock: 150, price: 8, status: "In Stock" },
    { id: 5, item: "Coffee Pods", category: "Minibar", stock: 200, minStock: 100, price: 3, status: "In Stock" },
    { id: 6, item: "Cleaning Supplies", category: "Maintenance", stock: 75, minStock: 80, price: 35, status: "Critical" },
  ];

  const categories = [
    { name: "Linens", items: 15, value: 12500, lowStock: 2 },
    { name: "Amenities", items: 25, value: 8900, lowStock: 1 },
    { name: "Minibar", items: 30, value: 6700, lowStock: 0 },
    { name: "Maintenance", items: 18, value: 4200, lowStock: 3 },
    { name: "Electronics", items: 12, value: 15600, lowStock: 0 },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "In Stock": return "status-in-stock";
      case "Low Stock": return "status-low-stock";
      case "Critical": return "status-critical";
      default: return "status-default";
    }
  };

  const getStockBarClass = (current, min) => {
    if (current <= min * 0.5) return "stock-critical";
    if (current <= min) return "stock-low";
    return "stock-good";
  };

  return (
    <div className="inventory-management-page">
      <div className="page-header">
        <h1>Inventory Management</h1>
        <p>Track and manage hotel inventory, supplies, and stock levels.</p>
      </div>

      <div className="inventory-management-grid">
        <div className="main-content">
          <DataCard title="Inventory Items" icon={<Package className="icon" />}>
            <div className="inventory-list">
              {inventory.map((item) => (
                <div key={item.id} className="inventory-card">
                  <div className="inventory-header">
                    <div className="inventory-info">
                      <h3>{item.item}</h3>
                      <p className="inventory-category">{item.category}</p>
                    </div>
                    <span className={`inventory-status ${getStatusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <div className="inventory-details">
                    <div className="inventory-detail">
                      <p className="detail-label">Current Stock</p>
                      <p className="detail-value">{item.stock}</p>
                    </div>
                    <div className="inventory-detail">
                      <p className="detail-label">Min Stock</p>
                      <p className="detail-value">{item.minStock}</p>
                    </div>
                    <div className="inventory-detail">
                      <p className="detail-label">Unit Price</p>
                      <p className="detail-value">${item.price}</p>
                    </div>
                  </div>
                  
                  <div className="stock-bar">
                    <div 
                      className={`stock-fill ${getStockBarClass(item.stock, item.minStock)}`}
                      style={{width: `${Math.min((item.stock / item.minStock) * 100, 100)}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div className="sidebar-content">
          <DataCard title="Categories" icon={<TrendingUp className="icon" />}>
            <div className="categories-list">
              {categories.map((category, index) => (
                <div key={index} className="category-item">
                  <div className="category-header">
                    <span className="category-name">{category.name}</span>
                    {category.lowStock > 0 && (
                      <span className="low-stock-badge">
                        {category.lowStock} low
                      </span>
                    )}
                  </div>
                  <div className="category-details">
                    <span className="category-items">{category.items} items</span>
                    <span className="category-value">${category.value.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Alerts" icon={<AlertTriangle className="icon" />}>
            <div className="alerts-list">
              <div className="alert-item critical">
                <div className="alert-header">
                  <AlertTriangle className="alert-icon" />
                  <span className="alert-title">Critical Stock</span>
                </div>
                <p className="alert-description">2 items need immediate restocking</p>
              </div>
              
              <div className="alert-item warning">
                <div className="alert-header">
                  <Package className="alert-icon" />
                  <span className="alert-title">Low Stock</span>
                </div>
                <p className="alert-description">1 item below minimum threshold</p>
              </div>
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<RefreshCw className="icon" />}>
            <div className="inventory-actions">
              <button className="action-btn primary">Add New Item</button>
              <button className="action-btn success">Create Order</button>
              <button className="action-btn purple">Generate Report</button>
              <button className="action-btn warning">Update Stock</button>
            </div>
          </DataCard>

          <DataCard title="Summary" icon={<Package className="icon" />}>
            <div className="inventory-summary">
              <div className="summary-item">
                <span className="summary-label">Total Items</span>
                <span className="summary-value">100</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total Value</span>
                <span className="summary-value">$47,900</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Low Stock</span>
                <span className="summary-value warning">6</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Out of Stock</span>
                <span className="summary-value critical">2</span>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;

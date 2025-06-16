
import { Package, AlertTriangle, TrendingUp, RefreshCw } from "lucide-react";
import DataCard from "../components/DataCard";

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "bg-green-400/20 text-green-400";
      case "Low Stock": return "bg-yellow-400/20 text-yellow-400";
      case "Critical": return "bg-red-400/20 text-red-400";
      default: return "bg-gray-200 text-gray-600";
    }
  };

  const getStockLevel = (current: number, min: number) => {
    const percentage = (current / min) * 100;
    if (percentage <= 50) return "Critical";
    if (percentage <= 100) return "Low Stock";
    return "In Stock";
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Inventory Management</h1>
        <p className="text-gray-600">Track and manage hotel inventory, supplies, and stock levels.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DataCard title="Inventory Items" icon={<Package className="h-5 w-5 text-black" />}>
            <div className="space-y-4">
              {inventory.map((item) => (
                <div key={item.id} className="p-4 bg-white/60 rounded-lg border border-gray-200 hover:bg-white/80 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-black">{item.item}</h3>
                      <p className="text-gray-600">{item.category}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-gray-600 text-sm">Current Stock</p>
                      <p className="text-black font-semibold">{item.stock}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Min Stock</p>
                      <p className="text-black font-semibold">{item.minStock}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Unit Price</p>
                      <p className="text-black font-semibold">${item.price}</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        item.stock <= item.minStock * 0.5 ? 'bg-red-400' :
                        item.stock <= item.minStock ? 'bg-yellow-400' : 'bg-green-400'
                      }`}
                      style={{width: `${Math.min((item.stock / item.minStock) * 100, 100)}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div className="space-y-6">
          <DataCard title="Categories" icon={<TrendingUp className="h-5 w-5 text-black" />}>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="p-3 bg-white/60 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium">{category.name}</span>
                    {category.lowStock > 0 && (
                      <span className="bg-red-400/20 text-red-400 px-2 py-1 rounded-full text-xs">
                        {category.lowStock} low
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{category.items} items</span>
                    <span>${category.value.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Alerts" icon={<AlertTriangle className="h-5 w-5 text-black" />}>
            <div className="space-y-3">
              <div className="p-3 bg-red-400/10 border border-red-400/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 font-medium">Critical Stock</span>
                </div>
                <p className="text-gray-600 text-sm">2 items need immediate restocking</p>
              </div>
              
              <div className="p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Package className="h-4 w-4 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">Low Stock</span>
                </div>
                <p className="text-gray-600 text-sm">1 item below minimum threshold</p>
              </div>
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<RefreshCw className="h-5 w-5 text-black" />}>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors">
                Add New Item
              </button>
              <button className="w-full p-3 bg-green-400/20 text-green-400 rounded-lg hover:bg-green-400/30 transition-colors">
                Create Order
              </button>
              <button className="w-full p-3 bg-purple-400/20 text-purple-400 rounded-lg hover:bg-purple-400/30 transition-colors">
                Generate Report
              </button>
              <button className="w-full p-3 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors">
                Update Stock
              </button>
            </div>
          </DataCard>

          <DataCard title="Summary" icon={<Package className="h-5 w-5 text-black" />}>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Items</span>
                <span className="text-black font-semibold">100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Value</span>
                <span className="text-black font-semibold">$47,900</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Low Stock</span>
                <span className="text-yellow-400 font-semibold">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Out of Stock</span>
                <span className="text-red-400 font-semibold">2</span>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;


import { DollarSign, TrendingUp, TrendingDown, PieChart } from "lucide-react";
import DataCard from "../components/DataCard";

const ExpenditureManagement = () => {
  const expenses = [
    { id: 1, category: "Staff Salaries", amount: 25000, date: "Dec 15", type: "Fixed", status: "Paid" },
    { id: 2, category: "Utilities", amount: 3200, date: "Dec 14", type: "Variable", status: "Paid" },
    { id: 3, category: "Maintenance", amount: 1800, date: "Dec 13", type: "Variable", status: "Pending" },
    { id: 4, category: "Supplies", amount: 2100, date: "Dec 12", type: "Variable", status: "Paid" },
    { id: 5, category: "Marketing", amount: 1500, date: "Dec 11", type: "Fixed", status: "Paid" },
  ];

  const budgetCategories = [
    { category: "Staff", budgeted: 30000, spent: 25000, percentage: 83 },
    { category: "Utilities", budgeted: 4000, spent: 3200, percentage: 80 },
    { category: "Maintenance", budgeted: 3000, spent: 1800, percentage: 60 },
    { category: "Supplies", budgeted: 2500, spent: 2100, percentage: 84 },
    { category: "Marketing", budgeted: 2000, spent: 1500, percentage: 75 },
  ];

  const monthlyData = [
    { month: "Jan", expenses: 28500, revenue: 45000 },
    { month: "Feb", expenses: 31200, revenue: 48000 },
    { month: "Mar", expenses: 29800, revenue: 52000 },
    { month: "Apr", expenses: 33100, revenue: 49000 },
    { month: "May", expenses: 30500, revenue: 55000 },
    { month: "Dec", expenses: 33600, revenue: 58000 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid": return "bg-green-400/20 text-green-400";
      case "Pending": return "bg-yellow-400/20 text-yellow-400";
      case "Overdue": return "bg-red-400/20 text-red-400";
      default: return "bg-white/20 text-white";
    }
  };

  const getBudgetColor = (percentage: number) => {
    if (percentage > 90) return "bg-red-400";
    if (percentage > 75) return "bg-yellow-400";
    return "bg-green-400";
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Expenditure Management</h1>
        <p className="text-white/70">Monitor and control hotel expenses, budgets, and financial metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DataCard title="Recent Expenses" icon={<DollarSign className="h-5 w-5 text-white" />}>
            <div className="space-y-4">
              {expenses.map((expense) => (
                <div key={expense.id} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{expense.category}</h3>
                      <p className="text-white/70 text-sm">{expense.date} • {expense.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">${expense.amount.toLocaleString()}</p>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(expense.status)}`}>
                        {expense.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <div className="mt-6">
            <DataCard title="Budget vs Actual" icon={<PieChart className="h-5 w-5 text-white" />}>
              <div className="space-y-4">
                {budgetCategories.map((item, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{item.category}</span>
                      <span className="text-white/70">{item.percentage}%</span>
                    </div>
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                      <span>Spent: ${item.spent.toLocaleString()}</span>
                      <span>Budget: ${item.budgeted.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getBudgetColor(item.percentage)}`}
                        style={{width: `${item.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </DataCard>
          </div>
        </div>

        <div className="space-y-6">
          <DataCard title="Monthly Summary" icon={<TrendingUp className="h-5 w-5 text-white" />}>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-4 w-4 text-red-400" />
                  <span className="text-white font-medium">Total Expenses</span>
                </div>
                <p className="text-2xl font-bold text-white">$33,600</p>
                <p className="text-red-400 text-sm">+8% from last month</p>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-white font-medium">Revenue</span>
                </div>
                <p className="text-2xl font-bold text-white">$58,000</p>
                <p className="text-green-400 text-sm">+12% from last month</p>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-4 w-4 text-blue-400" />
                  <span className="text-white font-medium">Net Profit</span>
                </div>
                <p className="text-2xl font-bold text-white">$24,400</p>
                <p className="text-blue-400 text-sm">42% profit margin</p>
              </div>
            </div>
          </DataCard>

          <DataCard title="Expense Categories" icon={<PieChart className="h-5 w-5 text-white" />}>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-white/70">Staff Costs</span>
                <span className="text-white font-semibold">74%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-white/70">Utilities</span>
                <span className="text-white font-semibold">10%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-white/70">Supplies</span>
                <span className="text-white font-semibold">6%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-white/70">Maintenance</span>
                <span className="text-white font-semibold">5%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-white/70">Marketing</span>
                <span className="text-white font-semibold">4%</span>
              </div>
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<DollarSign className="h-5 w-5 text-white" />}>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors">
                Add Expense
              </button>
              <button className="w-full p-3 bg-green-400/20 text-green-400 rounded-lg hover:bg-green-400/30 transition-colors">
                Create Budget
              </button>
              <button className="w-full p-3 bg-purple-400/20 text-purple-400 rounded-lg hover:bg-purple-400/30 transition-colors">
                Financial Report
              </button>
              <button className="w-full p-3 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors">
                Export Data
              </button>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default ExpenditureManagement;

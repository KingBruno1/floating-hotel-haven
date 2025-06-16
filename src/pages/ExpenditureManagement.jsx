
import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from "lucide-react";
import DataCard from "../components/DataCard";
import './ExpenditureManagement.css';

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

  const categories = [
    { name: "Staff Costs", percentage: 74 },
    { name: "Utilities", percentage: 10 },
    { name: "Supplies", percentage: 6 },
    { name: "Maintenance", percentage: 5 },
    { name: "Marketing", percentage: 4 },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Paid": return "status-paid";
      case "Pending": return "status-pending";
      case "Overdue": return "status-overdue";
      default: return "status-default";
    }
  };

  const getBudgetClass = (percentage) => {
    if (percentage > 90) return "budget-critical";
    if (percentage > 75) return "budget-warning";
    return "budget-good";
  };

  return (
    <div className="expenditure-page">
      <div className="page-header">
        <h1>Expenditure Management</h1>
        <p>Monitor and control hotel expenses, budgets, and financial metrics.</p>
      </div>

      <div className="expenditure-grid">
        <div className="main-content">
          <DataCard title="Recent Expenses" icon={<DollarSign className="icon" />}>
            <div className="expenses-list">
              {expenses.map((expense) => (
                <div key={expense.id} className="expense-card">
                  <div className="expense-header">
                    <div className="expense-info">
                      <h3>{expense.category}</h3>
                      <p className="expense-meta">{expense.date} • {expense.type}</p>
                    </div>
                    <div className="expense-amount">
                      <p className="amount">${expense.amount.toLocaleString()}</p>
                      <span className={`status ${getStatusClass(expense.status)}`}>
                        {expense.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <div className="budget-section">
            <DataCard title="Budget vs Actual" icon={<PieChart className="icon" />}>
              <div className="budget-list">
                {budgetCategories.map((item, index) => (
                  <div key={index} className="budget-item">
                    <div className="budget-header">
                      <span className="category-name">{item.category}</span>
                      <span className="percentage">{item.percentage}%</span>
                    </div>
                    <div className="budget-amounts">
                      <span>Spent: ${item.spent.toLocaleString()}</span>
                      <span>Budget: ${item.budgeted.toLocaleString()}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className={`progress-fill ${getBudgetClass(item.percentage)}`}
                        style={{width: `${item.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </DataCard>
          </div>
        </div>

        <div className="sidebar-content">
          <DataCard title="Monthly Summary" icon={<TrendingUp className="icon" />}>
            <div className="summary-cards">
              <div className="summary-card">
                <div className="summary-header">
                  <TrendingDown className="icon-small trend-down" />
                  <span>Total Expenses</span>
                </div>
                <p className="summary-amount">$33,600</p>
                <p className="trend-up">+8% from last month</p>
              </div>
              
              <div className="summary-card">
                <div className="summary-header">
                  <TrendingUp className="icon-small trend-up" />
                  <span>Revenue</span>
                </div>
                <p className="summary-amount">$58,000</p>
                <p className="trend-up">+12% from last month</p>
              </div>
              
              <div className="summary-card">
                <div className="summary-header">
                  <DollarSign className="icon-small trend-neutral" />
                  <span>Net Profit</span>
                </div>
                <p className="summary-amount">$24,400</p>
                <p className="trend-neutral">42% profit margin</p>
              </div>
            </div>
          </DataCard>

          <DataCard title="Expense Categories" icon={<PieChart className="icon" />}>
            <div className="category-list">
              {categories.map((category, index) => (
                <div key={index} className="category-item">
                  <span className="category-label">{category.name}</span>
                  <span className="category-percentage">{category.percentage}%</span>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Quick Actions" icon={<DollarSign className="icon" />}>
            <div className="action-buttons">
              <button className="action-btn btn-primary">Add Expense</button>
              <button className="action-btn btn-success">Create Budget</button>
              <button className="action-btn btn-purple">Financial Report</button>
              <button className="action-btn btn-warning">Export Data</button>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default ExpenditureManagement;

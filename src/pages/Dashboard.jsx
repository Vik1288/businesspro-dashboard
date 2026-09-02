import React from "react";

import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import StatCard from "../components/StatCard";


// ===============================
// REVENUE DATA
// ===============================

const revenueData = [
  { month: "Jan", revenue: 180000 },
  { month: "Feb", revenue: 220000 },
  { month: "Mar", revenue: 195000 },
  { month: "Apr", revenue: 280000 },
  { month: "May", revenue: 310000 },
  { month: "Jun", revenue: 295000 },
  { month: "Jul", revenue: 360000 },
  { month: "Aug", revenue: 420000 },
  { month: "Sep", revenue: 390000 },
  { month: "Oct", revenue: 450000 },
  { month: "Nov", revenue: 510000 },
  { month: "Dec", revenue: 580000 },
];


// ===============================
// SALES DATA
// ===============================

const salesData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1500 },
  { month: "Mar", sales: 1350 },
  { month: "Apr", sales: 1800 },
  { month: "May", sales: 2100 },
  { month: "Jun", sales: 1950 },
  { month: "Jul", sales: 2400 },
  { month: "Aug", sales: 2750 },
  { month: "Sep", sales: 2600 },
  { month: "Oct", sales: 3100 },
  { month: "Nov", sales: 3500 },
  { month: "Dec", sales: 3900 },
];


// ===============================
// TRANSACTIONS DATA
// ===============================

const transactions = [
  {
    id: "#TRX-1001",
    customer: "Rahul Sharma",
    product: "Premium Plan",
    amount: "₹12,500",
    date: "17 Aug 2026",
    status: "Completed",
  },
  {
    id: "#TRX-1002",
    customer: "Priya Singh",
    product: "Business Plan",
    amount: "₹8,900",
    date: "16 Aug 2026",
    status: "Completed",
  },
  {
    id: "#TRX-1003",
    customer: "Amit Kumar",
    product: "Basic Plan",
    amount: "₹4,500",
    date: "16 Aug 2026",
    status: "Pending",
  },
  {
    id: "#TRX-1004",
    customer: "Neha Verma",
    product: "Premium Plan",
    amount: "₹15,200",
    date: "15 Aug 2026",
    status: "Completed",
  },
  {
    id: "#TRX-1005",
    customer: "Rohit Gupta",
    product: "Business Plan",
    amount: "₹9,800",
    date: "14 Aug 2026",
    status: "Cancelled",
  },
];


// ===============================
// TOP PRODUCTS DATA
// ===============================

const topProducts = [
  {
    name: "Premium Plan",
    category: "Subscription",
    sales: 1245,
    revenue: "₹4,85,000",
  },
  {
    name: "Business Plan",
    category: "Subscription",
    sales: 980,
    revenue: "₹3,72,000",
  },
  {
    name: "Basic Plan",
    category: "Subscription",
    sales: 765,
    revenue: "₹2,15,000",
  },
  {
    name: "Enterprise Plan",
    category: "Subscription",
    sales: 540,
    revenue: "₹1,95,000",
  },
];


// ===============================
// DASHBOARD COMPONENT
// ===============================

const Dashboard = () => {
  return (
    <main className="dashboard-content">

      {/* =========================
          PAGE HEADING
      ========================== */}

      <div className="page-heading">

        <div>
          <h1>Overview</h1>

          <p>
            Here's your business performance overview.
          </p>
        </div>

        <button className="date-button">
          This Month ▾
        </button>

      </div>


      {/* =========================
          STAT CARDS
      ========================== */}

      <div className="stats-grid">

        <StatCard
          title="Total Revenue"
          value="₹24,56,890"
          change="12.5%"
          icon={<DollarSign size={22} />}
        />

        <StatCard
          title="Total Orders"
          value="12,458"
          change="8.2%"
          icon={<ShoppingCart size={22} />}
        />

        <StatCard
          title="Total Customers"
          value="8,549"
          change="5.7%"
          icon={<Users size={22} />}
        />

        <StatCard
          title="Total Profit"
          value="₹8,42,560"
          change="15.3%"
          icon={<TrendingUp size={22} />}
        />

      </div>


      {/* =========================
          CHARTS
      ========================== */}

      <div className="charts-grid">


        {/* =======================
            REVENUE CHART
        ======================== */}

        <div className="chart-card">

          <div className="chart-header">

            <div>

              <h2>
                Revenue Overview
              </h2>

              <p>
                Monthly revenue performance
              </p>

            </div>

            <button className="chart-filter">
              2026 ▾
            </button>

          </div>


          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart data={revenueData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) =>
                    `₹${value / 1000}K`
                  }
                />

                <Tooltip
                  formatter={(value) => [
                    `₹${value.toLocaleString("en-IN")}`,
                    "Revenue",
                  ]}
                />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* =======================
            SALES CHART
        ======================== */}

        <div className="chart-card">

          <div className="chart-header">

            <div>

              <h2>
                Sales Performance
              </h2>

              <p>
                Monthly order volume
              </p>

            </div>

            <button className="chart-filter">
              2026 ▾
            </button>

          </div>


          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={salesData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="sales"
                  fill="#6366f1"
                  radius={[6, 6, 0, 0]}
                  barSize={25}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* =========================
          TRANSACTIONS + PRODUCTS
      ========================== */}

      <div className="bottom-grid">


        {/* =======================
            RECENT TRANSACTIONS
        ======================== */}

        <div className="data-card">

          <div className="data-card-header">

            <div>

              <h2>
                Recent Transactions
              </h2>

              <p>
                Latest business transactions
              </p>

            </div>

            <button className="view-all">
              View All
            </button>

          </div>


          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    Transaction
                  </th>

                  <th>
                    Customer
                  </th>

                  <th>
                    Product
                  </th>

                  <th>
                    Amount
                  </th>

                  <th>
                    Status
                  </th>

                </tr>

              </thead>


              <tbody>

                {transactions.map(
                  (transaction) => (

                    <tr
                      key={transaction.id}
                    >

                      <td>

                        <strong>
                          {transaction.id}
                        </strong>

                        <small>
                          {transaction.date}
                        </small>

                      </td>


                      <td>
                        {transaction.customer}
                      </td>


                      <td>
                        {transaction.product}
                      </td>


                      <td>

                        <strong>
                          {transaction.amount}
                        </strong>

                      </td>


                      <td>

                        <span
                          className={`status ${transaction.status.toLowerCase()}`}
                        >
                          {transaction.status}
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* =======================
            TOP PRODUCTS
        ======================== */}

        <div className="data-card">

          <div className="data-card-header">

            <div>

              <h2>
                Top Products
              </h2>

              <p>
                Best performing products
              </p>

            </div>

            <button className="view-all">
              View All
            </button>

          </div>


          <div className="products-list">

            {topProducts.map(
              (product, index) => (

                <div
                  className="product-item"
                  key={product.name}
                >

                  <div className="product-rank">
                    #{index + 1}
                  </div>


                  <div className="product-info">

                    <strong>
                      {product.name}
                    </strong>

                    <small>
                      {product.category}
                    </small>

                  </div>


                  <div className="product-sales">

                    <strong>
                      {product.sales}
                    </strong>

                    <small>
                      sales
                    </small>

                  </div>


                  <div className="product-revenue">
                    {product.revenue}
                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </main>
  );
};


export default Dashboard;
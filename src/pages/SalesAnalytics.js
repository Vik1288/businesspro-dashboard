import React from "react";
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

const monthlyData = [
  { month: "Jan", sales: 120000, profit: 45000 },
  { month: "Feb", sales: 150000, profit: 58000 },
  { month: "Mar", sales: 135000, profit: 50000 },
  { month: "Apr", sales: 180000, profit: 72000 },
  { month: "May", sales: 210000, profit: 85000 },
  { month: "Jun", sales: 195000, profit: 78000 },
  { month: "Jul", sales: 240000, profit: 98000 },
  { month: "Aug", sales: 275000, profit: 112000 },
  { month: "Sep", sales: 260000, profit: 105000 },
  { month: "Oct", sales: 310000, profit: 128000 },
  { month: "Nov", sales: 350000, profit: 145000 },
  { month: "Dec", sales: 390000, profit: 165000 },
];

const SalesAnalytics = () => {
  return (
    <main className="dashboard-content">

      <div className="page-heading">
        <div>
          <h1>Sales Analytics</h1>
          <p>Analyze your sales and profit performance.</p>
        </div>

        <button className="date-button">
          This Year ▾
        </button>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <span>Total Sales</span>
          <h2>₹28,45,000</h2>
          <small>+18.5% from last year</small>
        </div>

        <div className="stat-card">
          <span>Total Profit</span>
          <h2>₹10,85,000</h2>
          <small>+15.8% from last year</small>
        </div>

        <div className="stat-card">
          <span>Average Order</span>
          <h2>₹2,284</h2>
          <small>+7.2% from last year</small>
        </div>

        <div className="stat-card">
          <span>Conversion Rate</span>
          <h2>8.64%</h2>
          <small>+2.4% from last year</small>
        </div>

      </div>

      <div className="charts-grid">

        <div className="chart-card">

          <div className="chart-header">
            <div>
              <h2>Sales & Profit</h2>
              <p>Monthly sales and profit comparison</p>
            </div>
          </div>

          <div className="chart-container">

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>

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
                  formatter={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={false}
                />

                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={false}
                />

              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>


        <div className="chart-card">

          <div className="chart-header">
            <div>
              <h2>Monthly Sales</h2>
              <p>Sales volume throughout the year</p>
            </div>
          </div>

          <div className="chart-container">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>

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
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </main>
  );
};

export default SalesAnalytics;
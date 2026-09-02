import React from "react";
import {
  FileText,
  Download,
  TrendingUp,
  ShoppingCart,
  Users,
  Package,
  Calendar,
} from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "Revenue Report",
      description: "Monthly revenue and profit analysis",
      value: "₹24,56,890",
      change: "+12.5%",
      icon: <TrendingUp size={22} />,
    },
    {
      title: "Sales Report",
      description: "Sales and order performance",
      value: "12,458",
      change: "+8.2%",
      icon: <ShoppingCart size={22} />,
    },
    {
      title: "Customer Report",
      description: "Customer growth and activity",
      value: "8,549",
      change: "+5.7%",
      icon: <Users size={22} />,
    },
    {
      title: "Inventory Report",
      description: "Stock and product inventory",
      value: "668",
      change: "+4.3%",
      icon: <Package size={22} />,
    },
  ];

  const monthlyReport = [
    {
      month: "January",
      revenue: "₹1,80,000",
      orders: "1,200",
      customers: "620",
      profit: "₹62,000",
    },
    {
      month: "February",
      revenue: "₹2,20,000",
      orders: "1,500",
      customers: "710",
      profit: "₹78,000",
    },
    {
      month: "March",
      revenue: "₹1,95,000",
      orders: "1,350",
      customers: "680",
      profit: "₹70,000",
    },
    {
      month: "April",
      revenue: "₹2,80,000",
      orders: "1,800",
      customers: "850",
      profit: "₹96,000",
    },
    {
      month: "May",
      revenue: "₹3,10,000",
      orders: "2,100",
      customers: "920",
      profit: "₹1,12,000",
    },
    {
      month: "June",
      revenue: "₹2,95,000",
      orders: "1,950",
      customers: "890",
      profit: "₹1,05,000",
    },
  ];

  return (
    <main className="dashboard-content">

      {/* PAGE HEADER */}

      <div className="page-heading">

        <div>
          <h1>Reports</h1>

          <p>
            Generate and analyze your business reports.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >

          <button className="date-button">
            <Calendar size={17} />
            This Month ▾
          </button>

          <button className="date-button">
            <Download size={17} />
            Export Report
          </button>

        </div>

      </div>


      {/* REPORT CARDS */}

      <div className="stats-grid">

        {reports.map((report) => (

          <div className="stat-card" key={report.title}>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >

              <div>

                <span>
                  {report.title}
                </span>

                <h2>
                  {report.value}
                </h2>

              </div>

              <div className="stat-icon">
                {report.icon}
              </div>

            </div>

            <small>
              <span
                style={{
                  color: "#16a34a",
                  fontWeight: "600",
                }}
              >
                {report.change}
              </span>{" "}
              from last month
            </small>

          </div>

        ))}

      </div>


      {/* AVAILABLE REPORTS */}

      <div className="section-heading">

        <div>
          <h2>Available Reports</h2>

          <p>
            Select a report to view detailed business information.
          </p>
        </div>

      </div>


      <div className="products-cards-grid">

        {reports.map((report) => (

          <div
            className="product-card"
            key={report.title}
            style={{
              cursor: "pointer",
            }}
          >

            <div className="product-card-top">

              <div className="product-icon">
                <FileText size={22} />
              </div>

              <span className="stock-badge in-stock">
                Available
              </span>

            </div>


            <div className="product-card-info">

              <h3>
                {report.title}
              </h3>

              <p>
                {report.description}
              </p>

            </div>


            <div
              style={{
                marginTop: "20px",
              }}
            >

              <button
                className="view-all"
                type="button"
              >
                View Report →
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* MONTHLY REPORT TABLE */}

      <div className="data-card">

        <div className="data-card-header">

          <div>
            <h2>Monthly Business Report</h2>

            <p>
              Revenue, orders, customers and profit overview
            </p>
          </div>

          <button
            className="view-all"
            type="button"
          >
            Export CSV
          </button>

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Month</th>
                <th>Revenue</th>
                <th>Orders</th>
                <th>Customers</th>
                <th>Profit</th>
              </tr>

            </thead>


            <tbody>

              {monthlyReport.map((report) => (

                <tr key={report.month}>

                  <td>
                    <strong>
                      {report.month}
                    </strong>
                  </td>

                  <td>
                    <strong>
                      {report.revenue}
                    </strong>
                  </td>

                  <td>
                    {report.orders}
                  </td>

                  <td>
                    {report.customers}
                  </td>

                  <td>
                    <strong>
                      {report.profit}
                    </strong>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
};

export default Reports;
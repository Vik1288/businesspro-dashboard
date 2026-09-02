import React, { useState } from "react";

const customersData = [
  {
    id: "CUS-001",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    orders: 24,
    spent: "₹85,400",
    status: "Active",
  },
  {
    id: "CUS-002",
    name: "Priya Singh",
    email: "priya@gmail.com",
    orders: 18,
    spent: "₹62,800",
    status: "Active",
  },
  {
    id: "CUS-003",
    name: "Amit Kumar",
    email: "amit@gmail.com",
    orders: 12,
    spent: "₹38,500",
    status: "Inactive",
  },
  {
    id: "CUS-004",
    name: "Neha Verma",
    email: "neha@gmail.com",
    orders: 31,
    spent: "₹1,24,600",
    status: "Active",
  },
  {
    id: "CUS-005",
    name: "Rohit Gupta",
    email: "rohit@gmail.com",
    orders: 9,
    spent: "₹27,900",
    status: "Active",
  },
  {
    id: "CUS-006",
    name: "Anjali Mishra",
    email: "anjali@gmail.com",
    orders: 15,
    spent: "₹48,200",
    status: "Active",
  },
];

const Customers = () => {

  const [search, setSearch] = useState("");

  const filteredCustomers = customersData.filter((customer) =>
    customer.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="dashboard-content">

      <div className="page-heading">

        <div>
          <h1>Customers</h1>

          <p>
            Manage and analyze your customer base.
          </p>
        </div>

        <button className="date-button">
          Export ▾
        </button>

      </div>


      {/* CUSTOMER STATS */}

      <div className="stats-grid">

        <div className="stat-card">
          <span>Total Customers</span>
          <h2>8,549</h2>
          <small>+5.7% this month</small>
        </div>

        <div className="stat-card">
          <span>New Customers</span>
          <h2>486</h2>
          <small>+12.4% this month</small>
        </div>

        <div className="stat-card">
          <span>Active Customers</span>
          <h2>7,820</h2>
          <small>91.5% of total</small>
        </div>

        <div className="stat-card">
          <span>Avg. Customer Value</span>
          <h2>₹18,450</h2>
          <small>+8.6% this month</small>
        </div>

      </div>


      {/* CUSTOMER TABLE */}

      <div className="data-card customers-card">

        <div className="data-card-header">

          <div>
            <h2>All Customers</h2>

            <p>
              Customer list and purchase information
            </p>
          </div>

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="customer-search"
          />

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
              </tr>

            </thead>


            <tbody>

              {filteredCustomers.map((customer) => (

                <tr key={customer.id}>

                  <td>

                    <div className="customer-name">

                      <div className="customer-avatar">
                        {customer.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {customer.name}
                        </strong>

                        <small>
                          {customer.id}
                        </small>
                      </div>

                    </div>

                  </td>


                  <td>
                    {customer.email}
                  </td>


                  <td>
                    {customer.orders}
                  </td>


                  <td>
                    <strong>
                      {customer.spent}
                    </strong>
                  </td>


                  <td>

                    <span
                      className={`status ${customer.status.toLowerCase()}`}
                    >
                      {customer.status}
                    </span>

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

export default Customers;
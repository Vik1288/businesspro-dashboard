import React, { useState } from "react";

const transactionsData = [
  {
    id: "#TRX-1001",
    customer: "Rahul Sharma",
    product: "Premium Plan",
    amount: "₹12,500",
    date: "20 Aug 2026",
    payment: "UPI",
    status: "Completed",
  },
  {
    id: "#TRX-1002",
    customer: "Priya Singh",
    product: "Business Plan",
    amount: "₹8,900",
    date: "19 Aug 2026",
    payment: "Card",
    status: "Completed",
  },
  {
    id: "#TRX-1003",
    customer: "Amit Kumar",
    product: "Basic Plan",
    amount: "₹4,500",
    date: "19 Aug 2026",
    payment: "UPI",
    status: "Pending",
  },
  {
    id: "#TRX-1004",
    customer: "Neha Verma",
    product: "Premium Plan",
    amount: "₹15,200",
    date: "18 Aug 2026",
    payment: "Net Banking",
    status: "Completed",
  },
  {
    id: "#TRX-1005",
    customer: "Rohit Gupta",
    product: "Business Plan",
    amount: "₹9,800",
    date: "18 Aug 2026",
    payment: "Card",
    status: "Cancelled",
  },
  {
    id: "#TRX-1006",
    customer: "Anjali Mishra",
    product: "Starter Plan",
    amount: "₹5,600",
    date: "17 Aug 2026",
    payment: "UPI",
    status: "Completed",
  },
  {
    id: "#TRX-1007",
    customer: "Vikas Tiwari",
    product: "Enterprise Plan",
    amount: "₹18,500",
    date: "17 Aug 2026",
    payment: "Card",
    status: "Pending",
  },
  {
    id: "#TRX-1008",
    customer: "Pooja Gupta",
    product: "Basic Plan",
    amount: "₹3,900",
    date: "16 Aug 2026",
    payment: "UPI",
    status: "Completed",
  },
];

const Transactions = () => {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactionsData.filter((transaction) => {
    const searchText = search.toLowerCase();

    return (
      transaction.id.toLowerCase().includes(searchText) ||
      transaction.customer.toLowerCase().includes(searchText) ||
      transaction.product.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="dashboard-content">

      {/* PAGE HEADER */}

      <div className="page-heading">

        <div>
          <h1>Transactions</h1>

          <p>
            Track and manage all business transactions.
          </p>
        </div>

        <button className="date-button">
          Export Report
        </button>

      </div>


      {/* TRANSACTION STATS */}

      <div className="stats-grid">

        <div className="stat-card">
          <span>Total Transactions</span>
          <h2>12,458</h2>
          <small>+8.2% this month</small>
        </div>

        <div className="stat-card">
          <span>Total Revenue</span>
          <h2>₹24,56,890</h2>
          <small>+12.5% this month</small>
        </div>

        <div className="stat-card">
          <span>Completed</span>
          <h2>11,240</h2>
          <small>90.2% successful</small>
        </div>

        <div className="stat-card">
          <span>Pending</span>
          <h2>824</h2>
          <small>Needs attention</small>
        </div>

      </div>


      {/* TRANSACTIONS TABLE */}

      <div className="data-card transactions-card">

        <div className="data-card-header">

          <div>
            <h2>All Transactions</h2>

            <p>
              Complete transaction history
            </p>
          </div>


          {/* SEARCH */}

          <input
            type="text"
            className="transaction-search"
            placeholder="Search transaction..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Transaction</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>

            </thead>


            <tbody>

              {filteredTransactions.length > 0 ? (

                filteredTransactions.map((transaction) => (

                  <tr key={transaction.id}>

                    {/* TRANSACTION */}

                    <td>

                      <div className="transaction-info">

                        <strong>
                          {transaction.id}
                        </strong>

                        <small>
                          {transaction.date}
                        </small>

                      </div>

                    </td>


                    {/* CUSTOMER */}

                    <td>
                      {transaction.customer}
                    </td>


                    {/* PRODUCT */}

                    <td>
                      {transaction.product}
                    </td>


                    {/* AMOUNT */}

                    <td>

                      <strong>
                        {transaction.amount}
                      </strong>

                    </td>


                    {/* PAYMENT */}

                    <td>
                      {transaction.payment}
                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={`status ${transaction.status.toLowerCase()}`}
                      >
                        {transaction.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="no-transactions"
                  >

                    No transactions found.

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
};

export default Transactions;